<template>
  <div class="w-full xl:max-h-56 lg:max-h-48 md:max-h-44 xs:max-h-40 max-h-28 bg-yellow-200">
      <img :src="image" :alt="alt" class="w-full h-full object-cover" />
  </div>
</template>

<script>
export default {
  props: ["image", "alt"],
};
</script>
