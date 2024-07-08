<template>
  <div class="h-screen">
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {RouterLink, RouterView} from 'vue-router';
import Header from '@/components/Header.vue';
</script>

<style scoped></style>
