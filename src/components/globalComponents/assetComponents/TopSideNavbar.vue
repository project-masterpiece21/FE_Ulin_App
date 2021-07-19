<template>
	<div class="lg:block hidden w-full bg-white font-medium z-30">
		<div class="px-6 h-10 flex items-center">
			<router-link v-for="navigation in navigations" :to="navigation.link" class="group flex items-center mr-4">
				<span class="iconify mr-1 text-lg text-gray-600 group-hover:text-yellow-600" :data-icon="navigation.icon" data-inline="false"></span>
				<span class="text-xs text-gray-600 group-hover:text-yellow-600 font-semibold">{{ navigation.name }}</span>
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