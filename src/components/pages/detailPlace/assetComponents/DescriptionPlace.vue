<template>
  <section class="mt-5">
    <h1 class="font-semibold text-gray-900 text-lg leading-tight">
      Jalan Terusan Taman Kuningan
    </h1>
    <div class="mt-1 tracking-wide text-sm text-yellow-500 font-semibold flex items-center">
      <span
        class="iconify mr-1 md:mr-1.5 text-xl"
        data-icon="mdi:human-greeting"
        data-inline="false"
      ></span>
      <span class="text-xs">Rekomendasi pengunjung</span>
    </div>
    <slot name="star-rating"></slot>

    <div class="leading-tight mt-5 font-medium text-gray-800">
      <h2>Tentang Jalan Terusan Taman Kuningan</h2>
      <p class="text-sm mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam sequi deleniti. Natus, expedita! Dicta deleniti odit est ex in, alias voluptate aut tempora minima omnis quis distinctio repudiandae quisquam.
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
  setup() {

  }
}
</script>