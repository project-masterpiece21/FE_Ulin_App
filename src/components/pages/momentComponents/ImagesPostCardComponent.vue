<template>
	<figure class="flex mt-3 overflow-hidden">
		<div v-for="index in images" :key="index" class="aspect-w-1 aspect-h-0 sm:w-40 sm:h-40 h-20 w-20 mx-1">
			<img :src="index" class="rounded-md overflow-hidden">
		</div>
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