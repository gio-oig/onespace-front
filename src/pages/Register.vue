<template>
	<div class="form-container">
		<div class="form">
			<div class="form__title">Register</div>
			<div>
				<custom-input type="text" label="username" v-model:value="form.name" />
				<custom-input type="email" label="email" v-model:value="form.email" />
				<custom-input
					type="password"
					label="password"
					v-model:value="form.password"
				/>
				<input
					class="custom-file-input"
					type="file"
					name="image"
					id=""
					@change="handleImageUpload"
				/>
			</div>
			<custom-button text="Register" @click="handleClick" />
			<router-link to="/login">login</router-link>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue';

import User from '../api/user';

import CustomInput from '@/components/shared/CustomInput';
import CustomButton from '@/components/shared/CustomButton.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
	name: 'Register',
	components: {
		CustomInput,
		CustomButton,
	},
	setup() {
		const router = useRouter();
		const store = useStore();
		const form = reactive({
			name: '',
			email: '',
			image: '',
			password: '',
		});

		const handleImageUpload = (e) => {
			// console.log('object');
			form.image = e.target.files[0];
			console.log(e.target.files);
		};

		const handleClick = () => {
			const formData = new FormData();
			for (let key in form) {
				formData.append(key, form[key]);
			}

			User.register(formData)
				.then((res) => {
					console.log(res);
					store.commit('setUser', res.data);
					localStorage.setItem('auth', true);
					router.push('/');
				})
				.catch((err) => console.log(err));
		};
		return {
			form,
			handleClick,
			handleImageUpload,
		};
	},
};
</script>

<style>
.form-container {
	padding-top: 30px;
}
.form {
	/* background: #fff; */
	padding: 30px 20px;
	/* box-shadow: 0 5px 20px rgba(105, 105, 105, 0.2); */
	border-radius: 5px;
	/* 
	margin: auto;
	max-width: 400px;
	padding: 0 20px;
 */
}

.form__title {
	font-size: 20px;
	margin-bottom: 30px;
}

.custom-file-input {
	margin-bottom: 10px;
	outline: none;
}

.custom-file-input::-webkit-file-upload-button {
	visibility: hidden;
}
.custom-file-input::before {
	content: 'Select Image';
	display: inline-block;
	background-color: #00a18918;
	/* border: 1px solid #999; */
	border-radius: 5px;
	padding: 5px 8px;
	outline: none;
	white-space: nowrap;
	-webkit-user-select: none;
	cursor: pointer;
	text-shadow: 1px 1px #fff;
	font-weight: 700;
	font-size: 10pt;
}
.custom-file-input:hover::before {
	/* border-color: black; */
}
.custom-file-input:active::before {
	background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

@media (min-width: 960px) {
	.form {
		width: 500px;
		margin: auto;
	}
}
</style>
