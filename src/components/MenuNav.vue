<template>
 <header class="global-nav">
  <nav role="navigation" class="container">
    <ul class="nav-wrapper">
      <!-- Start Mobile Section -->
      <li class="navsection-mobile">
        <!-- Mobile Menu Button -->
                 <h2>Menu</h2>
        <a class="mobilemenu-wrapper" id="toggle" v-on:click="setActive">
            <span class="bars"></span>
            <span class="bars"></span>
            <span class="bars"></span>
          </a>
        <!-- Overlay -->
        <div class="overlay" id="overlay">
          <div>
            <ul>
              <li v-on:click="setActive"><router-link to="/">Home</router-link></li>
              <li v-on:click="setActive"><router-link to="/projects">Projects</router-link></li>
              <li v-on:click="setActive"><router-link to="/about">About Me</router-link></li>
              <li v-on:click="setActive"><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
        </div>
      </li>
      <!-- End Mobile Section -->
      <!-- Start Search Section -->
    </ul>
  </nav>
</header>

</template>

<script>
import $ from 'jquery'
export default {
  name: 'MenuNav',
  data () {
    return {}
  },

  methods: {
    setActive () {
      $(this).toggleClass('active')
      $('#overlay').toggleClass('open')
      $('.mobilemenu-wrapper').toggleClass('active')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only
background: radial-gradient(circle farthest-corner   at right bottom,#424C5D, #424C4E);-->
<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

body {
  background: radial-gradient(circle farthest-corner   at right bottom,#424C5D, #424C4E);
  height: 100%;
  width: 100%;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 100;
  font-size: 16px;
  color: white;
  position: relative;
  overflow: hidden;
  background-color: #2c3e50;
}
.container {
  margin: 0 auto;
}
/* General Styling for Navigation */
.global-nav {
    position: absolute;
    left: 0;
    top: 0px;
    right: 0;
    z-index: 500;
}
.global-nav a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}
.global-nav ul {
    padding: 0;
    margin: 0;
}

.nav-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-flow: row wrap;
      flex-flow: row wrap;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  position: relative;
}

.nav-wrapper a:hover {
  color: rgba(255,255,255,0.6);
}
.navsection-mobile {
  margin-right: 2em;
  margin-top: 2em;
}
/* Styling Mobile Section */
.navsection-mobile {
    display: none;
    position: relative;
}
.navsection-mobile h2 {
  font-size: 0;
}
.mobilemenu-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  height: 26px;
  width: 30px;
  z-index: 500;
}
.mobilemenu-wrapper.active .bars:nth-child(1) {
  -webkit-transform: translateX(3px);
        transform: translateX(3px);
}
.mobilemenu-wrapper.active .bars:nth-child(2) {
   -webkit-transform: translateX(-700%);
         transform: translateX(-700%);
  opacity: 0;
}
.mobilemenu-wrapper.active .bars:nth-child(3) {
  -webkit-transform: translateX(3px);
        transform: translateX(3px);
}
.bars {
  background: #fff;
  display: block;
  border-radius: 4px;
  height: 4px;
  width: 100%;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.overlay {
    background: rgba(0,0,0,0.8);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    visibility: hidden;
    -webkit-transition: visibility 0.35s, height 0.35s;
    transition: visibility 0.35s, height 0.35s;
    overflow: auto; /* Set scroll for content heavy menus */
}
.overlay.open {
  visibility: visible;
  height: 100%;
}
.overlay.open li {
  -webkit-animation: fadeInRight 0.5s ease forwards;
          animation: fadeInRight 0.5s ease forwards;
  -webkit-animation-delay: 0.35s;
          animation-delay: 0.35s;
}
.overlay.open li:nth-of-type(2) {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}
.overlay.open li:nth-of-type(3) {
  -webkit-animation-delay: 0.45s;
          animation-delay: 0.45s;
}
.overlay.open li:nth-of-type(4) {
  -webkit-animation-delay: 0.50s;
          animation-delay: 0.50s;
}
.overlay.open li:nth-of-type(5) {
    animation-delay: 0.55s;
}
.overlay div {
  font-size: 32px;
  margin: 40px 0 0;
  text-align: center;
}
.overlay ul {
  display: inline-block;
  margin: 40px 0 0;
  position: relative;
  height: 100%;
}
.overlay ul li {
  display: block;
  min-height: 50px;
  position: relative;
  opacity: 0;
}
.overlay ul li a {
  display: block;
  position: relative;
  overflow: hidden;
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
      transform: translate3d(70px,0px,0px);
  }
  100% {
    opacity: 1;
      transform: translate3d(0px,0px,0px);
  }
}
  .navsection-mobile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  }
  .navsection-primary {
    display: none;
  }
</style>
