<template>
	<div class="md:block hidden w-full bg-white font-medium z-30">
		<div class="px-6 lg:h-9 h-8 flex items-center">
			<router-link v-for="navigation in navigations" :to="navigation.link" class="group flex items-center mr-4">
				<span class="iconify mr-1 lg:text-lg text-base text-gray-600 group-hover:text-yellow-600" :data-icon="navigation.icon" data-inline="false"></span>
				<span class="lg:text-xs text-xss text-gray-600 group-hover:text-yellow-600 font-semibold">{{ navigation.name }}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const navigations = reactive([
				{ name: 'Pasang Iklan', icon: 'ic:outline-add-location', link: '/'},
				{ name: 'Promo', icon: 'tabler:discount-2', link: '/'},
				{ name: 'Tentang Kami', icon: 'fluent:emoji-laugh-16-regular', link: '/'}
			]); 

			return { navigations }
		}
	}
</script>