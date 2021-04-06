<template>
	<div class="sidebar">
		<mini-user v-for="user in users" :user="user" :key="user.id" />
	</div>
</template>

<script>
import MiniUser from './shared/MiniUser.vue';
import userApi from '@/api/user.js';
import { ref } from '@vue/reactivity';
export default {
	components: { MiniUser },
	name: 'SideBar',
	setup() {
		const users = ref({});
		// prettier-ignore
		userApi.getAllUsers().then((result) => {
			console.log(result)
			users.value = result.data; 
		}).catch((err) => {
			console.log(err)
		});
		return {
			users,
		};
	},
};
</script>

<style>
.sidebar {
	display: flex;
	padding: 10px;
	width: 250px;
	flex-direction: column;
	position: sticky;
	height: calc(100vh - 40px);
	overflow-y: auto;
	left: 0;
	top: 40px;
	border-right: 1px solid rgb(233, 233, 233);
}
@media (max-width: 1000px) {
	.sidebar {
		display: none;
	}
}
</style>
