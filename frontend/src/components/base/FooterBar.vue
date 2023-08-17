<script setup>
import { containerMaxW } from "@/config.js";
import BaseLevel from "./BaseLevel.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b
          >&copy;{{ year }},
          <a href="https://nest-vue.troncali.com/guide/index.html" target="_blank">Nest-Vue</a>.</b
        >
        <slot />
      </div>
    </BaseLevel>
  </footer>
</template>
