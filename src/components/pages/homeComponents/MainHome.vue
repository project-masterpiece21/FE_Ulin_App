<template>
  <main class="md:flex xl:ml-52 lg:ml-24 sm:ml-20 lg:mt-36 mt-24">
    <section class="lg:w-3/4 w-full lg:px-4 md:px-8 sm:px-2 px-1">
      <keep-alive>
        <Banner />
      </keep-alive>

      <keep-alive>
        <CategoryDestination />
      </keep-alive>
      
      <CardList :places="places" />
    </section>
    <section class="w-2/6 relative lg:block hidden px-4">
      <div class="sticky top-32">
        <RecommendationDestination />
      </div>
    </section>
  </main>
</template>

<script>
import { defineAsyncComponent, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

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
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getPlaces/getPlaces');
    });

    const places = computed(() => {
      return store.getters['getPlaces/getterPlaces'];
    });

    return { places }
  }
};
</script>
