<template>
  <div v-if="sortedRoutes.length" class="header fixed h-full">
    <Icon v-if="isFirstRoute" name="words" />
    <nav v-else class="flex flex-col justify-between items-center h-full py-8">
      <span class="blurb font-libre tracking-widest">made of letters that will scatter</span>
      <RouterLink to="/"><span class="logo-mark font-harley">w</span></RouterLink>
    </nav>
  </div>
</template>

<script setup>
import {defineProps, computed} from 'vue';
import {useRoute} from 'vue-router';
import Icon from '@/components/Icon.vue';

const props = defineProps({
  sortedRoutes: Array
});

const route = useRoute();

const isFirstRoute = computed(() => {
  return props.sortedRoutes.length > 0 && props.sortedRoutes[0].name === route.name;
});
</script>

<style scoped lang="postcss">
.blurb,
.logo-mark {
  color: theme('colors.primary');
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

.logo-mark {
  font-size: 10rem;
  line-height: 0.7;
}

.icon :deep(svg) {
  height: 100vh;
  color: theme('colors.primary');
}
</style>
