<template>
  <nav
    v-if="sortedRoutes.length"
    class="fixed top-0 right-0 flex gap-4 items-center p-8 text-primary tracking-widest text-sm z-10"
  >
    <button class="mode" @click="darkMode ? toggleDarkMode() : null" :disabled="!darkMode" title="Light mode">
      <Icon name="sun" class="w-6" />
    </button>
    <button class="mode" @click="!darkMode ? toggleDarkMode() : null" :disabled="darkMode" title="Dark mode">
      <Icon name="moon" class="w-4 stroke-2" />
    </button>
    <span>|</span>
    <span>{{ formattedCurrentRouteDate }}</span>
    <span>|</span>
    <button class="underline" @click="goToNext">Next</button>
  </nav>
</template>

<script setup>
import {ref, defineProps, computed} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import Icon from '@/components/Icon.vue';

const props = defineProps({
  sortedRoutes: Array
});

const router = useRouter();
const route = useRoute();
const darkMode = ref(false);

// Find current route index reactively
const currentRouteIndex = computed(() => {
  return props.sortedRoutes.findIndex((r) => r.name === route.name);
});

// Determine the next route reactively, looping if at the end
const nextRoute = computed(() => {
  const nextIndex = (currentRouteIndex.value + 1) % props.sortedRoutes.length;
  return props.sortedRoutes[nextIndex];
});

// Computed property for displaying the date of the current route
const formattedCurrentRouteDate = computed(() => {
  const date = route?.meta?.date ? new Date(route?.meta?.date) : null;
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

// Toggle dark mode
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.body.classList.toggle('dark-mode', darkMode.value);
};
</script>

<style scoped>
button.mode :deep(svg) {
  stroke: currentColor;
}

button.mode[disabled] {
  color: theme('colors.primary');
}

button.mode:not([disabled]) :deep(svg) {
  fill: none;
}
</style>
