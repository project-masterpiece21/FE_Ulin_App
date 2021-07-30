<template>
  <header class="fixed top-0 2xl:container z-50 w-full md:bg-gradient-to-t
            from-white
            via-gray-50
            to-gray-200 bg-gray-100">
    <slot></slot>

    <div class="flex w-full justify-between sm:px-8 px-4 items-center h-20">
      <a href="/" class="w-24">
        <img src="../../assets/img/logo/logo.png" alt="logo-ulin" />
      </a>

      <div class="relative lg:block hidden w-3/5">

      <!-- Form search -->
        <form class="w-full text-sm pb-5">
          <div class="relative overflow-hidden">
            <input
              type="search"
              name="search"
              class="
                focus:border-2 focus:border-yellow-500
                px-6
                focus:outline-none
                border
                py-2.5
                rounded-xl
                w-full
              "
              placeholder="Cari tempat destinasi wisata, tempat nongkrong, caffe"
            />

            <button
              type="sumbit"
              class="
                absolute
                right-0
                inset-y-0
                my-1
                mr-1
                px-4
                text-2xl
                hover:bg-gradient-to-b
              hover:from-yellow-300
              hover:to-yellow-500
                text-white
                bg-gradient-to-b
              from-yellow-300
              to-yellow-400
                rounded-lg
              "
            >
              <span
                class="iconify"
                data-icon="bx:bx-search-alt"
                data-inline="false"
              ></span>
            </button>
          </div>
        </form>

        <div
          class="
            absolute
            left-3
            -bottom-0.5
            text-xs
            font-medium
            truncate
            text-gray-600
          "
        >
          <a href="/" class="mr-4 truncate hover:text-gray-400"
            >desa cibuntu</a
          >
          <a href="/" class="mr-4 truncate hover:text-gray-400"
            >taman kanggraksan</a
          >
          <a href="/" class="mr-4 truncate hover:text-gray-400">penyaweuan</a>
          <a href="/" class="mr-4 truncate hover:text-gray-400"
            >cadas gantung</a
          >
        </div>
      </div>

      <div class="flex items-center">
        <!-- <NavbarIsLogin /> -->

        <NavbarIsNotLogin />
      </div>
    </div>
  </header>
</template>

<script>
// import NavbarIsLogin from "./assetComponents/NavigationIsLogin.vue";
import NavbarIsNotLogin from "./assetComponents/NavigationIsNotLogin.vue";

export default {
  components: {
    NavbarIsNotLogin,
    // NavbarIsLogin,
  },
};
</script>
