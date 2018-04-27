<template>
<div class="conteneur">
            <div id="sliderAccueil">
                    <div id="slideshow-wrap">
                        <input type="radio" id="button-1" name="controls" checked="checked" v-on:click="closeDetailedMatchStatisticsSlideCuatro, closeDetailedMatchStatisticsSlideTres, closeDetailedMatchStatisticsSlideDos, closeDetailedMatchStatistics"/>
                        <input type="radio" id="button-2" name="controls" v-on:click="closeDetailedMatchStatisticsSlideCuatro, closeDetailedMatchStatisticsSlideTres, closeDetailedMatchStatisticsSlideDos, closeDetailedMatchStatistics"/>
                        <input type="radio" id="button-3" name="controls" v-on:click="closeDetailedMatchStatisticsSlideCuatro, closeDetailedMatchStatisticsSlideTres, closeDetailedMatchStatisticsSlideDos, closeDetailedMatchStatistics"/>
                        <input type="radio" id="button-4" name="controls" v-on:click="closeDetailedMatchStatisticsSlideCuatro, closeDetailedMatchStatisticsSlideTres, closeDetailedMatchStatisticsSlideDos, closeDetailedMatchStatistics"/>
                        <input type="radio" id="button-5" name="controls" v-on:click="closeDetailedMatchStatisticsSlideCuatro, closeDetailedMatchStatisticsSlideTres, closeDetailedMatchStatisticsSlideDos, closeDetailedMatchStatistics"/>
                        <label for="button-1" class="arrows" id="arrow-1">></label>
                        <label for="button-2" class="arrows" id="arrow-2">></label>
                        <label for="button-3" class="arrows" id="arrow-3">></label>
                        <label for="button-4" class="arrows" id="arrow-4">></label>
                        <label for="button-5" class="arrows" id="arrow-5">></label>
                        <div id="slideshow-inner">
                            <ul>
                                <li>
                                    <div id="slide1" class="slides" v-on:click="showDetailedMatchStatistics">
                                    </div>
                                    <div class="description">
                                        <div class="description-text">
                                            <h1>HE Brand</h1>
                                            <p>This is my personal branding and identity project.
                                              Made it using Adobe Illustrator and Photoshop.
                                              You can take a look of the process and results.
                                            </p>
                                            <div class="task">
                                              <div class="abstract">
                                                <h4>What I used</h4>
                                                <img src="https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png" alt="">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png" alt="">
                                              </div>
                                            </div>
                                        </div>
                                    </div>
    <div id="container-popup">
        <div id="content-popup">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/63500163318687.5aac738ab29d2.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5fbf9e63318687.5aac738ab309a.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5a07e463318687.5aac738ab262a.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/dc480363318687.5aac738ab13c6.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/14860e63318687.5aac738ab35ac.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/73303263318687.5aac738ab179c.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/801acc63318687.5aac738ab2150.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2542df63318687.5aac738ab2d09.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/df737f63318687.5aac738ab1c6e.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/46bbc063318687.5aac738ab3a95.jpg" alt="">
            <div id="close-details" v-on:click="closeDetailedMatchStatistics"></div>
        </div>
    </div>
                                </li>

                                <li>
                                    <div id="slide2" class="slides" v-on:click="showDetailedMatchStatisticsSlideDos">
                                    </div>
                                    <div class="description">
                                        <div class="description-text">
                                            <h1>CIURA App</h1>
                                            <p>CIURA is a mobile application designed for people living in cities
                                              with security problems. It's mission is connecting local people
                                              in order to identify the places in the city that had delincuency
                                              incidents. This way, CIURA seeks to prevent and inform people from
                                              dangerous situations around the city.
                                            </p>
                                            <div class="task">
                                              <div class="abstract">
                                                <h4>What I used</h4>
                                                <img src="https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png" alt="">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png" alt="">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Adobe_After_Effects_CC_icon.png" alt="">
                                                <img src="http://cdn.embed.ly/providers/logos/marvelapp.png" alt="">
                                              </div>
                                            </div>
                                        </div>
                                    </div>
    <div id="container-popup-slide-dos">
        <div id="content-popup-slide-dos">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d4441863599535.5ab5a99b2f2f7.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/eeb05b63599535.5ab5a99b2cce2.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7eb8e463599535.5ab5a99b2dfcf.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/91691c63599535.5ab5a99b2d66b.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d4f86a63599535.5ab5a99b2e4e5.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c44fa363599535.5ab5a99b2fb44.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5aa30563599535.5ab5a99b2eefb.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5fe2b363599535.5ab5a99b2ea0d.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c1c41a63599535.5ab5a99b2dbff.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/da08b763599535.5ab5a99b2f85a.png" alt="">
            <div id="close-details-slide-dos" v-on:click="closeDetailedMatchStatisticsSlideDos"></div>
        </div>
    </div>
                                </li>

                                <li>
                                    <div id="slide3" class="slides" v-on:click="showDetailedMatchStatisticsSlideTres">
                                    </div>
                                    <div class="description">
                                        <div class="description-text">
                                            <h1>Incevo</h1>
                                            <p>This is an interactive installation that was born to rescue
                                              the relationships and physical communications between human beings through
                                              a couple of interactions that use the participant's bodies as the control.
                                            </p>
                                            <div class="task">
                                              <div class="abstract">
                                                <h4>What we used</h4>
                                                <img src="https://hackpuntes.com/wp-content/uploads/2015/03/java-logo.png" alt="">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Processing_Logo_Clipped.svg/2000px-Processing_Logo_Clipped.svg.png" alt="">
                                                <img src="http://maplab.hku.nl/content/uploads/ngg_featured/E_Rv.png" alt="">
                                                <img src="https://dl2.macupdate.com/images/icons256/11662.png?d=1477939570" alt="">
                                              </div>
                                            </div>
                                        </div>
                                    </div>
    <div id="container-popup-slide-tres">
        <div id="content-popup-slide-tres">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6478f057270341.59cee89f52077.jpg" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b37b9157270341.59cee89f52576.jpg" alt="">
            <div id="close-details-slide-tres" v-on:click="closeDetailedMatchStatisticsSlideTres"></div>
        </div>
    </div>
                                </li>

                                <li>
                                    <div id="slide4" class="slides" v-on:click="showDetailedMatchStatisticsSlideCuatro">
                                    </div>
                                    <div class="description">
                                        <div class="description-text">
                                            <h1>LolCo App</h1>
                                            <p>Is an application for League of Legends players who want
                                              to know more about their roles. You can find information about
                                              the five lanes in the Summoner's Rift. Everyone can share information
                                              and experiences.
                                            </p>
                                            <div class="task">
                                              <div class="abstract">
                                                <h4>What I used</h4>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/2000px-Android_Studio_icon.svg.png" alt="">
                                                <img src="https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png" alt="">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png" alt="">
                                              </div>
                                            </div>
                                        </div>
                                    </div>
    <div id="container-popup-slide-cuatro">
        <div id="content-popup-slide-cuatro">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d2a7931047991.5ad41e681b4ed.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce2bc231047991.5ad41e681c18e.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/0ca3fa31047991.5ad41e681bca8.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/993cbc31047991.5ad41e681a9ac.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/79889631047991.5ad41e6819912.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c4bf5331047991.5ad41e681a4b4.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/24b69b31047991.5ad41e681aeb6.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/64c8ec31047991.5ad41e681c73b.png" alt="">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2b887331047991.5ad41e6819e72.png" alt="">
            <div id="close-details-slide-cuatro" v-on:click="closeDetailedMatchStatisticsSlideCuatro"></div>
        </div>
    </div>
                                </li>
                                <li>
                                    <div id="slide5" class="slides">
                                    </div>
                                    <div class="description">
                                        <div class="description-text">
                                            <h1>HDV Documental</h1>
                                            <p>Huellas de Vida is an interactive documental of the Afro traditional midwifery in the colombian Pacific.
                                              It is also a tool that allows the midwives to be creators of their own multimedia content.
                                              This project seeks to conserve and transmit the culture and knowledge of the Afro traditional
                                              midwifery.
                                            </p>
                                            <div class="task">
                                              <div class="abstract">
                                                <h4>What I used</h4>
                                                <img src="https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png" alt="">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png" alt="">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/266px-HTML5_logo_and_wordmark.svg.png" alt="">
                                                <img src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png" alt="">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png" alt="">
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div id="slide6" class="slides">
                                    </div>
                                    <div class="description">
                                        <div class="description-text">
                                            <h1>Portfolio</h1>
                                            <p>This is my personal branding and identity project.
                                              Made it using Adobe Illustrator and Photoshop.
                                              You can take a look of the process and results.
                                            </p>
                                            <div class="task">
                                              <div class="abstract">
                                                <h4>What I used</h4>
                                                <img src="https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png" alt="">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png" alt="">
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
           </div>
        </div>
