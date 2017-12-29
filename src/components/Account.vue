<template>
	<div class="row">
  		<h1>Bonjour {{user.name}}</h1>
		<label for="">Nom</label>
		<input type="text" v-model="user.name">

		<a class="btn" @click="disconnect">Déconnexion</a>
	</div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
	name: 'Account',
	data() {
		return {
			user: {},
			authService: new AuthService
		}
	},
	mounted() {
		if (this.authService.checkAuth()) {
			this.getCurrentUser()
		} else {
			this.$router.push('login')
		}
	},
	methods: {
		getCurrentUser() {
			this.authService
			.getCurrent()
			.then(res => {
				this.user = res
			})
		},
		disconnect() {
			this.authService.logout()
		}
	}

}
</script>

<style>

</style>
