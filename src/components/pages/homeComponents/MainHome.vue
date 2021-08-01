<template>
  <main class="md:flex xl:ml-52 sm:ml-20 mt-24">
    <section class="lg:w-3/4 w-full px-1">
      <Banner />
      <CategoryDestination />
      <CardList />
    </section>
    <section class="w-2/6 sticky top-20 lg:block hidden px-4">
      <RecommendationDestination />
    </section>
  </main>
</template>

<script>
import Banner from "./assetComponents/Banner.vue";
import CardList from "./assetComponents/CardList.vue";
import CategoryDestination from "./assetComponents/CategoryDestination.vue";

export default {
  components: {
    Banner,
    CardList,
    CategoryDestination,
  },
};
</script>
