<template>
  <aside class="mx-auto flex items-center overflow-hidden w-48 border-2 border-white shadow rounded-xl mt-5 md:mt-20 text-sm md:text-base">
    <button type="button" name="button" class="w-full text-center py-1.5 bg-green-400 text-white font-semibold">
      Moment
    </button>
    <button type="button" name="button" class="bg-white w-full text-center py-1.5">
      Tentang
    </button>
  </aside>

  <MenuMoment />
</template>

<script>
import MenuMoment from './MenuMoment.vue';

export default {
  components: {
    MenuMoment
  }
}
</script>
