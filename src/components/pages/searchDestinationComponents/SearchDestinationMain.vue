<template>
  <section class="xl:ml-56 lg:ml-32 md:ml-28 sm:ml-24 lg:mt-36 mt-24 sm:mr-7">
    <SearchBanner />
    <RecommendationDestination />
    <RecommendationCulinary />
    <RecommendationCity />
  </section>
</template>

<script>
import SearchBanner from "./assetComponents/searchBanner.vue";
import RecommendationDestination from "./assetComponents/recommendationDestination.vue";
import RecommendationCity from "./assetComponents/recommendationCity.vue";
import RecommendationCulinary from "./assetComponents/recommendationCulinary.vue";

export default {
  components: {
    SearchBanner,
    RecommendationDestination,
    RecommendationCity,
    RecommendationCulinary,
  },
};
</script>
