<template>
  <section class="grid grid-cols-4 gap-2 mt-2">
    <div v-for="image in images" :key="image" class="rounded-lg overflow-hidden aspect-w-7 aspect-h-5">
      <img :src="image.img" class="object-cover">
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "image-list",
  setup() {

    const images = reactive([
      { img: "https://images.unsplash.com/photo-1569806309486-7561d8f54c4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" },
      { img: "https://images.unsplash.com/photo-1593493666504-1bc93a32d27a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=814&q=80" },
      { img: "https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" },
      { img: "https://images.unsplash.com/photo-1611337188323-afb42b23f5c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
    ]);

    return {
      images
    }
  }
}
</script>