import axios from 'axios'

const uri = "http://localhost:8000"

export default class UserService {
	get() {
		return axios.get(uri + '/api/user')
	}
	getById(id) {
		return axios.get(uri + '/api/user/' + id)
	}
	create(user) {
		return axios.post(uri + '/api/user', user)
	}
	edit(user) {
		return axios.put(uri + '/api/user/' + user._id, user)
	}
	delete(user) {
		return axios.delete(uri + '/api/user/' + user._id)
	}
}
