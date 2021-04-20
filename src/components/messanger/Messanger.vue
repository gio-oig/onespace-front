<template>
	<div id="messanger">
		<div class="messanger__header">
			<div class="messanger__header__avatar-container">
				<avatar />
			</div>
			<div class="messanger__header__close" @click="closeMessengerWindow">
				<img :src="closeMessanger" alt="" />
			</div>
		</div>
		<div class="messanger__body">
			<p class="message">hello, giorgi</p>
			<p class="message my-message">hy :D</p>
		</div>
		<div class="messanger__footer">
			<input type="text" placeholder="Aa" v-model="message" />
			<button @click="sendMessage">send</button>
		</div>
	</div>
</template>

<script>
import closeMessanger from '@/assets/close.svg';
import Avatar from '@/components/shared/Avatar.vue';
import { useStore } from 'vuex';
import { socket } from '@/service/socket';
import { ref } from '@vue/reactivity';

export default {
	name: 'Messaner',
	components: { Avatar },
	setup() {
		const store = useStore();
		const message = ref('');
		const closeMessengerWindow = () => {
			store.commit('setMessengerStatus');
		};
		const sendMessage = () => {
			socket.emit('sendMessage', {
				userId: store.state.chattingWith,
				message: message.value,
			});
		};
		return {
			closeMessanger,
			closeMessengerWindow,
			sendMessage,
			message,
		};
	},
};
</script>

<style>
#messanger {
	position: absolute;
	height: 400px;
	/* max-height: 400; */
	min-width: 300px;
	display: flex;
	flex-direction: column;
	right: 20px;
	bottom: 0;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background-color: #fff;
	box-shadow: 0 2px 5px rgba(20, 20, 20, 0.2);
}

.messanger__header {
	position: relative;
	padding: 0 10px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow-x: hidden;
	box-shadow: 0 2px 5px rgba(20, 20, 20, 0.2);
}

/* .messanger__header::after {
	content: '';
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	height: 2px;
} */

.messanger__header__avatar-container {
	width: 30px;
	height: 30px;
}
.messanger__header__close {
	height: 20px;
}
.messanger__header__close img {
	width: 20px;
	height: 20px;
}

.messanger__body {
	flex: 1;
	overflow-y: auto;
}
@media (max-width: 600px) {
	#messanger {
		height: 100vh;
		width: 100vw;
		left: 0;
		z-index: 90;
	}
}
</style>
