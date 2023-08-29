<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4 col-12">
                salam chettorei
            </div>
            <div class="col-auto">
                <transition name="text-transition">
                    <!-- Apply the .text-transition class to the container element -->
                    <div class="text-container">
                        <p class="slide-in">{{ $t('hello') }}</p>
                        <p class="slide-in">{{ $t('welcome') }}</p>
                        <h1 class="slide-in">{{ $t('home') }}</h1>
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
