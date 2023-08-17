<script setup>
import { useMainStore } from "@/stores/main";
import UserAvatar from "./UserAvatar.vue";

const mainStore = useMainStore();
</script>

<template>
  <UserAvatar :username="mainStore.userName" :avatar="mainStore.userAvatar">
    <slot />
  </UserAvatar>
</template>
