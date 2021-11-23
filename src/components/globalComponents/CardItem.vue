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
        <router-link :to="{ name: 'place-detail', params: { id: id }}">
          <div
            class="
              md:aspect-w-5 md:aspect-h-3
              sm:aspect-w-5 sm:aspect-h-2
              aspect-w-4 aspect-h-2
            "
          >
            <img
              v-lazy="image"
              :alt="name"
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
            >{{ `${city}, ${province}` }}</span
          >
        </div>
      </figure>

      <div class="relative px-4 sm:py-4 py-3">
        <div class="flex justify-between overflow-ellipsis overflow-hidden">
          <div>
            <VisitorRecommendation class="xs:mb-0.5" />

            <h1
              class="
                sm:text-base
                xs:text-sm
                text-xs
                leading-tight
                font-semibold
                text-gray-900
              "
            >
              {{ name }}
            </h1>
          </div>
        </div>

        <div
          class="
            sm:mt-4
            mt-2
            sm:text-xs
            text-xss
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
  name: "card-item",
  props: [ 'id', 'name', 'description', 'image', 'province', 'city', 'address' ],
  components: {
    VisitorRecommendation,
  },
};
</script>
