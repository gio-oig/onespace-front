<template>
	<div class="mini-user-container">
		<div class="img-container">
			<img
				v-if="user.image"
				:src="'http://localhost:5000/uploads/images/' + user.image"
				alt=""
			/>
			<img v-else src="@/assets/unknown.jpg" alt="" />
		</div>
		<div>{{ user.name }}</div>
	</div>
</template>

<script>
export default {
	props: {
		user: Object,
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
	height: 50px;
	margin-right: 10px;
	border-radius: 50%;
	overflow: hidden;
	border: 1px solid rgb(212, 212, 212);
}

.img-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
