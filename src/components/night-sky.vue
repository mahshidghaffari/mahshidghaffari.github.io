
<template>
  <div class="mk">
    <img src="@/assets/Img/moon.png" alt="">
        <div class="stars"/>
    <!--    <div class="twinkling"/>-->
    <div class="clouds"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
});

</script>

<style scoped>

.mk{
  width: 500px !important;
}

.twinkling{
    //width:10000px;
    height: 100%;
    background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png") repeat;
    background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;

    //-moz-animation:move-background 70s linear infinite;
    //-ms-animation:move-background 70s linear infinite;
    //-o-animation:move-background 70s linear infinite;
    //-webkit-animation:move-background 70s linear infinite;
    //animation:move-background 70s linear infinite;

}

.clouds{
  width:10000px;
  background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png") repeat;
  background-size: 700px 700px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;

  -moz-animation:move-background 150s linear infinite;
  -ms-animation:move-background 150s linear infinite;
  -o-animation:move-background 150s linear infinite;
  -webkit-animation:move-background 150s linear infinite;
  animation:move-background 150s linear infinite;
}

img{
    height: 25vh;
    width: 25vh;
    position: absolute;
    z-index: 3;
    right: 12%;
    top: 15vh;
}
.stars {
    background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    z-index: 0;
}
</style>