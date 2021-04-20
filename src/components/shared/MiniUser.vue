<template>
	<div class="mini-user-container" @click="$emit('handleClick', user.id)">
		<div class="img-container">
			<avatar :image="user.image" />
			<div v-if="activeUsers.includes(user.id)" class="active-user-sign"></div>
		</div>
		<div>{{ user.name }}</div>
	</div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import Avatar from './Avatar.vue';
export default {
	props: {
		user: Object,
	},
	emits: ['handleClick'],
	components: {
		Avatar,
	},
	setup() {
		const store = useStore();
		// console.log(props.user.id);
		// console.log(store.state.activeUsers.includes(props.user.id));
		return {
			activeUsers: computed(() => store.state.activeUsers),
		};
	},
};
</script>

<style>
.mini-user-container {
	display: flex;
	margin: 5px 0;
	align-items: center;
}

.img-container {
	position: relative;
	width: 55px;
	min-width: 50px;
	margin-right: 10px;
	height: 50px;
	/* overflow: hidden; */
	/* border: 1px solid rgb(212, 212, 212); */
}

/* .img-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
} */

.active-user-sign {
	position: absolute;
	right: 5px;
	bottom: 0;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: cyan;
}

@media (max-width: 1000px) {
	.mini-user-container {
		margin: 0;
		margin-right: 10px;
		flex-direction: column;
	}
	.img-container {
		margin-right: 0;
	}
}
</style>
