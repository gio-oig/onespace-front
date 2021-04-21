<template>
	<div class="main-conteiner">
		<side-bar />
		<div class="content">
			<div class="writer-container">
				<textarea
					rows="3"
					:placeholder="`What's in your mind, ${user?.name}?`"
					v-model="newPost.content"
				>
				</textarea>
				<div class="writer-container__tools">
					<div class="emoji-hover">
						<emojy-svg @click="emojiToggle = !emojiToggle" />
					</div>
					<div class="emoji-hover" @click="handleSubmit">
						<img :src="postSvg" alt="" />
					</div>
					<!-- <div>photo</div> -->
				</div>
			</div>
			<emoji v-if="emojiToggle" @emoji="setEmoji" />
			<post v-for="post in posts" :key="post.id" :post="post" />
			<!-- <post /> -->
		</div>
	</div>
	<messanger v-if="isActive" />
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import user from '../api/user';
import postApi from '../api/post';
import Post from '../components/Post.vue';
import SideBar from '../components/SideBar.vue';
import EmojySvg from '../components/svg/EmojySvg.vue';
import { computed, onBeforeUnmount } from '@vue/runtime-core';
import { useStore } from 'vuex';

import Messanger from '@/components/messanger/Messanger.vue';

import { socket } from '@/service/socket';
import Emoji from '../components/Emoji.vue';

import postSvg from '../assets/post.svg';

export default {
	components: { SideBar, Post, EmojySvg, Messanger, Emoji },
	name: 'Home',
	setup() {
		const router = useRouter();
		const store = useStore();

		const newPost = reactive({ content: '' });
		const emojiToggle = ref(false);
		const posts = computed(() => store.state.posts);

		const logout = () => {
			user.logout().then(() => {
				localStorage.removeItem('auth');
				router.push('/login');
			});
		};

		postApi
			.getPosts()
			.then((result) => {
				// console.log(result);
				store.commit('setPosts', result.data);
			})
			.catch((err) => {
				console.log(err);
			});

		const handleSubmit = () => {
			postApi
				.create({ content: newPost.content })
				.then((res) => {
					store.commit('addPost', res.data);
				})
				.catch((err) => {
					console.log(err);
				});
			// socket.emit('createPost', { content: newPost.content });
			newPost.content = '';
		};

		socket.on('newComment', (comment) => {
			console.log(comment);
			store.commit('setComment', comment);
		});

		onBeforeUnmount(() => {
			socket.off('newComment');
		});

		const setEmoji = (data) => {
			newPost.content = newPost.content + data;
		};

		console.log(store.state.user);

		return {
			// checkIfLoggedIn,
			user: computed(() => store.state.user),
			newPost,
			handleSubmit,
			posts,
			isActive: computed(() => store.state.messengerStatus),
			setEmoji,
			emojiToggle,
			postSvg,
			logout,
		};
	},
};
</script>

<style>
.main-conteiner {
	/* height: 300vh; */
	width: 100%;
	max-width: 1200px;
	display: flex;
	/* flex-direction: column; */
	margin: auto;
	/* height: 100vh; */
	/* display: grid; */
	/* grid-template-columns: minmax(100px, 200px) 1fr; */
	overflow-wrap: break-word;
	word-wrap: break-word;
	word-break: break-all;
}

.content {
	width: 700px;
	padding-top: 5px;
	background-color: #f7f9fa;
	/* display: flex; */
	/* flex-direction: column; */
	/* align-items: center; */
}

@media (max-width: 1000px) {
	.main-conteiner {
		flex-direction: column;
		max-width: calc(100% - 100px);
		margin: auto;
	}
	.content {
		margin: 0 auto 0 auto;
		width: 100%;
	}
}

@media (max-width: 500px) {
	.main-conteiner {
		max-width: 95%;
		margin: auto;
	}
}

.writer-container {
	/* max-width: 700px; */
	/* width: calc(100% - 30px); */
	/* width: 80%; */
	margin-bottom: 10px;
	padding: 5px;
	border: 1px solid rgb(202, 202, 202);
	border-radius: 5px;
	background-color: #fff;
}
.writer-container textarea {
	width: 100% !important;
	border: none;
	outline: none;
	/* resize: none; */
}

.writer-container__tools {
	display: flex;
	justify-content: space-between;
}
.writer-container__tools > div {
	/* flex: 1; */
}

.emoji-hover {
	display: flex;
	padding: 3px 5px;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s ease;
}

.emoji-hover:hover {
	background-color: #51c4d3;
}

/* EMOJI  */
</style>
