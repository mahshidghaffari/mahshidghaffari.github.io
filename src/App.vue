<template>
    <transition name="text-transition">
       <div>
           <HeaderCo class="header-container"/>
           <div class="app-container">
               <div class="card-view">
                   <router-view/>
               </div>
           </div>
       </div>
    </transition>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import HeaderCo from "@/components/Header-co.vue";
import {useStore} from "vuex";
import i18n from "@/composables/lang";

export default defineComponent({
    components: {
        HeaderCo,
    },
    setup() {
        const store = useStore()
        store.commit('util/SET_LANG', i18n.global.locale);
    }
});
</script>

<style>
body {
    margin: 0;
    background: linear-gradient(90deg, #C7C5F4, #776BCC);
}

.app-container {
    display: flex;
    justify-content: center;
    height: 30vh;
}

.header-container {
    height: 10vh;
    text-align: center;


}

.card-view {
    background: linear-gradient(90deg, #5D54A4, #7C78B8);
    position: relative;
    width: 360px;
    box-shadow: 0px 0px 24px #5C5696;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    max-width: 400px;
    width: 90%;
}

</style>
