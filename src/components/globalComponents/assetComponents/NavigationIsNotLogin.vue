<template>
  <div class="hidden md:block">
    <div class="flex items-center font-medium text-base">
      <router-link to="/signup">
        <h1
          class="
            mr-4
            lg:py-1
            py-0.5
            lg:px-8
            px-6
            rounded-xl
            shadow
            text-white
            font-semibold
            bg-gradient-to-b
            from-yellow-300
            to-yellow-500
            hover:bg-gradient-to-b
            hover:from-yellow-300
            hover:to-yellow-400
          "
        >
          Daftar
        </h1>
      </router-link>
      <router-link to="/login">
        <h1
          class="
            lg:py-1
            py-0.5
            lg:px-8
            px-6
            bg-white
            rounded-xl
            shadow
            font-medium
            hover:shadow-md
            hover:text-yellow-500
            hover:font-semibold
          "
        >
          Masuk
        </h1>
      </router-link>
    </div>
  </div>

  <button
    @click="dropdown = !dropdown"
    class="md:hidden text-gray-600 focus:bg-white py-1 px-1 rounded-full"
  >
    <span
      class="iconify mx-auto text-4xl"
      data-icon="system-uicons:menu-hamburger"
      data-inline="false"
    ></span>
  </button>

  <div
    v-if="dropdown"
    :class="`md:hidden px-7 py-5 absolute top-0 right-0 sm:w-1/2 w-full bg-white h-screen z-30`"
  >
    <div class="relative">
      <button
        @click="dropdown = !dropdown"
        class="
          absolute
          -top-2.5
          right-0
          md:hidden
          text-gray-600
          bg-white
          py-1.5
          px-1.5
        "
      >
        <div class="text-base font-medium">Tutup</div>
      </button>
    </div>

    <div class="relative w-full justify-center mt-10 text-white font-semibold">
      <div
        class="
          flex flex-col
          text-gray-600
          font-medium
          border-b border-yellow-200
          pb-1.5
        "
      >
        <a href="/" class="my-2 hover:text-yellow-500">Cari tempat wisata</a>
        <a href="/" class="my-2 hover:text-yellow-500">Rekomendasi untukmu</a>
        <a href="/" class="my-2 hover:text-yellow-500">Moment</a>
        <a href="/" class="my-2 hover:text-yellow-500">Peringkat wisata</a>
      </div>

      <div class="flex flex-col text-gray-600 font-medium">
        <a href="/" class="my-2 hover:text-yellow-500">Pusat bantuan</a>
        <a href="/" class="my-2 hover:text-yellow-500">Syarat dan ketentuan</a>
        <a href="/" class="my-2 hover:text-yellow-500">Pusat karir</a>
        <a href="/" class="my-2 hover:text-yellow-500">Tentang kami</a>
      </div>

      <div class="xs:mt-9 mt-6">
        <router-link
          to="/login"
          class="
            w-full
            flex
            items-center
            hover:bg-gradient-to-b
            hover:from-yellow-300
            hover:to-yellow-400
            bg-gradient-to-b
            from-yellow-300
            to-yellow-500
            rounded-lg
          "
        >
          <div class="mx-auto px-2 py-2">Masuk ke akun</div>
        </router-link>
        <router-link
          to="/signup"
          class="
            w-full
            flex
            items-center
            hover:bg-gradient-to-b
            hover:from-yellow-300
            hover:to-yellow-400
            bg-gradient-to-b
            from-yellow-300
            to-yellow-500
            rounded-lg
            my-3
          "
        >
          <div class="mx-auto px-2 py-2">Daftar akun</div>
        </router-link>
      </div>

      <div
        class="
          xs:block
          hidden
          text-gray-500
          font-light
          text-xs
          justify-center
          items-center
          mt-7
          text-center
        "
      >
        <span class="block">© 2021 Ulin Apps</span>
        <span>Sebuah aplikasi yang bergerak di bidang destinasi wisata</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const dropdown = ref(false);

    return { dropdown };
  },
};
</script>
