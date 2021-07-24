<template>
  <section class="xl:ml-56 md:ml-28 sm:ml-24 md:mt-24 mt-20 sm:mr-7">
    <SearchBanner />
    <CardList />
  </section>
</template>

<script>
import SearchBanner from "./assetComponents/searchBanner.vue";
import CardList from "./assetComponents/cardList.vue";

export default {
  components: {
    SearchBanner,
    CardList,
  },
};
</script>
