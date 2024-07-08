<template>
  <div class="header fixed h-full">
    <Icon v-if="route.name === 'home'" name="words" />
    <nav v-else class="flex flex-col justify-between items-center h-full py-8">
      <span class="blurb font-libre tracking-widest">made of letters that will scatter</span>
      <RouterLink to="/"><span class="logo-mark font-harley">w</span></RouterLink>
    </nav>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon.vue';
import {useRoute} from 'vue-router';

const route = useRoute();
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
