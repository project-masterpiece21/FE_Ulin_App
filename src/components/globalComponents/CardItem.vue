<template>
  <div
    class="
      w-full
      bg-white
      rounded-lg
      overflow-hidden
      border
      cursor-pointer
      shadow-md
      hover:shadow-xl
    "
  >
    <div>
      <figure class="relative overflow-hidden flex-shrink-0">
        <router-link to="/detail">
          <div
            class="
              md:aspect-w-5 md:aspect-h-3
              sm:aspect-w-5 sm:aspect-h-2
              aspect-w-4 aspect-h-2
            "
          >
            <img
              v-lazy="{
                src: 'https://images.unsplash.com/photo-1555071941-45994dc79d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              }"
              alt="Man looking at item at a store"
              class="object-cover"
            />
          </div>
        </router-link>

        <div
          class="
            absolute
            rounded-tl-xl
            flex
            items-center
            mx-auto
            right-0
            bottom-0
            md:px-4
            py-2
            sm:px-5
            px-3.5
            bg-gradient-to-r
            from-yellow-400
            via-yellow-500
            to-yellow-600
            text-white
          "
        >
          <span
            class="iconify mr-0.5"
            data-icon="ri:map-pin-fill"
            data-inline="false"
          ></span>

          <span class="font-semibold sm:text-xs text-xss truncate"
            >Kabupaten Majalengka</span
          >
        </div>
      </figure>

      <div class="relative px-4 sm:py-4 py-3">
        <div class="flex justify-between overflow-ellipsis overflow-hidden">
          <div>
            <VisitorRecommendation class="mb-0.5" />

            <router-link
              to="/detail"
              class="
                sm:text-base
                text-sm
                leading-tight
                font-semibold
                text-black
              "
            >
              Penyaweuan, Majalengka, Jawa Barat
            </router-link>
          </div>
        </div>

        <div
          class="
            mt-4
            text-xs
            flex flex-wrap
            z-20
            sm:gap-2
            gap-1.5
            text-gray-700
          "
        >
          <a href="/" class="sm:py-1 py-0.5 px-2 rounded-full bg-gray-200"
            >Penyaweuan</a
          >
          <a href="/" class="sm:py-1 py-0.5 px-2 rounded-full bg-gray-200"
            >Majalengka</a
          >
          <a href="/" class="sm:py-1 py-0.5 px-2 rounded-full bg-gray-200"
            >Ciayumajakuning</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VisitorRecommendation from "./assetComponents/visitorRecommendation.vue";

export default {
  components: {
    VisitorRecommendation,
  },
};
</script>
