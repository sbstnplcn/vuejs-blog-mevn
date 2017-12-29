<template>
  <div class="row">
    <h4>Articles</h4>
    <div class="col s12 m6" v-for="article in articles" :key="article._id">
      <div class="card blue-grey lighten-5">
        <div class="card-content">
          <span class="card-title">{{article.title}}</span>
          <p>{{article.content}}</p>
        </div>
        <div class="card-action">
          <router-link :to="'/article/' + article._id" class="btn">Show More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogService from '@/services/BlogService'

export default {
  name: 'Articles',
  data () {
    return {
      articles: [],
      blogService: new BlogService()
    }
  },
  mounted() {
    this.allArticles()
  },
  methods: {
    allArticles() {
        this.blogService
        .get()
        .then(res => {
          this.articles = res.data
        })
      }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
