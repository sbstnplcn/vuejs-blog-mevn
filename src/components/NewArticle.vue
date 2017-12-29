<template>
  <div class="row">
	<h4>Nouvel Article</h4>
	<div class="col s12 m12">
		<div class="card blue-grey lighten-5">
		<div class="card-content">
			<span class="card-title">
				<label for="">Title</label>
				<input type="text" v-model="article.title">
			</span>
			<p>
				<label for="">Content</label>
				<textarea class="materialize-textarea" type="text" v-model="article.content"></textarea>
			</p>
		</div>
		<div class="card-action">
			<a class="btn" @click="save(article)">Save</a>
		</div>
		</div>
	</div>
</div>
</template>

<script>
import BlogService from '@/services/BlogService'

export default {
	name: "NewArticle",
	data() {
		return {
			article: {},
			blogService: new BlogService
		}
	},
	methods: {
		save(article) {
			this.blogService.create(article).then((res) => {
				this.article = {}
				this.$router.push('/article/' + res.data._id)
			})
		}
	}
}
</script>

<style>

</style>
