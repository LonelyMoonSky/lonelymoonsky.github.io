<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from "./views/home/Home"

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  #app {
    margin: 20px;
    cursor: default;
  }

</style>
