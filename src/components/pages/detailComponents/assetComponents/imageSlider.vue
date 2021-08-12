<template>
  <div class="w-full overflow-hidden">


    <vueper-slides
      :slide-ratio="2/5"
      :gap="2"
      :visible-slides="1.5"
      :arrows-outside="false"
      :bullets="false"
      :transitionSpeed="400"
      class="no-shadow"
    >
      <vueper-slide v-for="image in images" :key="image" :image="image.image" />
    </vueper-slides>
  </div>
</template>

<script>
import { reactive } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "images-slider-detail",
  components: {
    VueperSlides,
    VueperSlide,
  },
  setup() {
    const images = reactive([
      {
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506017669510-0bcbe8003d70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1560148174-3afe3d91aa3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      },
      {
        image:
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      },
    ]);

    return {
      images,
    };
  },
};
</script>