<template>
  <section class="xl:ml-60 lg:ml-32 md:ml-28 sm:ml-24 lg:mt-36 mt-24 sm:mr-7">
    <SearchBanner />
    <CardList class="mt-12" :places="places" />
  </section>
</template>

<script>
import { defineAsyncComponent, onMounted, computed } from 'vue';
import { useStore } from 'vuex';


import CardList from "./assetComponents/CardList.vue";
import SearchBanner from './assetComponents/SearchBanner.vue'

export default {
  name: 'Homepage',
  components: {
    CardList,
    SearchBanner
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
