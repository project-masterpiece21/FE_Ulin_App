<template>
  <nav class="fixed top-0 hidden sm:block z-40">
    <div
      class="
        xl:w-56
        xl:px-4
        flex flex-col
        lg:pt-36
        md:pt-24
        pt-20
        md:w-28
        w-24
        lg:shadow
        h-screen
        lg:bg-white
        bg-gray-100
      "
    >
      <!-- Menu Navbar -->
      <router-link
        :to="menu.link"
        v-for="menu in navMenu"
        :key="menu.name"
        class="
          xl:w-full
          group mt-4
          mx-auto
          cursor-pointer
          block
          items-center"
        >
        <div
          :class="
            $route.path === menu.link
              ? ['bg-yellow-100 group-hover:bg-yellow-100']
              : ''
          "
          class="
            xl:w-full
            xl:h-12
            xl:rounded-3xl
            flex
            items-center
            w-14
            h-14
            rounded-full
            group-hover:bg-gray-100
          "
        >
          <div class="xl:pl-3 flex xl:ml-0 mx-auto items-center">
            <div :class="[(routeActive === menu.link) ? 'text-yellow-500' : 'text-gray-400' ]">
              <span
                class="iconify xl:text-2xl text-3xl mx-auto"
                :data-icon="menu.icon"
                data-inline="false"
              ></span>
            </div>

            <h1 :class="[(routeActive === menu.link) ? 'text-yellow-500 font-semibold' : '' ]"
              class="xl:block text-black hidden ml-3 font-medium"
            >
              {{ menu.name }}
            </h1>
          </div>
        </div>
      </router-link>
      <!-- Menu Navbar -->
    </div>
  </nav>
</template>

<script>
import { reactive, computed } from "vue";
import { useRoute } from 'vue-router';

export default {
  setup() {
    const navMenu = reactive([
      { name: "Beranda", icon: "bx:bxs-home-smile", link: "/" },
      { name: "Cari Tempat", icon: "ri:map-pin-fill", link: "/places" },
      { name: "Momentum", icon: "ri:ghost-smile-fill", link: "/moment" },
      { name: "Peringkat", icon: "icomoon-free:trophy", link: "/rank" },
      {
        name: "Coming Soon",
        icon: "bx:bx-calendar-star",
        link: "/coming-soon",
      },
    ]);

    const router = useRoute()

    const routeActive = computed(() => {
      return router.path;
    })


    return {
      navMenu,
      routeActive
    };
  },
};
</script>
