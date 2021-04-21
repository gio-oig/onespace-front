<template>
	<div class="form-container">
		<div class="form">
			<div class="form__title">LogIn</div>
			<div>
				<custom-input
					type="email"
					label="email"
					v-model:value="form.email"
					@click="clearErrors"
					:error="errors.email"
				/>
				<custom-input
					type="password"
					label="password"
					v-model:value="form.password"
					@click="clearErrors"
					:error="errors.password"
				/>
			</div>
			<custom-button text="Login" @click="handleClick" />
			<router-link to="/register">register</router-link>
		</div>
	</div>
</template>

<script>
import CustomButton from '@/components/shared/CustomButton.vue';
import CustomInput from '@/components/shared/CustomInput.vue';
import { reactive } from '@vue/reactivity';
import user from '../api/user';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { socket } from '@/service/socket';
import Api from '../api/api';

export default {
	components: { CustomInput, CustomButton },
	name: 'LogIn',
	setup() {
		const store = useStore();
		const router = useRouter();
		const form = reactive({
			email: '',
			password: '',
		});

		const errors = reactive({
			email: '',
			password: '',
		});

		const handleClick = () => {
			const error = checkErrors();

			if (error) return;

			console.log('pass');

			// const {email, password} = form;
			// if(!email && !password) {
			// 	errors
			// }
			user
				.login(form)
				.then((result) => {
					const { user, token } = result.data;
					// console.log(user);
					// console.log(token);
					localStorage.setItem('token', token);
					store.commit('setUser', user);
					socket.emit('join', { userId: user.id });
					Api.defaults.headers.common['Authorization'] = token;
					router.push('/');
				})
				.catch((err) => {
					console.log(err.response.data.message);
				});
		};
		// watch(username, (newVal) => {
		// 	console.log(newVal);
		// });

		const checkErrors = () => {
			let error = false;
			for (const key in form) {
				if (form[key] === '') {
					error = true;
					errors[key] = `please, type ${key}`;
				}
			}
			return error;
		};

		const clearErrors = () => {
			for (const key in errors) {
				errors[key] = '';
			}
		};

		return {
			handleClick,
			form,
			errors,
			clearErrors,
		};
	},
};
</script>

<style></style>
