<template>
	<div class="post-container">
		<div>
			<div class="post">
				<div class="img-container">
					<avatar :image="post.author.image" />
				</div>
				<div class="post_content_container">
					<div class="post-author">{{ post.author.name }}</div>
					<div class="post-content">
						{{ post.content }}
					</div>
					<div class="post-reactions">
						<div
							class="like"
							@click="handleLike"
							:class="{ liked: post.likes.includes(userId) }"
						>
							<love-svg /> {{ post.likes.length > 0 ? post.likes.length : '' }}
						</div>
						<div class="reply" @click="reply = !reply" v-if="post.comments">
							<reply-svg /> {{ post.comments.length }}
						</div>
					</div>
				</div>
				<div class="post-menu">
					<template v-if="userId === post.author.id">
						<img
							:src="postMenuDropdown"
							alt=""
							@click="postMenuToggle = !postMenuToggle"
						/>

						<div class="post-menu__dropdown" :class="{ show: postMenuToggle }">
							<li @click="deletePost">delete</li>
						</div>
					</template>
					<div class="date">{{ date }}</div>
				</div>
			</div>
			<div v-if="reply" class="write-comment">
				<input
					type="text"
					placeholder="write a comment"
					v-model="content.content"
				/>
				<div class="send-comment" @click="createComment">
					<img :src="sendSVG" alt="" />
				</div>
			</div>
		</div>
		<div v-if="reply">
			<comment
				v-for="comment in post.comments"
				:comment="comment"
				:key="comment.id"
			/>
		</div>
	</div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import LoveSvg from '../components/svg/LoveSvg.vue';
import ReplySvg from '../components/svg/ReplySvg.vue';
import Comment from './Comment.vue';

// import commentApi from '@/api/comment.js';
import postApi from '@/api/post.js';
import { useStore } from 'vuex';

import postMenuDropdown from '@/assets/postMenu.svg';
import Avatar from './shared/Avatar.vue';

import { socket } from '@/service/socket';

import sendSVG from '@/assets/post.svg';

export default {
	name: 'Post',
	props: {
		post: Object,
	},
	components: { ReplySvg, LoveSvg, Comment, Avatar },
	setup(props) {
		// console.log(props.post);
		const store = useStore();
		const content = reactive({ content: '' });

		const createComment = () => {
			// commentApi
			// 	.create({
			// 		content: content.content,
			// 		userId: store.state.user.id,
			// 		postId: props.post.id,
			// 	})
			// 	.then((result) => {
			// 		console.log(result);
			// 		store.commit('setComment', result.data);
			// 		content.content = '';
			// 	})
			// 	.catch((err) => {
			// 		console.log(err);
			// 	});
			socket.emit('createComment', {
				content: content.content,
				userId: store.state.user.id,
				postId: props.post.id,
			});

			content.content = '';
		};

		const handleLike = () => {
			postApi
				.likePost({ userId: store.state.user.id, postId: props.post.id })
				.then((result) => {
					store.commit('likePost', props.post.id);
					console.log(result);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		const deletePost = () => {
			// console.log(props.post.id);
			const postId = props.post.id;
			postApi
				.deletePost({ postId })
				.then((result) => {
					console.log(result.data);
					store.commit('deletePost', postId);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		let reply = ref(false);
		const postMenuToggle = ref(false);

		const userId = ref(store.state.user.id);
		// const some = ref(props.post);
		// console.log(some.value.likes.includes(userId.value));
		return {
			postMenuDropdown,
			postMenuToggle,
			reply,
			createComment,
			content,
			handleLike,
			userId,
			date: new Date(props.post.createdAt).toLocaleDateString(),
			deletePost,
			sendSVG,
		};
	},
};
</script>

<style>
.write-comment {
	transition: all 1s ease;
	display: flex;
	align-items: center;
}
.write-comment input {
	/* width: 100%; */
	flex: 1;
	padding: 5px;
	/* margin-bottom: 5px; */
	border-radius: 10px;
	border: 1px solid rgb(226, 226, 226);
	/* border: none; */
	background-color: #f7f9fa;
	font-size: 15px;
	outline: none;
}
.write-comment .send-comment {
	padding: 5px 10px;
	display: flex;
	cursor: pointer;
	border-radius: 5px;
	transition: 0.3s ease;
}

.send-comment:hover {
	background-color: #51c4d3;
}

.post-container {
	background-color: #fff;
	/* max-width: 600px; */
	border-bottom: 1px solid rgb(226, 226, 226);
}
.post {
	max-width: 100%;
	height: auto;
	padding: 20px 10px;
	display: flex;
	/* border-bottom: none; */
	min-width: 0px;
	/* margin: 15px 0; */
}

.post_content_container {
	flex: 1;
	height: auto;
	min-width: 0px;
	/* flex-shrink: ; */
}

.post-content {
	width: 100%;
	min-width: 0px;
	line-height: 1.1;
	margin-top: 5px;
	margin-bottom: 10px;
	font-size: 15px;
	/* color: rebeccapurple; */
	/* display: inline; */
	/* overflow-wrap: break-word; */
}

.post-author {
	font-weight: 600;
}

.post-reactions {
	display: flex;
	column-gap: 10px;
}

.like,
.reply {
	display: flex;
	align-items: center;
	cursor: pointer;
}

.liked svg {
	fill: red;
}

.date {
	margin-top: auto;
	font-size: 15px;
	color: rgb(136, 136, 136);
}

.post-menu {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.post-menu img {
	max-height: 20px;
	cursor: pointer;
}

.post-menu__dropdown {
	display: none;
	padding: 5px 10px;
	position: absolute;
	left: -100%;
	top: 0;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.post-menu__dropdown li {
	cursor: pointer;
}

.show {
	display: block;
}
</style>
