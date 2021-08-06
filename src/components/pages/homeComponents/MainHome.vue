<template>
  <main class="md:flex xl:ml-52 lg:ml-24 sm:ml-20 lg:mt-36 mt-24">
    <section class="lg:w-3/4 w-full lg:px-4 md:px-8 sm:px-2 px-1">
      <keep-alive>
        <Banner />
      </keep-alive>

      <keep-alive>
        <CategoryDestination />
      </keep-alive>
      
      <CardList />
    </section>
    <section class="w-2/6 sticky top-20 lg:block hidden px-4">
      <RecommendationDestination />
    </section>
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const Banner = defineAsyncComponent(() =>
  import("./assetComponents/Banner.vue")
);

import CardList from "./assetComponents/CardList.vue";
import CategoryDestination from "./assetComponents/CategoryDestination.vue";

export default {
  name: 'Homepage',
  components: {
    Banner,
    CardList,
    CategoryDestination,
  },
};
</script>
