<template>
  <header class="fixed top-0 2xl:container z-50 w-full lg:bg-gradient-to-t
            from-white
            to-gray-100 bg-gray-100">
    <slot name="top-navigation"></slot>

    <div class="flex w-full justify-between sm:px-8 px-4 items-center h-20">
      <a href="/" class="w-24">
        <img src="../../assets/img/logo/logo.png" alt="logo-ulin" />
      </a>

      <div class="relative md:block hidden w-3/5">

      <!-- Form search -->
        <slot name="search-form"></slot> 
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
import { ref } from "vue";

import NavbarIsNotLogin from "./assetComponents/NavigationIsNotLogin.vue";
import SideNavbar from './assetComponents/SideNavbar.vue';

export default {
  components: {
    NavbarIsNotLogin,
    SideNavbar,
    // NavbarIsLogin,
  }
};
</script>
