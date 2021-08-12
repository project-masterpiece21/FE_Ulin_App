<template>
<<<<<<< HEAD
  <div class="relative w-full px-6 rounded-lg">
    <a href="/" class="md:mr-4 rounded-lg overflow-hidden">
      
    </a>
=======
  <div class="w-full overflow-hidden px-4">
    <vueper-slides
      :slide-ratio="2/5"
      :breakpoints="breakpoints"
      autoplay
      :gap=3
      class="no-shadow"
    >

      <vueper-slide 
        v-for="banner in banners" 
        :key="banner"
        :image="banner"
      />

      <template #loader>
        <div w-full h-full animate-pulse>
        </div>
      </template>
    </vueper-slides>
>>>>>>> moment
  </div>
</template>

<script>
<<<<<<< HEAD
  import { ref } from 'vue';

  export default {
    name: 'Banner',
    setup() {
      const banners = ref([
        '1.png',
        '2.png',
        '3.png',
        '4.png',
      ]);

      return { banners };
    }
  }
=======
import { ref } from "vue";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "Banner",
  components: {
    VueperSlides,
    VueperSlide
  },
  setup() {
    const banners = ref(["1.png", "2.png", "3.png", "4.png"]);

    const breakpoints = ({
      640: {
        arrows: false
      }
    });

    return { banners, breakpoints };
  },
};
>>>>>>> moment
</script>