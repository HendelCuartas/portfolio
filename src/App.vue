<template>

  <div id="app">
    <MenuNav/>
    <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
    <router-view/>
    </transition>
  </div>
</template>

<script>

import MenuNav from '@/components/MenuNav'
import ContentHome from '@/components/ContentHome'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    MenuNav, ContentHome
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
