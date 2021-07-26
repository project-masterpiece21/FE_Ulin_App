<template>
  <div class="sm:mt-7 mt-5 sm:px-0 px-7">
    <div class="sm:text-sm text-xss font-medium">
      <h1 class="md:text-xl sm:text-lg text-base font-bold">
        Wilayah paling banyak dicari
      </h1>
      <span class="text-gray-500"
        >Untuk saat ini kami fokus diwilayah Ciayumajakuning</span
      >
      <div class="flex items-center mt-5 mb-44">
        <div class="grid grid-cols-4 lg:gap-x-6 gap-x-3">
          <div
            v-for="destination in destinations"
            :key="destination"
            class="relative"
          >
            <img
              v-lazy="{
                src: destination.image,
              }"
              :alt="destination.name"
              class="object-cover lg:h-80 sm:h-52 h-36 w-full rounded-md"
            />
            <div
              class="
                absolute
                sm:bottom-9
                bottom-5
                flex
                justify-center
                w-full
                mx-auto
                lg:text-xl
                md:text-lg
                sm:text-base
                text-xss
                z-30
              "
            >
              <span class="text-white font-semibold text-center">
                {{ destination.name }}
              </span>
            </div>
            <div
              class="
                absolute
                top-0
                w-full
                h-full
                bg-gradient-to-t
                from-green-300
                to-yellow-300
                via-transparent
                opacity-40
                z-10
                rounded-md
              "
            ></div>
            <div
              class="
                hover:opacity-100
                transition-opacity
                duration-500
                absolute
                top-0
                w-full
                h-full
                bg-gradient-to-t
                from-green-300
                to-transparent
                opacity-0
                z-40
                rounded-md
              "
            >
              <div
                class="
                  absolute
                  cursor-pointer
                  md:top-8
                  sm:top-3
                  top-5
                  flex flex-wrap
                  justify-center
                  w-full
                  text-white text-center
                "
              >
                <h1
                  class="font-bold md:text-lg sm:text-base xs:text-xs text-xss"
                >
                  {{ destination.name }}
                </h1>
                <p
                  class="
                    mt-1
                    md:text-sm
                    sm:px-2
                    px-0.5
                    text-xss
                    leading-none
                    lg:block
                    hidden
                  "
                >
                  {{ destination.description }}
                </p>
              </div>
              <div
                class="
                  absolute
                  lg:bottom-16
                  sm:bottom-7
                  bottom-8
                  flex
                  justify-center
                  w-full
                  text-white
                "
              >
                <a
                  href="/"
                  class="
                    text-center
                    flex
                    justify-center
                    sm:bg-gradient-to-b
                    from-yellow-300
                    via-yellow-400
                    to-yellow-500
                    hover:bg-gradient-to-b
                    hover:from-yellow-400
                    hover:via-yellow-500
                    hover:to-yellow-600
                    font-semibold
                    lg:px-8
                    sm:px-2
                    px-1
                    lg:py-1.5
                    sm:py-1
                    py-0.5
                    lg:text-base
                    md:text-sm
                    text-xss
                    rounded-full
                    sm:no-underline
                    underline
                  "
                >
                  Jelajahi sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const destinations = reactive([
      {
        name: "Majalengka",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://images.unsplash.com/photo-1555071941-45994dc79d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      },
      {
        name: "Cirebon",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image:
          "https://images.unsplash.com/photo-1605798486087-36de29626515?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      },
      {
        name: "Kuningan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://images.unsplash.com/photo-1537888056975-b1e66404c9d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      },
      {
        name: "Indramayu",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:
          "https://images.unsplash.com/photo-1572240046450-775a7ef69386?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
      },
    ]);

    return { destinations };
  },
};
</script>