</template>

<script>
/* eslint-disable no-new */
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'ContentProjects',
  data () {
    return {
      proyectos: {}
    }
  },
  methods: {
    showDetailedMatchStatistics () {
      $('#container-popup').css('display', 'flex').animate({'opacity': 1}, 300, function () {
        $('#content-popup').animate({'opacity': 1}, 700)
      })
    },
    closeDetailedMatchStatistics () {
      $('#content-popup').animate({'opacity': 0}, 500, function () {
        $('#container-popup').animate({'opacity': 0}, 300, function () {
          $(this).css('display', 'none')
        })
      })
    },
    showDetailedMatchStatisticsSlideDos () {
      $('#container-popup-slide-dos').css('display', 'flex').animate({'opacity': 1}, 300, function () {
        $('#content-popup-slide-dos').animate({'opacity': 1}, 700)
      })
    },
    closeDetailedMatchStatisticsSlideDos () {
      $('#content-popup-slide-dos').animate({'opacity': 0}, 500, function () {
        $('#container-popup-slide-dos').animate({'opacity': 0}, 300, function () {
          $(this).css('display', 'none')
        })
      })
    },
    showDetailedMatchStatisticsSlideTres () {
      $('#container-popup-slide-tres').css('display', 'flex').animate({'opacity': 1}, 300, function () {
        $('#content-popup-slide-tres').animate({'opacity': 1}, 700)
      })
    },
    closeDetailedMatchStatisticsSlideTres () {
      $('#content-popup-slide-tres').animate({'opacity': 0}, 500, function () {
        $('#container-popup-slide-tres').animate({'opacity': 0}, 300, function () {
          $(this).css('display', 'none')
        })
      })
    },
    showDetailedMatchStatisticsSlideCuatro () {
      $('#container-popup-slide-cuatro').css('display', 'flex').animate({'opacity': 1}, 300, function () {
        $('#content-popup-slide-cuatro').animate({'opacity': 1}, 700)
      })
    },
    closeDetailedMatchStatisticsSlideCuatro () {
      $('#content-popup-slide-cuatro').animate({'opacity': 0}, 500, function () {
        $('#container-popup-slide-cuatro').animate({'opacity': 0}, 300, function () {
          $(this).css('display', 'none')
        })
      })
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/projects')
      .then(response => {
        // console.log(response.data)//
        this.proyectos = response.data.projects
        console.log('log ' + this.proyectos.projects)
      })
      .catch(error => {
        console.log(error)
      })
    $('#content-popup').animate({'opacity': 0}, 500, function () {
      $('#container-popup').animate({'opacity': 0}, 300, function () {
        $(this).css('display', 'none')
      })
    })
    $('#content-popup-slide-dos').animate({'opacity': 0}, 500, function () {
      $('#container-popup-slide-dos').animate({'opacity': 0}, 300, function () {
        $(this).css('display', 'none')
      })
    })
    $('#content-popup-slide-tres').animate({'opacity': 0}, 500, function () {
      $('#container-popup-slide-tres').animate({'opacity': 0}, 300, function () {
        $(this).css('display', 'none')
      })
    })
    $('#content-popup-slide-cuatro').animate({'opacity': 0}, 500, function () {
      $('#container-popup-slide-cuatro').animate({'opacity': 0}, 300, function () {
        $(this).css('display', 'none')
      })
    })
  }
}
// AUTOPLAY STOP QUAND ON CHANGE MANUELLEMENT DE SLIDE
</script>

