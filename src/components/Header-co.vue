<template>
    <nav class="header">
        <div v-for="(page, index) in DEF_PAGES" :key="index" class="nav-link">
            <router-link :to="page.to" class="link">{{ $t(page.name) }}</router-link>
        </div>
        <langCo/>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { DEF_PAGES} from "@/composables/constants";
import langCo from "@/components/lang-co.vue";

export default defineComponent({
    components:{
        langCo
    },
    setup() {
        return {
            DEF_PAGES
        };
    },
});
</script>

<style scoped>
.header {
    padding-top: 2rem;
    padding: 1rem;
    align-items: center;
}

.nav-link {
    padding: 0.5rem;
    margin: 0.5rem;
    display: inline-block;
    cursor: pointer;
    font-size: 24px;
}

.link {
    text-decoration: none !important;
    color: #31394D;

}

.link:active {
    color: black;
}
.link li:hover {
    background-color: #5E56A5;
}


.lang-switcher{
margin-top: 15px;
}
.lang-selector img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
}
</style>
