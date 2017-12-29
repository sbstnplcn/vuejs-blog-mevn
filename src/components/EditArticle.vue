<template>
    <div class="row">
      <div class="col s12 m12">
		  <h4>Edit</h4>
        <div class="card blue-grey lighten-5">
          <div class="card-content">
            <span class="card-title">
				<input type="text" v-model="article.title">
			</span>
            <p>
				<textarea class="materialize-textarea" type="text" v-model="article.content"></textarea>
			</p>
          </div>
          <div class="card-action">
			<a class="btn" @click="goBack">Cancel</a>
            <a class="btn" @click="saveArticle(article)">Save</a>
			<a class="btn" @click="deleteArticle(article)">Delete</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BlogService from '@/services/BlogService'

export default {
  name: 'EditArticle',
  data () {
    return {
      article: {},
	  blogService: new BlogService()
    }
  },
  mounted() {
    this.getArticleById(this.$route.params.id)
  },
  methods: {
    getArticleById(id) {
      this.blogService
        .getById(id)
        .then(res => {
          this.article = res.data
        })
	},
	goBack() {
		this.$router.go(-1)
	},
	saveArticle(article) {
		this.blogService
		.edit(article)
		.then(res => {
			const newResArticle = JSON.parse(res.config.data)
			this.$router.push('/article/' + newResArticle._id)
		})
	},
	deleteArticle(article) {
		this.blogService
		.delete(article)
		.then(res => {
			this.$router.push('/')
		})
	}
  }
}
</script>
<style>

</style>
