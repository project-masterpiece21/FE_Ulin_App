<template>
<div class="lg:block hidden w-full z-30">
	<div class="w-full px-6 lg:h-9 h-8 flex justify-between items-center text-base">
		<div class="flex items-center">
			<router-link v-for="navigation in navigations" :key="navigation.name" :to="navigation.link" class="group flex items-center mr-3">
				<span class="iconify mr-1" :data-icon="navigation.icon" data-inline="false"></span>
				<span class="lg:text-xs text-xss">{{ navigation.name }}</span>
			</router-link>
		</div>
		<div class="flex items-center">
			<router-link v-for="navigation in navigations2" :key="navigation.name" :to="navigation.link" class="group flex items-center mr-4">
				<span class="iconify mr-1" :data-icon="navigation.icon" data-inline="false"></span>
				<span class="lg:text-xs text-xss">{{ navigation.name }}</span>
			</router-link>
		</div>
	</div>

</div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const navigations = reactive([
      { name: 'Kamu pengelolah tempat wisata?', icon: 'bx:bx-map', link: '/' },
      { name: 'Promo', icon: 'tabler:discount-2', link: '/' },
      { name: 'Blog', icon: 'akar-icons:book', link: '/' },
    ]);

    const navigations2 = reactive([
      { name: 'Notifikasi', icon: 'akar-icons:bell', link: '/' },
      { name: 'Syarat dan Ketentuan', icon: 'gridicons:notice-outline', link: '/' },
      { name: 'Pusat bantuan', icon: 'iconoir:headset-help', link: '/' },
      { name: 'Tentang Kami', icon: 'fluent:emoji-laugh-16-regular', link: '/about-us' },
    ]);

    return { navigations, navigations2 };
  },
};
</script>
