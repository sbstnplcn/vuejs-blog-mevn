<template>
  	<div class="row">
	  	<h4>Login</h4>
		<label for="">Email</label>
		<input type="email" v-model="user.email">
		<label for="">Password</label>
		<input type="password" v-model="user.password">
		<a class="btn" @click="connexion">Connexion</a>
  	</div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
	name: 'Login',
	data() {
		return {
			user: {},
			authService: new AuthService
		}
	},
	methods: {
		connexion() {
			this.authService.login(this.user, '/')
		}
	},
	mounted() {
		if(this.authService.checkAuth()) {
			this.$router.push('/')
		}
	}
}
</script>

