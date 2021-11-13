<template>
  <section class="mt-5 xs:mt-6">
    <h1 class="font-semibold text-gray-900 sm:text-2xl xs:text-xl text-lg leading-tight">
      Jalan Terusan Taman Kuningan
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

    <div class="leading-tight mt-5 text-gray-800">
      <h2 class="sm:text-lg font-semibold" >Tentang Jalan Terusan Taman Kuningan</h2>
      <p class="text-sm sm:text-base mt-3">
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