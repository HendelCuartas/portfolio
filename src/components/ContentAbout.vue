<template>
  <div class="container_about page">
    <div class="msjinteractive">
      <p class="line-1 anim-typewriter">Welcome! I am an interactive media designer</p>
    </div>
    <img src="https://pre00.deviantart.net/2426/th/pre/i/2018/131/c/b/hendelportfolio_by_hendelcuartas-dcba13q.png" alt="" class="animated pulse imgper">
<div class="iam">
  <h1>I am Héndel Cuartas</h1>
</div>
<div class="description-about animated pulse">
  <p align="left">I’m a last-year <span style="color:darkgoldenrod">Interactive Media Design </span> student interested in creating <span style="color:darkgoldenrod">user experiences</span> and <span style="color:darkgoldenrod">interactions</span> using <span style="color:darkgoldenrod">immersive technologies.</span></p>
</div>
<div class="otherthings">
  <div>
    <p>I also like to travel, practise calisthenics and read.</p>
  </div>
</div>
      <div class="view-proje">
        <a class="routerLink" rel="noopener noreferrer"><router-link to="/abilities">About my abilities<p class="arrow">></p></router-link></a>
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

@media only screen and (max-width: 950px) {
    .imgper{
      display: none;
    }
}
.otherthings{
  position: absolute;
  bottom: 20%;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Rajdhani", sans-serif;
  font-size: 1.5em;
}
.container_about{
    background-color: #2c3e50;
    height: 100vh;
    margin: 0;
    padding: 0;
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

.description-about{
  position: fixed;
  width: 50%;
  left: 50%;
  top: 30%;
  margin-left: -37.5%;
}
.iam{
  position: absolute;
  left: 50%;
  top: 10%;
  max-width: 30em;
  margin-left: -37.5%;
}
.description-about p{
  padding: 0.5em;
  font-size: 2em;
  color: white;
  font-family: 'Rajdhani', san-serif;
}
.iam h1{
  padding: 0.5em;
  font-size: 2em;
  color:darkgoldenrod;
  font-family: 'Rajdhani', san-serif;
  font-size: 3em;
}
.imgper {
  max-height: 80%;
  position: absolute;
  right: 10%;
  bottom: 0;
}
/* Global */
body{
  height: calc(100vh - 8em);
  color: rgba(255,255,255,.75);
  font-family: 'Rajdhani', san-serif;
  background-color: rgb(25,25,25);
}
.msjinteractive{
  position: absolute;
  top: 3.5em;
  left: 50%;
  transform: translateX(-50%);
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
    font-family: 'Rajdhani', san-serif;
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
