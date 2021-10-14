<template>
  <main class="xl:ml-64 lg:ml-32 md:ml-28 sm:ml-24 lg:mt-36 mt-24 sm:mr-7">

      <keep-alive>
        <Banner />
      </keep-alive>

      <keep-alive>
        <CategoryDestinationMobile />
      </keep-alive>

      <RecommendationPlaces class="md:mt-10" />
      <RecommendationCulinary class="mt-8 md:mt-14" />
      <RecommendationCity class="mt-9 md:mt-14" />

  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const Banner = defineAsyncComponent(() =>
  import("./assetComponents/Banner.vue")
);

import CategoryDestinationMobile from "./assetComponents/CategoryDestination.vue";
import RecommendationPlaces from "./assetComponents/RecommendationPlaces.vue";
import RecommendationCity from "./assetComponents/recommendationCity.vue";
import RecommendationCulinary from "./assetComponents/recommendationCulinary.vue";

export default {
  components: {
    Banner,
    CategoryDestinationMobile,
    RecommendationPlaces,
    RecommendationCity,
    RecommendationCulinary,
  },
};
</script>
