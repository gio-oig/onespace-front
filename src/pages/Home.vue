<template>
	<div class="main-conteiner">
		<side-bar />
		<div class="content">
			<div class="writer-container">
				<textarea
					rows="3"
					placeholder="What's in your mind?"
					v-model="newPost.content"
				>
				</textarea>
				<div class="writer-container__tools">
					<div>
						<emojy-svg />
					</div>
					<div @click="handleSubmit">POST</div>
					<!-- <div>photo</div> -->
				</div>
			</div>
			<post v-for="post in posts" :key="post.id" :post="post" />
			<!-- <post /> -->
		</div>
	</div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import user from '../api/user';
import postApi from '../api/post';
import Post from '../components/Post.vue';
import SideBar from '../components/SideBar.vue';
import EmojySvg from '../components/svg/EmojySvg.vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
	components: { SideBar, Post, EmojySvg },
	name: 'Home',
	setup() {
		const router = useRouter();
		const store = useStore();
		const newPost = reactive({ content: '' });
		// const posts = ref([{ content: 'post 1' }, { content: 'post 2' }]);
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
				console.log(result);
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
			newPost.content = '';
		};

		return {
			// checkIfLoggedIn,
			logout,
			newPost,
			handleSubmit,
			posts,
		};
	},
};
</script>

<style>
.main-conteiner {
	height: 300vh;
	/* width: 100%; */
	max-width: 1200px;
	display: flex;
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
	margin-top: 20px;
	background-color: #f7f9fa;
	/* display: flex; */
	/* flex-direction: column; */
	/* align-items: center; */
}

@media (max-width: 700px) {
	.content {
		/* padding: 0 30px; */
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
	/* flex: 1; */
}
.writer-container__tools > div {
	flex: 1;
}
</style>
