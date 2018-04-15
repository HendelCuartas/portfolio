<template>
  <div id="app">
    <MenuNav/>
    <router-view/>
  </div>
</template>

<script>

import MenuNav from '@/components/MenuNav'
import ContentHome from '@/components/ContentHome'

export default {
  name: 'App',
  components: {
    MenuNav, ContentHome
  }
}
</script>

<style>



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
