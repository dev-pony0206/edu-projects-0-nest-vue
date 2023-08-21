<template>
  <div class="bg-purple-300 h-screen " style='background-image: url("set.jpg")'
>
  <div class="text-center font-display">
    <h2 class="text-8xl font-display text-indigo-600 py-32">Great For Your Awesome Products</h2>
    <div
      class="p-5 bg-stone-500 rounded-2xl  text-5xl text-green-400 mx-80 relative"
      v-if="imageFile == null || imageFile.length == 0"
    >
     Start with Us
      <input class="font-display text-2xl rounded-xl bg-white w-72" type="file" @change="showImagePreview($event)" accept="image/*" />
      <!-- <button type="button" class="rounded-2xl bg-purple-800 shadow-md p-3 my-1 ml-20  text-white text-2xl" @click.prevent="backNew">
       Back
      </button>   -->
      </div>
    <div
      class="p-5 bg-stone-500 rounded-2xl mx-96 flex items-center "
      v-if="imageFile != null && imageFile.length != 0"
    >
      <img class="bg-stone-500 rounded-2xl p-1 h-52 m-3 border border-solid border-blue-600 " :src="imageFile" />
        <div v-if="imageFile != null && imageFile.length != 0 && !isImageUploading" class="block  absolute left-1/2 text-3xl ">
          <div>
            <p class="text-4xl text-amber-500">Product Name</p>
            <input type="text" class="rounded-xl p-2" value="" placeholder="Enter your new product name"/>
          </div>
          <div>
            <p class="text-4xl text-amber-500">Description</p>
            <textarea  class="rounded-xl   p-2" value="" placeholder="About new product"/>
          </div>
        </div>
    </div>
    <div v-if="imageFile != null && imageFile.length != 0 && !isImageUploading">
      <button
        class="m-3 border-0 text-lg py-4 px-16 font-light bg-emerald-900 rounded-3xl text-yellow-500"
        v-on:click="clearImage"
      >
        Cancel
      </button>
      <button
        class="m-3 border-0 text-lg py-4 px-16 font-light bg-emerald-900 rounded-3xl text-yellow-500" 
        v-on:click="uploadImage"
      >
        Upload
      </button>
    </div>
    <div class="bg-stone-500 my-3 mx-96 border-0 text-lg py-4 px-16 font-light text-yellow-500 rounded-3xl" v-if="isImageUploading">
      Please wait while your product is being uploaded ...
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "ImageUploader",
  data() {
    return {
      imageFile: null,
      input: null,
      isImageUploading: false,
    };
  },
  methods: {
    showImagePreview(event) {
      this.input = event.target;
      if (this.input.files && this.input.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.imageFile = e.target.result;
        };
        reader.readAsDataURL(this.input.files[0]);
      }
    },
    uploadImage() {
      this.isImageUploading = true;
      setTimeout(() => {
        console.log(this.imageFile);
        this.isImageUploading = false;
        this.clearImage();
        alert("Your Product is uploaded successfully!");
      }, 2000);
    },
    clearImage() {
      this.imageFile = null;
      this.input = null;
    },
  },
};
</script>

