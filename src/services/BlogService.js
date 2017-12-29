import axios from 'axios'
const uri = "http://localhost:8000"

export default class BlogService {
	get() {
		return axios.get(uri + '/api/articles')
	}
	getById(id) {
		return axios.get(uri + '/api/articles/' + id)
	}
	create(article) {
		return axios.post(uri + '/api/articles', article)
	}
	edit(article) {
		return axios.put(uri + '/api/articles/' + article._id, article)
	}
	delete(article) {
		return axios.delete(uri + '/api/articles/' + article._id)
	}
}
