<template>
  <div class=" app-container">
      <shooting-star/>
      <night-sky/>
<!--      <div class="row">-->
<!--          <div class="col-5 bg-dark">-->
<!--              <router-view/>-->
<!--          </div>-->

<!--      </div>-->
  </div>
<!--    <div class="background-container">-->
<!--        <shooting-star/>-->
<!--&lt;!&ndash;<HeaderCo class="header-container"/>&ndash;&gt;-->
<!--        <div class="app-container">-->
<!--            <div class="card-view">-->
<!--                <router-view/>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div>-->
<!--            <b-button>Button</b-button>-->
<!--        </div>-->
<!--        <night-sky/>-->
<!--&lt;!&ndash;        <transition name="mountains-transition">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="mountains"></div>&ndash;&gt;-->
<!--&lt;!&ndash;        </transition>&ndash;&gt;-->
<!--    </div>-->
</template>

<script lang="ts">
import {defineComponent} from "vue";
// import HeaderCo from "@/components/Header-co.vue";
import shootingStar from "@/components/Shooting-star.vue";
import nightSky from "@/components/night-sky.vue";
import {useStore} from "vuex";
import i18n from "@/composables/lang";

export default defineComponent({
    components: {
        // HeaderCo,
        shootingStar,
        nightSky

    },
    setup() {
        const store = useStore()
        store.commit('util/SET_LANG', i18n.global.locale);
    }
});
</script>

<style>
.app-container {
    justify-content: center;
    height: 100vh;
}

.header-container {
    height: 10vh;
    text-align: center;
}

.card-view {
    background: linear-gradient(90deg, #454353, #aeadc3);
    position: absolute;
    width: 360px;
    box-shadow: 0px 0px 24px #5C5696;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    max-width: 400px;
    width: 90%;
    z-index: 6;
    top: 35%;
    right: 38%;
    height: 30%;
    opacity: 90%;
}


@keyframes move-background {
    from {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to {
        -webkit-transform: translate3d(1000px, 0px, 0px);
    }
}
@-webkit-keyframes move-background {
    from {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to {
        -webkit-transform: translate3d(1000px, 0px, 0px);
    }
}

@-moz-keyframes move-background {
    from {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to {
        -webkit-transform: translate3d(1000px, 0px, 0px);
    }
}

@-webkit-keyframes move-background {
    from {
        -webkit-transform: translate3d(0px, 0px, 0px);
    }
    to {
        -webkit-transform: translate3d(1000px, 0px, 0px);
    }
}

.background-container{
    position: fixed;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
}



</style>
