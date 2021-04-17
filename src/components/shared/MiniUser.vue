<template>
	<div class="mini-user-container">
		<div class="img-container">
			<!-- <img
				v-if="user.image"
				:src="
					'https://arcane-bayou-45011.herokuapp.com/uploads/images/' +
						user.image
				"
				alt=""
			/>
			<img v-else src="@/assets/unknown.jpg" alt="" /> -->
			<avatar :image="user.image" />
		</div>
		<div>{{ user.name }}</div>
	</div>
</template>

<script>
import Avatar from './Avatar.vue';
export default {
	props: {
		user: Object,
	},
	components: {
		Avatar,
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
	width: 55px;
	min-width: 50px;
	margin-right: 10px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;
	border: 1px solid rgb(212, 212, 212);
}

/* .img-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
} */

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
