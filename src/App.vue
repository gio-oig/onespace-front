<template>
	<nav-bar />
	<div id="content">
		<router-view></router-view>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import user from './api/user';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { socket } from '@/service/socket';
// import { onBeforeUnmount } from '@vue/runtime-core';
export default {
	name: 'App',
	components: { NavBar },
	setup() {
		// socket.onAny((event, ...args) => {
		// 	console.log(event, args);
		// });

		const store = useStore();
		const router = useRouter();
		user
			.isLoggedin()
			.then((res) => {
				if (res.data) {
					store.commit('setUser', res.data.user);
					socket.emit('join', { userId: res.data.user.id });
					socket.userId = res.data.user.id;
					// console.log(socket.userId);
				} else {
					localStorage.removeItem('auth');
					router.push('/login');
				}
			})
			.catch((err) => {
				console.log(err.message);
				localStorage.removeItem('token');
				router.push('/login');
			});
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	/* margin-top: 60px; */
	min-height: 100vh;
	background-color: #f1f1f1;
}

li {
	list-style: none;
}

a {
	text-decoration: none;
	color: #2c3e50;
}
</style>