<style scoped>
/* eslint-disable */
@import url(https://fonts.googleapis.com/css?family=Rajdhani);
/* Curtain container */
html {
    width: 100%;
    height: 100%;
}
body {
    width: 100%;
    height: 100%;
    position: relative;
    font-family: 'Rajdhani', sans-serif;
    background-color: gray;
}
/* Curtain container */
#container-popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(243, 239, 245, 0.7);
    z-index: 500;
    opacity: 1;
    overflow: scroll;
}
/* Match details container */
#content-popup {
    position: absolute;
    color: #F3EFF5;
    background-color: #454955;
    width: 80%;
    -webkit-box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    opacity: 1;
    top: 0;
}
#content-popup img {
    max-width: 100%;
    padding: 0;
}
#close-details {
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
#close-details::before, #close-details::after {
    content:'';
    display: block;
    margin-top: 15px;
    width: 100%;
    border-bottom: 2px solid rgb(230, 168, 53);
    transform: rotate(45deg);
}
#close-details::after {
    margin-top: -2px;
    transform: rotate(-45deg);
}
#container-popup-slide-dos {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(243, 239, 245, 0.7);
    z-index: 500;
    opacity: 1;
    overflow: scroll;
}
/* Match details container */
#content-popup-slide-dos {
    position: absolute;
    color: #F3EFF5;
    background-color: #454955;
    width: 80%;
    -webkit-box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    opacity: 1;
    top: 0;
}
#content-popup-slide-dos img {
    max-width: 100%;
    padding: 0;
}
#close-details-slide-dos {
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
#close-details-slide-dos::before, #close-details-slide-dos::after {
    content:'';
    display: block;
    margin-top: 15px;
    width: 100%;
    border-bottom: 2px solid rgb(230, 168, 53);
    transform: rotate(45deg);
}
#close-details-slide-dos::after {
    margin-top: -2px;
    transform: rotate(-45deg);
}
/* */
#container-popup-slide-tres {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(243, 239, 245, 0.7);
    z-index: 500;
    opacity: 1;
    overflow: scroll;
}
/* Match details container */
#content-popup-slide-tres {
    position: absolute;
    color: #F3EFF5;
    background-color: #454955;
    width: 80%;
    -webkit-box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    opacity: 1;
    top: 0;
}
#content-popup-slide-tres img {
    max-width: 100%;
    padding: 0;
}
#close-details-slide-tres {
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
#close-details-slide-tres::before, #close-details-slide-tres::after {
    content:'';
    display: block;
    margin-top: 15px;
    width: 100%;
    border-bottom: 2px solid rgb(230, 168, 53);
    transform: rotate(45deg);
}
#close-details-slide-tres::after {
    margin-top: -2px;
    transform: rotate(-45deg);
}
#container-popup-slide-cuatro {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(243, 239, 245, 0.7);
    z-index: 500;
    opacity: 1;
    overflow: scroll;
}
/* Match details container */
#content-popup-slide-cuatro {
    position: absolute;
    color: #F3EFF5;
    background-color: #454955;
    width: 80%;
    -webkit-box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.75);
    opacity: 1;
    top: 0;
}
#content-popup-slide-cuatro img {
    max-width: 100%;
    padding: 0;
}
#close-details-slide-cuatro {
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
#close-details-slide-cuatro::before, #close-details-slide-cuatro::after {
    content:'';
    display: block;
    margin-top: 15px;
    width: 100%;
    border-bottom: 2px solid rgb(230, 168, 53);
    transform: rotate(45deg);
}
#close-details-slide-cuatro::after {
    margin-top: -2px;
    transform: rotate(-45deg);
}
/* */
.task {
  position: relative;
  overflow: hidden;
  perspective: 400px;
  transform-style: preserve-3d;
}
.abstract {
  width: 100%;
  max-height: 50px;
  padding: 15px 15px;
  left: -10px;
  position: relative;
  background-color: white;
  color: teal;
}
.abstract img{
  height: 30px;
  padding-top: 5px;
}
.abstract h3{
  padding-top: -5px;
}
.conteneur {
  width: 100%;
  margin: 0 auto;
}
*{
  margin: 0;
  padding: 0;
  font-family: 'Rajdhani', sans-serif;
}
/*------- SLIDER CSS ------*/
#slideshow-wrap {
  width: 100%;
  height: 100vh;
}
#slideshow-inner {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.5);
  overflow: hidden;
  position: relative;
  left: 0px;
}
#slideshow-inner>ul {
  list-style: none;
  height: 100%;
  width: 500%;
  overflow: hidden;
  position: relative;
  top:0px;
  -webkit-transition: left .8s cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: left .8s cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: left .8s cubic-bezier(0.77, 0, 0.175, 1);
  transition: left .8s cubic-bezier(0.77, 0, 0.175, 1);
}
/* --------------- MES SLIDES ---------------- */
.slides {
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  cursor: pointer;
}
#slide1 {
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/63500163318687.5aac738ab29d2.jpg') no-repeat center center;
  background-size: cover;
}
#slide2 {
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/d4441863599535.5ab5a99b2f2f7.png') no-repeat center center;
  background-size: cover;
}
#slide3 {
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/6478f057270341.59cee89f52077.jpg') no-repeat center center;
  background-size: cover;
}
#slide4 {
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d2a7931047991.5ad41e681b4ed.png') no-repeat center center;
  background-size: cover;
}
#slide5 {
  background: url('https://www.dropbox.com/s/d5824fmymi2we6z/hdv-site-alfa.png') no-repeat center center;
  background-size: cover;
}
/* --------------- /MES SLIDES ---------------- */
#slideshow-inner>ul>li {
  width: 20%;
  height: 100%;
  position: relative;
  float: left;
}
/* On cache les boutons radio d'origine */
#slideshow-wrap input[type=radio] {
  position: absolute;
  left: 30%;
  bottom: 15px;
  visibility: hidden;
}
/* Pour en créer de nouveaux avec un autre style */
#slideshow-wrap label:not(.arrows) {
  z-index:2;
  position: absolute;
  right: 80px;
  height: 25px;
  width: 25px;
  background-color: #0c2437;
  border-radius: 50%;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 3px rgba(0,0,0,.8);
  -moz-box-shadow: 0px 0px 3px rgba(0,0,0,.8);
  box-shadow: 0px 0px 3px rgba(0,0,0,.8);
  -webkit-transition: background-color .2s;
  -moz-transition: background-color .2s;
  -o-transition: background-color .2s;
  transition: background-color .2s;
  bottom: 25px;
}
/* Action du click */
#slideshow-wrap label:not(.arrows):active {
  background-color: grey;
  bottom: 26px;
}
/* Couleur de fond des boutons radio checked */
#slideshow-wrap input[type=radio]#button-1:checked~label[for=button-1] { background-color: rgba(255,255,255,1) }
#slideshow-wrap input[type=radio]#button-2:checked~label[for=button-2] { background-color: rgba(255,255,255,1) }
#slideshow-wrap input[type=radio]#button-3:checked~label[for=button-3] { background-color: rgba(255,255,255,1) }
#slideshow-wrap input[type=radio]#button-4:checked~label[for=button-4] { background-color: rgba(255,255,255,1) }
/* Décalage des boutons radio */
#slideshow-wrap label[for=button-1]:not(.arrows)  { margin-right: 56px }
#slideshow-wrap label[for=button-2]:not(.arrows)  { margin-right: 18px }
#slideshow-wrap label[for=button-3]:not(.arrows)  { margin-right: -18px }
#slideshow-wrap label[for=button-4]:not(.arrows)  { margin-right: -56px }
/* Décalage des images de fond au click (100% = une image) */
#slideshow-wrap input[type=radio]#button-1:checked~#slideshow-inner>ul { left: 0 }
#slideshow-wrap input[type=radio]#button-2:checked~#slideshow-inner>ul { left: -100% }
#slideshow-wrap input[type=radio]#button-3:checked~#slideshow-inner>ul { left: -200% }
#slideshow-wrap input[type=radio]#button-4:checked~#slideshow-inner>ul { left: -300% }
#slideshow-wrap input[type=radio]#button-5:checked~#slideshow-inner>ul { left: -400% }
#slideshow-wrap input[type=radio]#button-6:checked~#slideshow-inner>ul { left: -500% }
label.arrows {
  /* Flèche des boutons Gauche / Droite */
  font-family: 'WebSymbolsRegular';
  font-size: 25px;
  color: rgb(255,255,240);
  position: absolute;
  top: 50%;
  margin-top: -25px;
  display: none;
  opacity: 0.7;
  cursor: pointer;
  background-color: transparent;
  -webkit-transition: opacity .2s;
  -moz-transition: opacity .2s;
  -o-transition: opacity .2s;
  transition: opacity .2s;
  text-shadow: 0px 0px 3px rgba(0,0,0,.8);
}
label.arrows:hover {opacity: 1;}
label.arrows:active { margin-top: -23px }
input[type=radio]#button-1:checked~.arrows#arrow-2, input[type=radio]#button-2:checked~.arrows#arrow-3, input[type=radio]#button-3:checked~.arrows#arrow-4, input[type=radio]#button-4:checked~.arrows#arrow-5, input[type=radio]#button-5:checked~.arrows#arrow-6 {
  /* Boutons Droite déplacement */
  padding: 17px 24px;
  right: 10px;
  z-index: 2;
  display: block;
  border-radius: 45px;
  background: rgba(0, 0, 0, 0.8);
}
input[type=radio]#button-2:checked~.arrows#arrow-1, input[type=radio]#button-3:checked~.arrows#arrow-2, input[type=radio]#button-4:checked~.arrows#arrow-3, input[type=radio]#button-5:checked~.arrows#arrow-4, input[type=radio]#button-6:checked~.arrows#arrow-5 {
  /* Boutons Gauche déplacement */
  padding: 17px 24px;
  border-radius: 45px;
  background: rgba(0, 0, 0, 0.8);
  left: 10px;
  z-index: 2;
  display: block;
  -webkit-transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -ms-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
}
/*----- ONGLET DESCRIPTION SLIDER CSS ------*/
.description {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
}
.description .description-text {
  background-color: #424C5D;
  height: 100%;
  padding: 150px 30px 60px 30px;
  overflow: hidden;
  position: relative;
  -webkit-transition: opacity .2s;
  -moz-transition: opacity .2s;
  -o-transition: opacity .2s;
  transition: opacity .2s;
  color: white;
}
.description-text h1 {
  text-transform: uppercase;
  line-height: 30px;
  margin-bottom: 20px;
}
.description-text p {
  line-height: 20px;
  font-weight: 100;
  margin-bottom: 20px;
}
</style>
