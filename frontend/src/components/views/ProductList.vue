<script setup>
// import { computed } from "vue";
// import { useMainStore } from "@/stores/main";
import SectionMain from "@/components/base/SectionMain.vue";
// import TableSampleClients from "@/components/base/TableSampleClients.vue";
import ProductCard from "@/components/base/ProductCard.vue";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout.vue";
import SectionBannerStarOnGitHub from "@/components/base/SectionBannerStarOnGitHub.vue";




// const mainStore = useMainStore();

// const clientBarItems = computed(() => mainStore.clients.slice(0, 4));

</script>

<template>
  <AuthenticatedLayout>
      
    <SectionMain>
      <!-- <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"> -->
  
      

      <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
  
    </div> -->
        <div class="flex flex-col justify-between">
          <ProductCard
            v-for="client in clientBarItems"
            :key="client.id"
            
            
          />
        </div>
      <!-- </div> -->
      <SectionBannerStarOnGitHub class="mt-6 mb-6" />
    </SectionMain>
  </AuthenticatedLayout>
</template>
