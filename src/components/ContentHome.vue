<template>
  <div class="container_home page">
<div class="content">
  <div class="content__container">
    <p class="content__container__text animated pulse">
      With
    </p>
    <ul class="content__container__list">
      <li class="content__container__list__item animated pulse">love</li>
      <li class="content__container__list__item animated pulse">enthusiasm</li>
      <li class="content__container__list__item animated pulse">energy</li>
      <li class="content__container__list__item animated pulse">good vibes</li>
    </ul>
  </div>
</div>
      <img class="animated pulse" src="@/logos/logo.png" alt="Logo HE">
      <p class="namehe animated pulse"> Héndel Cuartas</p>
      <h2 class="animated slideInUp">Interactive media designer</h2>
      <div class="view-proje">
        <a class="routerLink"><router-link to="/projects">Take a look at my work!<p class="arrow">></p></router-link></a>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'ContentHome',
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

<style>
@import url(https://fonts.googleapis.com/css?family=Rajdhani);
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.content {
  position: absolute;
  top: 5%;
  left: 0%;
  height: 160px;
  overflow: hidden;
  font-family: 'Rajdhani', sans-serif;
  font-size: 20px;
  line-height: 40px;
  color: #ecf0f1;
}
.content__container {
  font-weight: 600;
  overflow: hidden;
  height: 40px;
}
.content__container__text {
  display: inline;
  color: goldenrod;
  margin-left: -5em;
}
.content__container__list {
  margin-top: -1px;
  padding-left: 100px;
  margin-left: -1em;
  text-align: left;
  list-style: none;
  -webkit-animation-name: change;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  max-width: 20em;
}
.content__container__list__item {
  line-height: 40px;
  margin: 0;
  margin-right: 0.5em;
}

@-webkit-keyframes opacity {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
@-webkit-keyframes change {
  0%, 12.66%, 100% {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  16.66%, 29.32% {
    -webkit-transform: translate3d(0, -25%, 0);
            transform: translate3d(0, -25%, 0);
  }
  33.32%,45.98% {
    -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0);
  }
  49.98%,62.64% {
    -webkit-transform: translate3d(0, -75%, 0);
            transform: translate3d(0, -75%, 0);
  }
  66.64%,79.3% {
    -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0);
  }
  83.3%,95.96% {
    -webkit-transform: translate3d(0, -25%, 0);
            transform: translate3d(0, -25%, 0);
  }
}
@keyframes opacity {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
@keyframes change {
  0%, 12.66%, 100% {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  16.66%, 29.32% {
    -webkit-transform: translate3d(0, -25%, 0);
            transform: translate3d(0, -25%, 0);
  }
  33.32%,45.98% {
    -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0);
  }
  49.98%,62.64% {
    -webkit-transform: translate3d(0, -75%, 0);
            transform: translate3d(0, -75%, 0);
  }
  66.64%,79.3% {
    -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0);
  }
  83.3%,95.96% {
    -webkit-transform: translate3d(0, -25%, 0);
            transform: translate3d(0, -25%, 0);
  }
}
.container_home img {
  max-width: 12%;
  margin-top: 30vh;
}
.container_home a {
  text-decoration: none;
  color: white;
  overflow: visible;
}
.view-proje {
  position: fixed;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 200px;
  font-family: "Rajdhani", sans-serif;
  font-size: 15px;
}
.view-proje a:hover {
  color: goldenrod;
  font-size: 17px;
}
.view-proje a {
  position: relative;
  padding-bottom: 100px;
}
.arrow {
  transform: rotateZ(90deg);
  font-size: 25px;
  margin-top: 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 40px;
  height: 20px;
  margin-left: -15px;
  animation: bounceAnim 0.5s cubic-bezier(0.63, 0.09, 0.75, 0.46) infinite
    alternate;
}
@keyframes bounceAnim {
  0%,
  10% {
    bottom: 50%;
  }
  100% {
    bottom: 0%;
  }
}
.namehe{
  font-family: "Rajdhani", sans-serif;
  font-size: 2em;
  font-weight: bold;
  color: white;
}
h2{
  font-family: "Rajdhani", sans-serif;
  font-size: 1.2em;
  color: white;
  margin-top: -1.2em;
  font-weight: lighter;
}

</style>
