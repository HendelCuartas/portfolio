<template>
  <div class="container_abilities page" style="left:0">
    <h1 style="color:white">My skills</h1>
    <div class="skills">
      <div class="paneluno panel">
        <h2>CODING</h2>
        <img src="https://i.blogs.es/8d2420/650_1000_java/450_1000.png" alt="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Processing_Logo_Clipped.svg/2000px-Processing_Logo_Clipped.svg.png" alt="">
        <img src="http://maplab.hku.nl/content/uploads/ngg_featured/E_Rv.png" alt="">
        <img src="https://dl2.macupdate.com/images/icons256/11662.png?d=1477939570" alt="">
        <img src="http://www.stickpng.com/assets/images/5847f40ecef1014c0b5e488a.png" alt="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/266px-HTML5_logo_and_wordmark.svg.png" alt="">
        <img src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png" alt="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png" alt="">
        <img src="http://geoffreyfraser.com/assets/images/art/Unity_Logo.png" alt="">
        <img src="https://nodeschool.io/pereira/img/logo/nodejs.png" alt="">
        <img src="https://seeklogo.com/images/A/arduino-logo-BC7CBC1DAA-seeklogo.com.png" alt="">
        <img src="http://www.stickpng.com/assets/images/584830fecef1014c0b5e4aa2.png" alt="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" alt="">
        <img src="https://pbs.twimg.com/profile_images/502135348663578624/-oslcYof_400x400.png" alt="">
        <img src="https://www.acuitytraining.co.uk/wp-content/uploads/2015/05/SQL-logo-transparent.png" alt="">
      </div>
      <div class="paneldos panel">
        <h2>UX/UI</h2>
        <img src="https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png" alt="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png" alt="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Adobe_After_Effects_CC_icon.png" alt="">
        <img src="http://cdn.embed.ly/providers/logos/marvelapp.png" alt="">
        <img src="https://seeklogo.com/images/I/invision-logo-803E547E2A-seeklogo.com.png" alt="">
      </div>
      <div class="paneltres panel">
        <h2>PERSONAL</h2>
        <div class="contabilpers contuno">
          <img src="https://www.ejprescott.com/media/icons/water-pressure-testing.png" alt="">
          <p>Working under pressure</p>
        </div>
        <div class="contabilpers contdos">
          <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/210074-200.png" alt="">
          <p>Responsable</p>
        </div>
        <div class="contabilpers conttres">
          <img src="https://cdn4.iconfinder.com/data/icons/business-vol-2-5/100/Artboard_2-512.png" alt="">
          <p>Team work</p>
        </div>
        <div class="contabilpers contcuatro">
          <img src="https://cdn0.iconfinder.com/data/icons/education-6/502/Education_1-512.png" alt="">
          <p>Autonomous learning</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentAbilities',
  data () {
    return {}
  }
}
</script>

<style>
.panel{
  position: relative;
  max-width: 33%;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
}
.panel img{
  padding: 1em;
  max-height: 3.5em;
}
.paneluno{
  width: 33%;
  position: fixed;
  left: 0;
}
.paneldos{
  width: 33%;
  position: fixed;
  left: 33%;
}
.paneltres{
  width: 33%;
  position: fixed;
  left: 66%;
}
.paneltres img{
  padding: 0;
  margin-bottom: -1em;
  max-height: 3em;
}
.skills{
  position: fixed;
  width: 100%;
  height: 75%;
  background-color: white;
  left: 0;
  bottom: 0;
}
h1 {
  font-family:'Rajdhani', sans-serif;
  padding-top: 0.2em;
  margin-left: -1em;
}
.container_abilities{
  position: relative;
  text-align: center;
}
h2 {
  padding-bottom: 1em;
}
.contabilpers{

}
</style>
