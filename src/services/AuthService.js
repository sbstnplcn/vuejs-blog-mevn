import router from '@/router/index'
import axios from 'axios'
import cookie from 'vue-cookie'

const API_URL = 'http://localhost:8000/api/'
const LOGIN_URL = API_URL + 'auth'
const SIGNUP_URL = API_URL + 'users'

const user = {
	authenticated: false
}

export default class AuthService {

  	login(creds, redirect) {
		axios.post(LOGIN_URL, creds).then((data) => {
			cookie.set('token', data.data.token, 365)
			user.authenticated = true
			if(redirect) router.push(redirect)
		}).catch(err => {
			this.error = err
		})
	}

	signup(creds, redirect) {
		axios.post(SIGNUP_URL, creds).then((data) => {
			cookie.set('token', data.data.token, 365)
			user.authenticated = true
			if(redirect) router.push(redirect)
		}).catch(err => {
			this.error = err
		})
	}

	logout() {
		cookie.delete('token')
		user.authenticated = false
		router.push('/')
	}

	checkAuth() {
		if(cookie.get('token')) {
			user.authenticated = true
			return true
		}
		else {
			user.authenticated = false
			return false
		}
	}

	getAuthHeader() {
		return {
			'Authorization': 'Bearer ' + cookie.get('token')
		}
	}
	getCurrent() {
		return new Promise((resolve, reject) => {
			if (!cookie.get('token')) {
				reject()
			} else {
				let payload = cookie.get('token').split('.')[1]
				payload = window.atob(payload)
				payload = JSON.parse(payload)
				let currentUser = payload.user
				if (Math.round(new Date().getTime() / 1000) > payload.exp) return this.logout()
				return resolve(currentUser)
			}
		})
	}
}