<template>
<!--&lt;!&ndash;<HeaderCo class="header-container"/>&ndash;&gt;-->
    <div class="container app-container justify-content-center">
        <shooting-star/>
        <night-sky/>
        <div class="row justify-content-center align-items-center h-100">
            <div class="col-md-10 col-10 card-view text-white sm-h khar">
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
    height: 95vh;
}

.header-container {
    height: 10vh;
    text-align: center;
}

.card-view {
    z-index: 6;
    height: 60%;
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


.khar{
    height: 85%;
}

@media (max-width: 767px) {
    .khar {
        height:90%;
    }
}
</style>
