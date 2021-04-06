<template>
	<nav-bar />
	<router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';
import user from './api/user';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
	name: 'App',
	components: { NavBar },
	setup() {
		const store = useStore();
		const router = useRouter();
		user.isLoggedin().then((res) => {
			if (res.data) {
				localStorage.setItem('auth', true);
				store.commit('setUser', res.data);
				console.log(res);
			} else {
				localStorage.removeItem('auth');
				router.push('/login');
			}
		});
		// .catch((err) => {
		// 	console.log(err);
		// 	localStorage.removeItem('auth');
		// 	router.push('/login');
		// });
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
	/* height: 100vh; */
	background-color: #ffffff;
}

li {
	list-style: none;
}
</style>
