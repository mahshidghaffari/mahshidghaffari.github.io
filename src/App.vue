<template>
<!--&lt;!&ndash;<HeaderCo class="header-container"/>&ndash;&gt;-->
    <div class="container app-container">
        <shooting-star/>
        <night-sky/>
        <div class="row justify-content-center align-items-center h-100">
            <div class="col-md-8 col-11 bg-primary h-50 card-view">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
// import HeaderCo from "@/components/Header-co.vue";
import nightSky from "@/components/night-sky.vue";
import {useStore} from "vuex";
import i18n from "@/composables/lang";
import ShootingStar from "@/components/Shooting-star.vue";

export default defineComponent({
    components: {
        ShootingStar,
        // HeaderCo,
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
    background: linear-gradient(90deg, white, #aeadc3);
    box-shadow: 0px 0px 24px #5C5696;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    z-index: 6;
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
