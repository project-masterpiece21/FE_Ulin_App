<template>
  <div class="hidden md:block">
    <div class="flex items-center font-medium lg:text-base text-sm">
      <router-link to="/signup">
        <h1
          class="
            mr-4
            lg:py-1
            py-2
            lg:px-8
            px-6
            rounded-xl
            shadow
            text-white
            font-semibold
            bg-gradient-to-t
            from-yellow-300
            to-yellow-400
            hover:bg-gradient-to-b
            hover:from-yellow-300
            hover:to-yellow-500
          "
        >
          Daftar
        </h1>
      </router-link>
      <router-link to="/login">
        <h1
          class="
            lg:py-1
            py-2
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

  <side-navbar />
</template>

<script>
import SideNavbar from './SideNavbar.vue';

export default {
  components: {
    SideNavbar
  }
};
</script>
