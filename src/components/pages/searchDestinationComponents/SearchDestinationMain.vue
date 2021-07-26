<template>
  <section class="xl:ml-56 md:ml-28 sm:ml-24 md:mt-24 mt-20 sm:mr-7">
    <SearchBanner />
    <RecommendationDestination />
    <RecommendationCity />
  </section>
</template>

<script>
import SearchBanner from "./assetComponents/searchBanner.vue";
import RecommendationDestination from "./assetComponents/recommendationDestination.vue";
import RecommendationCity from "./assetComponents/recommendationCity.vue";

export default {
  components: {
    SearchBanner,
    RecommendationDestination,
    RecommendationCity,
  },
};
</script>
