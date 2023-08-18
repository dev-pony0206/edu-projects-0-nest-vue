<script setup>
import { defineProps } from 'vue';
defineProps({
  noPadding: Boolean,
});
</script>

<template>
  <div class="flex-1" :class="{ 'p-6': !noPadding }">
    <slot />
  </div>
</template>
