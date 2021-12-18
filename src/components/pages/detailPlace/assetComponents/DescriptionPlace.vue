<template>
  <section class="mt-5 xs:mt-6">
    <h1 class="font-semibold text-gray-900 sm:text-2xl xs:text-xl text-lg leading-tight">
      {{ place.name }}
    </h1>
    <div class="xs:my-2 my-1 tracking-wide text-sm text-yellow-500 font-semibold flex items-center">
      <span
        class="iconify mr-1 md:mr-1.5 text-xl xs:text-2xl"
        data-icon="mdi:human-greeting"
        data-inline="false"
      ></span>
      <span class="text-xs xs:text-sm">Rekomendasi pengunjung</span>
    </div>
    <slot name="star-rating"></slot>

    <div class="leading-tight mt-6 text-gray-800">
      <h2 class="sm:text-lg font-semibold" >Tentang {{ place.name }}</h2>
      <p class="text-sm sm:text-base mt-3">
        {{ place.description }}
      </p>
    </div>
  </section>
  <slot name="rating-reviews"></slot>
</template>

<script>
export default {
  name: "description-place",
  components: {
  },
  props: ["place"],
  setup() {

  }
}
</script>