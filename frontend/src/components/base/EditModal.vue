<template>
  <div
    id="modal-backdrop"
    class="fixed inset-0 bg-opacity-30 bg-purple-900 flex justify-center items-center"
  >
    <div
      id="modal"
      class="bg-purple-300 rounded-3xl overflow-x-auto flex flex-col justify-between w-2/6 h-4/6"
    >
      <!-- Modal Header -->
      <header
    id="modal-header"
    class="px-4 py-6 flex justify-between items-center border-b-2 border-white"
>
  <slot name="header">Dummy header</slot>
  <div>
  <button
      type="button"
      class="w-9 p-2 bg-gray-300 rounded-full"
      @click="closeModal"
  >
      <img src="close1.png" alt="close button" />
  </button>
  </div>
</header>
      <!-- Modal Body -->
      <section id="modal-body" class="px-4 py-6">
        <slot name="body"></slot>
      </section>
      <!-- Modal Footer -->
      <footer id="modal-footer" class="px-4 py-6 border-t-2 border-white">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditModal",
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>