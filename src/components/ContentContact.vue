<template>
  <div class="container_contact page">
<iframe
  frameborder="0" style="border:0" class="animated fadeInLeft"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBBV6vtQYpzN_1r9dM0Zqbplj73ucSgXaU
    &q=carrera+25a+25+120+Agua+Blanca,+Cali,+Valle+del+Cauca" allowfullscreen>
</iframe>
<div class="contactinfo animated pulse">
  <h1>CALL ME</h1>
  <h3>+57 2 315 623 92 81</h3>
  <h1>WRITE ME</h1>
  <h3>hendelcuartas@gmail.com</h3>
  <h1>DID YOU LIKE MY WORK?</h1>
  <h3>Contact me, I'll be glad to hear you</h3>
</div>
  </div>
</template>

<script>
export default {
  name: 'ContentContact',
  data () {
    return {}
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
body{
  background-color: #2c3e50;
}
iframe {
  position: fixed;
  left: 0;
  top: 0;
  width: 30%;
  height: 100%;
}
.contactinfo {
  position: fixed;
  right: 0;
  top: 5%;
  width: 70%;
  height: 100%;
  font-family: 'Rajdhani', sans-serif;
  color: white;
}
h1 {
  font-size: 3em;
}
h3 {
  position: relative;
  margin-bottom: 2.2em;
  margin-top: -1.5em;
  color: goldenrod;
  font-size: 1.5em;
}
</style>
