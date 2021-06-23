<template>
	<figure  class="grid grid-flow-col gap-3 w-full mt-3">
		<img v-for="index in images" :key="index" :src="index" class="rounded-md w-full md:h-44 h-28 overflow-hidden object-cover">
	</figure>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const images = reactive([
				'https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
				'https://images.unsplash.com/photo-1609674750700-33895b9b7ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80',
				'https://images.unsplash.com/photo-1607602274619-4503f0c2444c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
			]);

			return {
				images
			}
		}
	}
</script>