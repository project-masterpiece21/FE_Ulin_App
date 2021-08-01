<template>
  <div class="w-full xl:max-h-52 lg:max-h-48 md:max-h-44 sm:max-h-40 xs:max-h-36 max-h-24 bg-yellow-200">
      <img :src="image" :alt="alt" class="w-full h-full object-cover" />
  </div>
</template>

<script>
export default {
  props: ["image", "alt"],
};
</script>
