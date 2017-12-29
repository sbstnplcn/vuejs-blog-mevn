<template>
  <nav>
    <div class="nav-wrapper blue-grey lighten-1">
	<router-link to="/" class="brand-logo">Blog</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Blog</router-link></li>
		<li><router-link to="/article/new">Nouvel Article</router-link></li>
        <li><router-link to="/account">Mon compte</router-link></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
	name: 'Header', 
  	data () {
		return {
			
		}
  	}
}
</script>
