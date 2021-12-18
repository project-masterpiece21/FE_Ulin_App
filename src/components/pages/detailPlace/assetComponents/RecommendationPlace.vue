<template>
  <aside class="py-4 px-5 sticky lg:top-32 top-20">
    <h1 class="text-base font-medium">
      Rekomendasi lainnya
    </h1>

      <div class="grid grid-cols-4 gap-2 w-full mt-6">
        <div v-for="(place, index) in places" :key="place">
            <img v-if="index <= 7" v-lazy={src:place.image} :alt="place.name" class="flex shrink-0 w-44 xl:h-24 h-20 object-cover rounded-lg">
        </div>
      </div>
  </aside>
</template>

<script>
  export default {
    props: ['places'],
    setup() {

    }
  }
</script>