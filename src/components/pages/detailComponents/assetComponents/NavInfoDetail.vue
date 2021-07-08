<template>
	<section class="flex justify-between w-full items-center my-5">
		<a v-for="icon in icons" :key="icon.name" :href="icon.link" class="group w-full block py-2 px-3 text-center text-sm">

			<button class="flex mx-auto items-center focus:outline-none">
				<span :class="icon.name === 'Ikuti' ? 'group-hover:text-red-600' : 'group-hover:text-yellow-500' " class="iconify mr-1 md:text-xl sm:text-lg text-base md:mr-2" :data-icon="icon.icon" data-inline="false"></span>

				<div :class="icon.name === 'Ikuti' ? 'group-hover:text-red-600' : 'group-hover:text-yellow-500' " class="md:text-lg sm:text-base md:font-medium">	
					{{ icon.name }}
				</div>

			</button>
			
		</a>
	</section>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const icons = reactive([
				{ name: 'Detail info', icon: 'uil:layer-group', link: '#info_detail' },
				{ name: 'Reviews', icon: 'bx:bx-message-square-detail', link: '#review_list' },
				{ name: 'Ikuti', icon: 'ri:user-heart-line', link: '/' },
			]);

			return { icons }
		}
	}
</script>