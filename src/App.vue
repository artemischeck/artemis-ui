<template>
  <div id="app" class="bg-dark">
    <DefaultLayout />
  </div>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  color: #dfdfdf;
}
</style>
