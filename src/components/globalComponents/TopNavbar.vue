<template>
  <header class="fixed top-0 2xl:container z-50 w-full lg:bg-gradient-to-t
            from-white
            to-gray-100 bg-gray-100">
    <slot name="top-navigation"></slot>

    <div class="flex w-full justify-between sm:px-8 px-4 items-center h-20">
      <a href="/" class="w-24">
        <img src="/logo/logo.png" alt="logo-ulin" />
      </a>

      <div class="relative md:block hidden w-3/5">

      <!-- Form search -->
        <slot name="search-form"></slot>
      </div>

      <div class="flex items-center">
        <NavbarIsLogin v-if="login_status" />

        <NavbarIsNotLogin v-else />
      </div>
    </div>
  </header>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

import NavbarIsNotLogin from "./assetsTopNavbar/NavigationIsNotLogin.vue";
import SideNavbar from './assetsTopNavbar/SideNavbar.vue';
import NavbarIsLogin from './assetsTopNavbar/NavigationIsLogin.vue';

export default {
  components: {
    NavbarIsNotLogin,
    SideNavbar,
    NavbarIsLogin,
  },
  setup() {
    const store = useStore();

    const isLogin = computed(() => {
      return store.getters['loginUser/isLogin']
    });

    const { login_status } = isLogin.value;

    return {
      login_status
    }
  }
};
</script>
