<template>
  <div v-if="sortedRoutes.length" class="fixed right-0 flex gap-2 p-8 text-primary tracking-widest text-sm">
    <span>{{ formattedNextRouteDate }}</span>
    <span>|</span>
    <button class="underline" @click="goToNext">Next</button>
  </div>
</template>

<script setup>
import {defineProps, computed} from 'vue';
import {useRouter, useRoute} from 'vue-router';

const props = defineProps({
  sortedRoutes: Array
});

const router = useRouter();
const route = useRoute();

// Find current route index reactively
const currentRouteIndex = computed(() => {
  return props.sortedRoutes.findIndex((r) => r.name === route.name);
});

// Determine the next route reactively, looping if at the end
const nextRoute = computed(() => {
  const nextIndex = (currentRouteIndex.value + 1) % props.sortedRoutes.length;
  return props.sortedRoutes[nextIndex];
});

// Computed property for displaying the date of the next route
const formattedNextRouteDate = computed(() => {
  const date = new Date(nextRoute.value?.meta.date);
  if (date) {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  }
});

// Navigation function for next
const goToNext = () => {
  router.push({name: nextRoute.value.name});
};
</script>
