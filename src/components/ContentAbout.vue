<template>


  <div class="container_about page">
    <div class="msjinteractive">
      <p class="line-1 anim-typewriter">Welcome! I am an interactive media designer</p>
    </div>
<div id="container">
  <div id="inner" class="animated pulse">
    <img src="https://scontent.fclo1-2.fna.fbcdn.net/v/t1.0-9/13465936_1779217955627866_8945928677573353959_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFVRtwTs1IaClTuMz3k5MbKz2v6L033kjgvXtNs-n8uoyO2CLiSfGzAHEIyO5Lgb5SrJkdwy8hPuTTcoT_T7l1RndLVvEEjDkcr9tcoTVU6ZA&oh=0de68d9c29f42a0d858195bc19510b15&oe=5B5F26E7" alt="">
  </div>
</div>

<div class="description-about animated pulse">
  <p>Hello! My name is Héndel and I am 22 years old. By now I live in Cali, Colombia. I am good at creating user experiences and interactions using immersive technologies.</p>
</div>

      <div class="view-proje">
        <a class="routerLink"><router-link to="/abilities">About my abilities<p class="arrow">></p></router-link></a>
      </div>
  </div>

</template>

<script>
export default {
  name: 'ContentAbout',
  data () {
    return {}
  }
}
</script>

<style scoped>
/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.container_about{
    background-color: #2c3e50;
}
.container_about a {
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
#container {
  position: absolute;
  right: 35%;
  top: 8em;
  transform: rotate(5deg);
}
.description-about{
  position: absolute;
  left: 22%;
  top: 6em;
  width: 21em;
  height: 28em;
  background-color:goldenrod;
}
.description-about p{
  padding: 0.5em;
  font-size: 2em;
  color: darkslategray;
  font-family: 'Rajdhani', san-serif;
}
#inner {
  width: 20em;
  height: 23em;
  background-color: white;
  box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  -moz-transition: transform 0.5s;
  -o-transition: transform 0.5s;
}
#inner img{
  width: auto;
  height: inherit;
}
/* Global */
body{
  height: calc(100vh - 8em);
  color: rgba(255,255,255,.75);
  font-family: 'Anonymous Pro', monospace;
  background-color: rgb(25,25,25);
}
.msjinteractive{
  position: absolute;
  top: 3.5em;
  left: 50%;
  transform: translate(-50%, -50%);
}
.line-1{
    position: relative;
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
    font-family: 'Anonymous Pro', monospace;
    color: ghostwhite;
}

/* Animation */
.anim-typewriter{
  animation: typewriter 3s steps(44) 1s 1 normal both,
             blinkTextCursor 1000ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
</style>
