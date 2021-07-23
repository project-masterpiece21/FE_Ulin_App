<template>
  <SearchDestination />
</template>

<script>
import { defineAsyncComponent } from "vue";

const SearchDestination = defineAsyncComponent(() =>
  import("../pages/searchDestinationComponents/SearchDestinationMain.vue")
);

export default {
  components: {
    SearchDestination,
  },
};
</script>
