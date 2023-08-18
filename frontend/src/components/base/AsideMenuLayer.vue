<script setup>
import { mdiLogout, mdiClose } from "@mdi/js";
import { computed, defineProps, defineEmits } from "vue";
import { useStyleStore } from "@/stores/style.js";
import AsideMenuList from "./AsideMenuList.vue";
import AsideMenuItem from "./AsideMenuItem.vue";

defineProps({
  menu: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["menu-click", "aside-lg-close-click"]);

const styleStore = useStyleStore();

const logoutItem = computed(() => ({
  label: "Logout",
  icon: mdiLogout,
  color: "info",
  isLogout: true,
}));

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};

const asideLgCloseClick = (event) => {
  emit("aside-lg-close-click", event);
};
</script>

<template>
  <aside
    id="aside"
    class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden border-yellow-200 border-8 rounded-3xl"
  >
    <div
      :class="styleStore.asideStyle"
      class="lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900"
    >
      <div
        :class="styleStore.asideBrandStyle"
        class="flex flex-row h-20 items-center justify-between  bg-stone-500"
      >
        <div
          class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0 "
        >
          <b class="font-black text-3xl">Welcome!</b>
        </div>
        <button
          class="hidden lg:inline-block xl:hidden p-3"
          @click.prevent="asideLgCloseClick"
        >
          <BaseIcon :path="mdiClose" />
        </button>
      </div>
      <div
        :class="
          styleStore.darkMode
            ? 'aside-scrollbars-[slate]'
            : styleStore.asideScrollbarsStyle
        "
        class="flex-1 overflow-y-auto overflow-x-hidden"
      >
        <AsideMenuList class="" :menu="menu" @menu-click="menuClick" />
      </div>

      <ul class="bg-stone-600">
        <AsideMenuItem class="" :item="logoutItem" @menu-click="menuClick" />
      </ul>
    </div>
  </aside>
</template>
