<script setup>
import VHeader from './components/layout/VHeader.vue';
import VFooter from './components/layout/VFooter.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <VHeader />
    <main class="main-content">
        <router-view />
    </main>
    <VFooter />
</template>

<style scoped></style>
