<template>
  <nav class="scrollbar-thin overflow-x-scroll scrollbar-thumb-rounded px-4 mt-7 md:mt-12 sm:ml-0 ml-4 sm:flex sm:justify-center sm:mx-auto">
    <div class="flex items-center flex-row w-max gap-x-4">
      <a v-for="(menuMoment, index) in menuMoments" :href="menuMoment.link"
        class="px-5 py-0.5 rounded-lg bg-white shadow hover:bg-green-300 hover:text-white text-gray-600 font-medium border-2 border-white"
      >
        {{ menuMoment.name }}
      </a>
    </div>
  </nav>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const menuMoments = reactive([
      { name: 'Post', link: '/' },
      { name: 'Galeri', link: '/' },
      { name: 'Histori', link: '/' },
      { name: 'Tentang', link: '/' },
    ])

    return {
      menuMoments
    }
  }
}
</script>
