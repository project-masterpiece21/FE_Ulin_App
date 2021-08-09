<template>
  <div class="relative w-full px-6 rounded-lg">
    <a href="/" class="md:mr-4 rounded-lg overflow-hidden">
      
    </a>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'Banner',
    setup() {
      const banners = ref([
        '1.png',
        '2.png',
        '3.png',
        '4.png',
      ]);

      return { banners };
    }
  }
</script>