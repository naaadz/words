<template>
  <div v-html="svgContent" class="icon"></div>
</template>

<script setup>

import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const svgContent = ref('');

onMounted(async () => {
  try {
    const svgModule = await import(`@/assets/icons/${props.name}.svg`);
    const svgPath = svgModule.default; 
    const response = await fetch(svgPath);
    const svg = await response.text();
    svgContent.value = svg;
  } catch (error) {
    console.error('Error loading the SVG:', error);
  }
});
</script>

<style scoped>
.icon {
  fill: currentColor; 
}
</style>
