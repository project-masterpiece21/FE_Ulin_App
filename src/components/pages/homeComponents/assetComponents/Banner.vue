<template>
  <aside class="w-full lg:px-2 md:px-4">
    <Carousel :autoplay="4500" :breakpoints="breakpoints" :wrap-around="true">
      <slide v-for="slide in banners" :key="slide">
        <div class="px-4 carousel__item">
          <img v-lazy="{ src: slide }" :alt="slide" class="rounded-lg">
        </div>
      </slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </aside>
</template>

<script>
import { ref } from "vue";

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "Banner",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  setup() {
    const banners = ref(["/banner/1.png", "/banner/2.png", "/banner/3.png", "/banner/4.png"]);

    const breakpoints = ({
      768: {
        itemsToShow: 1
      },
      800: {
        itemsToShow: 1.3,
      },
      1024: {
        itemsToShow: 1.5,
      }
    });

    return { banners, breakpoints };
  },
};

</script>

<style>

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 2px solid white;
  background-color: rgb(245,158,11);
}

@media screen and (max-width: 640px) {
  .carousel__prev,
  .carousel__next {
    margin: 0px 20px 0px 20px;
  }
}

@media screen and (max-width: 768px) {
  .carousel__prev,
  .carousel__next {
    margin: 0px 20px 0px 20px;
  }
}

@media screen and (min-width: 768px) {
  .carousel__slide > .carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
  }
  .carousel__slide--visible > .carousel__item {
    opacity: 1;
    transform: rotateY(0);
  }
  .carousel__slide--next > .carousel__item {
    transform: scale(0.9) translate(-10px);
  }
  .carousel__slide--prev > .carousel__item {
    transform: scale(0.9) translate(10px);
  }
  .carousel__slide--active > .carousel__item {
    transform: scale(1.1);
  }

  /* .carousel__prev,
  .carousel__next {
    opacity: 0;
  } */

}
</style>
