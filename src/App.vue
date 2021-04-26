<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  
  </div>
  <h1>{{ title }}</h1>
  <router-view/>
</template>

<style>
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[type="text"], button {
  color: #333;
  font-family: Cambria, Georgia, serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script lang="ts">
import {defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    let title = ref("Tour of Heroes");  
    return { title }  
  }
})
</script>
