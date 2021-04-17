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
// import { io } from 'socket.io-client';

export default {
	name: 'App',
	components: { NavBar },
	setup() {
		// const socket = io('http://localhost:5000', {
		// 	query: {
		// 		x: 42,
		// 	},
		// });
		// socket.emit('createPost', () => {
		// 	console.log('socket');
		// });

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
					console.log('first load:');
					console.log(res.data.user);
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
</style>
