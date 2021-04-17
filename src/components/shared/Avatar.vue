<template>
	<img
		v-if="image"
		:src="'https://arcane-bayou-45011.herokuapp.com/uploads/images/' + image"
		alt=""
	/>
	<!-- <img
		v-if="image"
		:src="`http://localhost:5000/uploads/images/${image}`"
		alt=""
	/> -->
	<img v-else src="@/assets/unknown.jpg" alt="" />
</template>

<script>
export default {
	name: 'Avatar',
	props: {
		image: String,
	},
};
</script>

<style scoped>
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
