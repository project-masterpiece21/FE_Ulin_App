<template>
  <div class="md:w-1/5 w-1/4">
    <div class="w-full h-full">
      <img :src="image" :alt="alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "alt"],
};
</script>
