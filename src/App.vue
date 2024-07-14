<template>
  <div class="h-screen">
    <Header :sortedRoutes="sortedRoutes" />
    <div v-if="isMobile" class="flex flex-col justify-center items-center h-full">
      <p class="w-32 sm:w-52 text-center">This project is for wider screens for now.</p>
    </div>
    <template v-else>
      <Navigation :sortedRoutes="sortedRoutes" />
      <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {RouterView} from 'vue-router';
import {sortedRoutes} from '@/router';
import {useWindowSize} from '@vueuse/core';
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';

const {width} = useWindowSize();
const mobileBreakpoint = 1000;
const isMobile = computed(() => width.value < mobileBreakpoint);
</script>

<style scoped></style>
