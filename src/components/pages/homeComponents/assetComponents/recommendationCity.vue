<template>
  <div class="md:mt-12 sm:mt-8 mt-7 sm:px-0 px-7">
    <div class="sm:text-sm text-xss font-medium">

      <div class="md:text-center">
        <h1 class="lg:text-2xl md:text-xl sm:text-lg text-base font-bold">
          Wilayah paling banyak dicari
        </h1>
        <span class="text-gray-500 lg:text-xl">Untuk saat ini kami fokus diwilayah Ciayumajakuning</span>
      </div>

      <div class=" scrollbar-thin overflow-x-scroll scrollbar-thumb-rounded md:mt-10 mt-3.5 overflow-hidden mb-36">

      <div class="flex flex-row w-max md:grid grid-cols-4 gap-4 md:w-full">
          <div v-for="destination in destinations" :key="destination" class="relative">
            <img
              v-lazy="{ src: destination.image }"
              :alt="destination.name"
              class="object-cover lg:h-80 md:w-full sm:h-52 h-36 w-40 rounded-md"
            />
            <div class=" absolute sm:bottom-9 bottom-5 flex justify-center w-full mx-auto lg:text-xl md:text-lg sm:text-base text-xs z-30">
              <span class="text-white font-semibold text-center">
                {{ destination.name }}
              </span>
            </div>

            <!-- BG gradient -->
            <div class="absolute top-0 w-full h-full bg-gradient-to-t from-green-300 to-yellow-300 via-transparent opacity-40 z-10 rounded-md"></div>

            <!-- Hover: bg-gradient -->
            <div class="hover:opacity-100 transition-opacity duration-700 absolute top-0 w-full h-full bg-gradient-to-t from-green-300 to-yellow-300 opacity-0 z-20 rounded-md">

              <div class=" absolute cursor-pointer md:top-8 sm:top-3 top-5 flex flex-wrap justify-center w-full text-yellow-700 text-center">
                <h1 class="font-bold md:text-lg sm:text-base text-xs">
                  {{ destination.name }}
                </h1>
                <p class="mt-1 md:text-sm sm:px-2 px-0.5 text-xss leading-none lg:block hidden">
                  {{ destination.description }}
                </p>
              </div>

              <div class="absolute lg:bottom-16 sm:bottom-7 bottom-8 flex justify-center w-full text-white">
                <a href="/" class=" text-center flex justify-center bg-gradient-to-b from-yellow-300 to-yellow-500 hover:bg-gradient-to-b hover:from-yellow-400 hover:to-yellow-600 font-semibold lg:px-5 sm:px-3 px-2 md:py-1.5 sm:py-1 xs:py-1.5 py-1 lg:text-base md:text-xs text-xss rounded-full">
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
