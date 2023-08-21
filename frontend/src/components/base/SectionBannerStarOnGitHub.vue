<script setup>
import { mdiGithub } from "@mdi/js";
import SectionBanner from "@/components/base/SectionBanner.vue";
import { gradientBgPinkRed } from "@/colors/index";

</script>

<template>
  <SectionBanner :class="gradientBgPinkRed">
    <h1 class="text-3xl text-white mb-6">
      Like the project? Please star on <b>GitHub</b> ;-)
    </h1>
    <div>
      <a 
        :icon=mdiGithub
        class="rounded-full bg-white text-orange-500 text-1xl p-2"
        href= "https://github.com/ChristoperCarter0206/edu-projects-0-nest-vue"
      >Github</a>
    </div>
  </SectionBanner>
</template>
