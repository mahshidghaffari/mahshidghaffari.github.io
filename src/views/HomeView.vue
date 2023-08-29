<template>
    <div class="container h-100">
        <div class="row h-100  align-items-center">
            <div class="col-sm-3 col-12 text-center">
                <img src="../assets/Img/mahshid.png" alt="profile pic" class="profilePic">
                <h4 class="mt-5">Mahshid</h4>
                <small class="text-primary">+4 years experience</small>
                <p> Front end developer</p>
            </div>
            <div class="col-9 align-items-center">
                <transition name="text-transition">
                    <!-- Apply the .text-transition class to the container element -->
                    <div class="text-container">
<!--                        <p class="slide-in">{{ $t('hello') }}</p>-->
<!--                        <p class="slide-in">{{ $t('welcome') }}</p>-->
<!--                        <h1 class="slide-in">{{ $t('home') }}</h1>-->


                        <h2 class="border-bottom border-info slide-in pb-3 mb-2">About Me</h2>

                        <p >Hello! I’m Mahshid .I am an Experienced Front End Developer with 4 years
                            of experience in frontend development and a total of 6 years in the tech industry, which
                            includes management roles and entrepreneurship. I hold a BSc in Data Science and Artificial
                            Intelligence from Maastricht University. My proficiency lies in JavaScript, TypeScript, Vue/Nuxt
                            , React, Agile, GIT, and Docker. I also have expertise in integrating Machine Learning with web
                            analytics. Throughout my career, I have had the opportunity to collaborate with renowned companies
                            such as Huawei and Ericsson, where I contributed my valuable expertise.</p>

                        <h2 class="border-bottom border-info slide-in pb-3 mb-2">Skill</h2>
                        <p>JavaScript, TypeScript, Java, Vue.js, Vuex , Composition API , React,JSX , Axios, HTML CSS, SPA, PWA,
                            Responsive Design, Bootstrap Vue, Element UI,Web Pack, Docker, GIT, Agile</p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HomeView extends Vue {}
</script>

<style>
.profilePic{
    width: 100%;
    align-content: center;
    //border-radius: 50%;
    clip-path: circle();

}
</style>
