<template>
	<header>
		<nav>
			<h1 class="logo">OneSpace</h1>

			<template v-if="user">
				<input placeholder="Search User" class="nav-search" type="text" />
				<div class="user-profile">
					<div
						class="user-profile__img-container"
						@click="toggleProfileDropdown"
					>
						<img
							v-if="user.image"
							:src="'http://localhost:5000/uploads/images/' + user.image"
							alt=""
						/>
						<img v-else src="@/assets/unknown.jpg" alt="" />
					</div>
					<div class="dropdown" :class="{ active: activeDropdown }">
						<div @click="handleLogout">logout</div>
					</div>
				</div>
			</template>
		</nav>
	</header>
</template>

<script>
import { computed, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';

import userApi from '@/api/user';
import { useRouter } from 'vue-router';
export default {
	name: 'NavBar',
	setup() {
		const store = useStore();
		const router = useRouter();

		const activeDropdown = ref(false);

		const handleLogout = () => {
			userApi.logout().then(() => {
				store.commit('setUser', null);
				localStorage.removeItem('token');
				router.push('/login');
			});
		};

		const toggleProfileDropdown = () => {
			activeDropdown.value = !activeDropdown.value;
		};

		const user = computed(() => store.state.user);
		// console.log(user.value);
		return {
			user,
			handleLogout,
			activeDropdown,
			toggleProfileDropdown,
		};
	},
};
</script>

<style>
header {
	position: sticky;
	top: 0;
	background-color: #fff;
	z-index: 10;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.logo {
	margin-right: 20px;
}
nav {
	margin: auto;
	max-width: 1200px;
	padding: 10px;
	min-height: 40px;
	display: flex;
	align-items: center;
}
.nav-search {
	font-size: 15px;
	border: none;
	border-radius: 10px;
	padding: 10px;
	outline: none;
	background-color: #f7f9fa;
}

.user-profile {
	position: relative;
	margin-left: auto;
}

.user-profile__img-container {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	overflow: hidden;
	cursor: pointer;
}

.user-profile__img-container img {
	object-fit: cover;
	width: 100%;
	height: 100%;
}

.dropdown {
	position: absolute;
	padding: 10px;
	/* width: 100px; */
	display: none;
	bottom: -50px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	cursor: pointer;
}

.active {
	display: block;
}
</style>
