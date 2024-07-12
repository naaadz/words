<template>
  <div class="h-screen">
    <Header :sortedRoutes="sortedRoutes" />
    <Navigation :sortedRoutes="sortedRoutes" />
    <RouterView />
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router';
import {sortedRoutes} from '@/router';
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
</script>

<style scoped></style>
