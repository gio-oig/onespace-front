<template>
	<div class="input-wrapper">
		<label class="label">{{ label }}</label>
		<input
			@click="handleClick"
			:type="type"
			:value="value"
			@input="$emit('update:value', $event.target.value)"
		/>

		<div v-if="error">
			{{ error }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'CustomInput',
	emits: ['click', 'update:value'],
	props: {
		label: String,
		value: String,
		type: String,
		error: String,
	},
	methods: {
		handleClick() {
			this.$emit('click', this.label);
		},
	},
};
</script>

<style>
.input-wrapper {
	display: inline-block;
	position: relative;
	width: 100%;
	margin-bottom: 10px;
}

.label {
	display: block;
	text-align: start;
	transition: all 0.5s ease;
	background: transparent;
	font-size: 18px;
	color: black;
	text-transform: capitalize;
}
/* 
input:focus ~ .label {
	top: 0;
} */

.input-wrapper input {
	width: 100%;
	margin-bottom: 5px;
	border-radius: 10px;
	background-color: #00a18918;
	border: 2px solid transparent;
	/* border: none; */
	/* box-shadow: 0 2px 10px rgba(136, 136, 136, 0.2); */
	padding: 10px 10px;
	font-size: 20px;
	outline: none;
	letter-spacing: 0.4px;
	color: rgb(31, 31, 31);
}
</style>
