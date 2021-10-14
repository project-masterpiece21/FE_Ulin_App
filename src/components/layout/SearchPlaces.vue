<template>
  <SearchDestination />
</template>

<script>
import { defineAsyncComponent } from "vue";

const SearchDestination = defineAsyncComponent(() =>
  import("../pages/searchPlaces/SearchPlaceMain.vue")
);

export default {
  components: {
    SearchDestination,
  },
};
</script>
