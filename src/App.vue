<template>
  <h1>{{ title }}</h1>
  <nav id="nav">
    <router-link :to="{name: 'HeroList'}">Heroes</router-link>
  <router-link :to="{name: 'Dashboard' }">Dashboard</router-link>
  </nav>
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
  padding: 1rem;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #e8e8e8;
  color: #3d3d3d;
  border-radius: 4px;  color: #2c3e50;
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
