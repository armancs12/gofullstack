<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <router-view />
</template>


<script lang="ts">
import router from '@/router'

export default {
  data() {
    routes: router.getRoutes()
  } 
}
</script>
