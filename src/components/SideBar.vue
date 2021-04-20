<template>
	<div class="sidebar">
		<mini-user
			v-for="user in users"
			:user="user"
			:key="user.id"
			@handleClick="handleUserClick"
		/>
	</div>
</template>

<script>
import MiniUser from './shared/MiniUser.vue';
import userApi from '@/api/user.js';
import { ref } from '@vue/reactivity';

import { socket } from '@/service/socket';
import { useStore } from 'vuex';
import { onBeforeUnmount } from '@vue/runtime-core';
// import { onBeforeUnmount } from '@vue/runtime-core';

export default {
	components: { MiniUser },
	name: 'SideBar',
	setup() {
		const store = useStore();
		const users = ref([]);
		// prettier-ignore
		userApi.getAllUsers().then((result) => {
			// console.log(result)
			users.value = result.data; 
		}).catch((err) => {
			console.log(err)
		});

		socket.on('onlineUsers', ({ onlineUsers }) => {
			console.log('onlineUsers');
			console.log(onlineUsers);
			store.commit('setActiveUsers', onlineUsers);
		});

		onBeforeUnmount(() => {
			socket.off('onlineUsers');
		});

		// const handleOnlineUsers = (args) => {
		// 	console.log(args);
		// };

		const handleUserClick = (userId) => {
			// socket.emit('sendMessage', userId);
			store.commit('setMessengerStatus');
			// store.commit('setChattingWith', userId);
			console.log(userId);
		};

		return {
			users,
			handleUserClick,
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
	background-color: #fff;
}
@media (max-width: 1000px) {
	.sidebar {
		/* display: none; */
		/* position: relative; */
		position: static;
		width: 100%;
		height: auto;
		flex-direction: row;
		margin: 5px 0;
		border-radius: 5px;
		overflow-y: hidden;
		overflow-x: auto;
	}
}
</style>
