<template>
  <nav
    class="
      sm:hidden
      w-full
      fixed
      border-t
      bottom-0
      inset-x-0
      flex
      text-xss
      bg-white
      z-40
    "
  >
    <router-link
      :to="menu.link"
      v-for="menu in navMenu"
      :key="menu.name"
      :name="menu.name"
      class="
        w-full
        focus:outline-none
        block
        py-2
        text-center
        group
        cursor-pointer
      "
    > 
      <div :class="[(activeRoute === menu.link) ? 'text-yellow-500' : 'text-gray-400' ]">
        <span
          class="iconify text-xl mx-auto"
          :data-icon="menu.icon"
          data-inline="false"
        ></span>
      </div>

      <div
        :class="[(activeRoute === menu.link) ? 'text-yellow-500' : 'text-gray-400' ]"
        class="text-gray-500"
      >
        {{ menu.name }}
      </div>
    </router-link>
  </nav>
</template>

<script>
import { reactive, computed } from "vue";
import { useRoute } from 'vue-router';

export default {
  setup() {
    const navMenu = reactive([
      { name: "Beranda", icon: "bx:bxs-home-smile", link: "/" },
      { name: "Moment", icon: "ri:ghost-smile-fill", link: "/moment" },
      { name: "Cari tempat", icon: "ri:map-pin-fill", link: "/places" },
      { name: "Peringkat", icon: "icomoon-free:trophy", link: "/rank" },
      {
        name: "Coming Soon",
        icon: "bx:bx-calendar-star",
        link: "/coming-soon",
      },
    ]);

    const route = useRoute();

    const activeRoute = computed(() => {
      return route.path;
    })

    return {
      navMenu,
      activeRoute
    };
  },
};
</script>
