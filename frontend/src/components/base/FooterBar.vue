<script setup>
import { containerMaxW } from "@/config.js";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
      <div class="text-center md:text-left text-4xl">
        <b
          >&copy;{{ year }}.
          <a href="https://nest-vue.troncali.com/guide/index.html" class="text-blue-700" target="_blank">Nest-Vue</a>.</b
        >
        <slot />
      </div>
  </footer>
</template>
