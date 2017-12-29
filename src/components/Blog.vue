<template>
  <div class="row">
    <h4>Article</h4>
      <div class="col s12 m12">
        <div class="card blue-grey lighten-5">
          <div class="card-content">
            <span class="card-title">{{article.title}}</span>
            <p>{{article.content}}</p>
            <label for="">{{article.createdAt | date('%F')}} | <span>{{article.author}}</span></label>
          </div>
          <div class="card-action">
            <router-link :to="$route.path + '/edit'">Edit</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BlogService from '@/services/BlogService'

export default {
  name: 'Blog',
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
    }
  }
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
