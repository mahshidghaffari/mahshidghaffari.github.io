<template>
    <div class="container h-100">
        <div class="row h-100  align-items-center res-row-h">
            <div class="col-lg-3 col-12 text-center card_bg">
                <img src="../assets/Img/mahshid.png" alt="profile pic" class="profilePic">
                <h4 class="mt-5">Mahshid</h4>
                <small class="text-primary">+4 years experience</small>
                <p> Front end developer</p>
                <BIconBatteryFull/>
            </div>
            <div class="col-lg-8 col-12 align-items-center card_bg res-col-h mt-lg-o mt-4 m-lg-3">
                <transition name="text-transition">
                    <div class="text-container">
                        <h2 class=" slide-in pb-3 mb-2">About Me</h2>
                        <hr class="w-100 mt-3 title-hr" />
                        <p>{{$t('about_me')}}</p>
                        <h2 class="slide-in pb-3 mb-2">Skill</h2>
                        <hr class="w-100 mt-3 title-hr" />
                        <p>JavaScript, TypeScript, Java, Vue.js, Vuex , Composition API , React,JSX , Axios, HTML CSS, SPA, PWA,
                            Responsive Design, Bootstrap Vue, Element UI,Web Pack, Docker, GIT, Agile</p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { BIconBatteryFull } from 'bootstrap-icons-vue';
import { Vue } from 'vue-class-component';

export default class HomeView extends Vue {}
</script>

<style>
.profilePic{
    width: 80%;
    align-content: center;
    //border-radius: 50%;
    clip-path: circle();
    height: auto;


}

.card_bg{
    background: linear-gradient(130deg, #531933, #2d2e43);
    box-shadow: 0px 0px 24px #5C5696;
    border-radius: 8px;
    box-shadow: 0 2px 4px #363459cc;
    padding: 20px;
    opacity: 0.89;
}

.title-hr{
    background-image: linear-gradient(to right,red,lightgray,rgba(164,255,145,0));
    border: 0;
    height: 3px;
}

.res-col-h{
    height: 69%;
    overflow:auto;
}

@media (max-width: 992px) {
    .res-col-h {
        height:fit-content;
        overflow:hidden;

    }
}

@media (max-width: 992px) {
    .res-row-h{
        overflow-y: auto;
    }
}

</style>
