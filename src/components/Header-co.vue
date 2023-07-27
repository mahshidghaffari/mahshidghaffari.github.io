<template>
    <header :class="mode">
        <h1>Mode: {{ mode }}</h1>
    </header>
    <nav>
        <div v-for="(page, index) in pages" :key="index" class="nav-link">
            {{ page }}
        </div>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
    props: {
        mode:{
            type: String,
            default: 'dark'
        },
    },
    data(){
        return{
            pages: ["Home", "About", "Contact Us"],
        }
    }
})
</script>


<style scoped>
/* Styles for the header and navigation links */
header {
    padding: 1rem;
    background-color: #f0f0f0;
}

.nav-link {
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: #ddd;
    display: inline-block;
    cursor: pointer;
}
</style>