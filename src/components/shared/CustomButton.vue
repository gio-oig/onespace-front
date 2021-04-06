<template>
	<button>{{ text }}</button>
</template>

<script>
export default {
	name: 'CustomButton',
	props: {
		text: String,
	},
};
</script>

<style scoped>
button {
	width: 100%;
	padding: 15px;
	font-size: 18px;
	border: none;
	border-radius: 10px;
	background-color: teal;
	cursor: pointer;
	outline: none;
}
</style>
