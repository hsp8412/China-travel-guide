<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue"

</script>

<template>
  <NavBar/>
  <div><RouterView /></div>
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;

  font-weight: normal;
}

</style>
