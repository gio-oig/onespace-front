<template>
	<div class="form-container">
		<div class="form">
			<div class="form__title">LogIn</div>
			<div>
				<custom-input type="email" label="email" v-model:value="form.email" />
				<custom-input
					type="password"
					label="password"
					v-model:value="form.password"
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

		const handleClick = () => {
			user
				.login(form)
				.then((result) => {
					const { user, token } = result.data;
					console.log(user);
					console.log(token);
					localStorage.setItem('token', token);
					store.commit('setUser', user);
					router.push('/');
				})
				.catch((err) => {
					console.log(err);
				});
		};
		// watch(username, (newVal) => {
		// 	console.log(newVal);
		// });
		return {
			handleClick,
			form,
		};
	},
};
</script>

<style></style>
