<template>
	<figure class="mt-3 overflow-hidden w-full">
		<div class="relative">
			<img v-for="index in images" :key="index" v-lazy="index" class="rounded overflow-hidden w-full md:h-72 sm:h-56 h-48 object-cover aspect-w-1">
			<span class="absolute right-4 bottom-4 font-medium md:text-sm text-xs text-white">10+ gambar</span>
		</div>
	</figure>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const images = reactive([
				'https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80'

			]);

			return {
				images
			}
		}
	}
</script>