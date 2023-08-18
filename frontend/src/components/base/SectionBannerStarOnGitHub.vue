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
      <input type="button"
        value="GitHub"
        :icon=mdiGithub
        class="rounded-full"
      />
    </div>
  </SectionBanner>
</template>
