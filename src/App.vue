<template>
  <div id="app">
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
  height: 100vh;
  background: #efefef;
}
</style>
