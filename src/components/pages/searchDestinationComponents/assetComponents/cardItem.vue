<template>
  <router-link
    to="/"
    v-for="destination in destinations"
    :key="destination"
    class="relative rounded-md w-full overflow-hidden"
  >
    <div class="lg:h-44 md:h-30 h-28 w-32 md:w-full">
      <img
        v-lazy="{
          src: destination.image,
        }"
        :alt="destination.name"
        class="object-cover w-full h-full"
      />
    </div>

    <!-- Title destination -->
    <div
      class="
        absolute
        bottom-0
        w-full
        bg-gradient-to-l
        from-yellow-300
        via-yellow-400
        to-yellow-500
      "
    >
      <div
        class="
          text-white
          lg:text-sm
          md:text-xs
          text-xss
          overflow-x-hidden
          md:py-1
          py-0.5
          lg:font-semibold
        "
      >
        <h1
          class="truncate mx-auto flex items-center justify-center text-center"
        >
          <span
            class="iconify mr-0.5"
            data-icon="ri:map-pin-fill"
            data-inline="false"
          ></span>
          {{ destination.name }}
        </h1>
      </div>
    </div>
    <!-- Title destination -->

    <div
      class="
        md:block
        hidden
        hover:opacity-0
        transition-opacity
        duration-500
        absolute
        top-0
        w-full
        h-full
        bg-gradient-to-t
        from-black
        to-blue-400
        opacity-20
        z-10
        rounded-md
      "
    ></div>
  </router-link>
</template>

<script>
export default {
  props: ["destinations"],
};
</script>
