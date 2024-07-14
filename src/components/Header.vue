<template>
  <div v-if="sortedRoutes.length" class="header fixed z-10">
    <transition name="fade">
      <Icon v-if="isFirstRoute" name="words" class="text-primary fixed left-0 h-full" />
      <nav v-else class="fixed left-0 h-full flex flex-col justify-between items-center h-full py-8">
        <span class="blurb text-primary font-libre tracking-widest">made of letters that will scatter</span>
        <RouterLink to="/"><span class="logo-mark text-primary font-harley">w</span></RouterLink>
      </nav>
    </transition>
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
.header {
  mix-blend-mode: var(--blendmode);
}

.blurb,
.logo-mark {
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
}
</style>
