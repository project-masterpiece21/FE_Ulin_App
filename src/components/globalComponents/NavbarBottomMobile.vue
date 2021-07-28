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
    <a
      :href="menu.link"
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
      <span
        :class="$route.path === menu.link ? 'text-yellow-500' : 'text-gray-400'"
        class="iconify text-xl mx-auto"
        :data-icon="menu.icon"
        data-inline="false"
      ></span>

      <div
        :class="$route.path === menu.link ? 'text-yellow-500' : ''"
        class="text-gray-500"
      >
        {{ menu.name }}
      </div>
    </a>
  </nav>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const navMenu = reactive([
      { name: "Beranda", icon: "bx:bxs-home-smile", link: "/" },
      { name: "Moment", icon: "ri:ghost-smile-fill", link: "/moment" },
      { name: "Cari tempat", icon: "ri:map-pin-fill", link: "/destination" },
      { name: "Peringkat", icon: "icomoon-free:trophy", link: "/rank" },
      {
        name: "Pusat info",
        icon: "ph:newspaper-clipping-fill",
        link: "/information",
      },
    ]);

    return {
      navMenu,
    };
  },
};
</script>
