<template>
  <div class="relative w-full px-6 rounded-lg">
    <Carousel :autoplay="5000" :wrap-around="true">
      <Slide v-for="banner in banners" :key="banner">
          <img v-lazy="banner" :alt="banner">
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

  import 'vue3-carousel/dist/carousel.css';

  export default {
    name: 'Banner',
    components: { Carousel, Navigation, Pagination, Slide },
    setup() {
      const banners = ref([
        '1.png',
        '2.png'
      ]);

      return { banners };
    }
  }
</script>

<style>
:root {
  --carousel-color-primary: #fbbf24;
  --carousel-color-secondary: #fcd34d;
}

.carousel__pagination-button--active {
  background-color: #d97706;
}
</style>