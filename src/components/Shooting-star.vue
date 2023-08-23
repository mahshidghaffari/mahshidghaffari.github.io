<template>
        <div class="shootingStarContainer">
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
        </div>
        <div class="shootingStarContainer">
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
        </div>
        <div class="shootingStarContainer">
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
            <div class="shootingStar"></div>
        </div>


        <div class="stars"></div>
        <div class="twinkleMask"></div>
        <div class="twinkleMask2"></div>
        <div class="clouds"></div>

        <div class="fogContainer">
            <div class="fog"></div>
        </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
});

</script>
<style scoped lang="scss">
/* General styles */
$shootingStarContainerCount: 50;
$starCount: 1000;

.shootingStarContainer {
    @for $j from 1 through $shootingStarContainerCount {
        &:nth-child(#{$j}) {
            position: absolute;
            width: 100%;
            height: 130%;
            transform: rotate(random(10)+35deg);
            z-index: 10;
        //    background-color: #30000080;
        }
    }
}

.shootingStar {
    position: absolute;
    height: 1px;
    background: linear-gradient(-70deg, rgba(255, 235, 235, 1), rgba(0, 0, 0, 1));

    @for $j from 1 through $shootingStarContainerCount {
        @for $i from 1 through $starCount {
            .shootingStarContainer:nth-child(#{$j}) &:nth-child(#{$i}) {
            $delay: random(60000) + 200ms;
            $duration: random(2000) + 750ms;
                left: calc(#{random(50) + 0%});
                top: calc(#{random(98) + 1%});
                animation: shootingFrames $duration ease-in-out $delay;
                opacity: random(75) / 100 + 0.15;

            }
        }
    }
}

@keyframes shootingFrames {
    0% {
        transform: translateX(0);
        width: 0;
    }

    30% {
        width: 200px;
    }

    100% {
        width: 0;
        transform: translateX(random(100) + 800px);
    }
}


</style>