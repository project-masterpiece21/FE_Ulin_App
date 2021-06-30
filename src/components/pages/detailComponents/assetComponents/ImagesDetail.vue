<template>
	<section class="relative">
		<div class="scrollbar-thin overflow-x-scroll scrollbar-thumb-rounded">
			<div class="flex flex-row w-max w-full">

				<figure v-for="image in images" :key="image" class="mr-4 rounded-md overflow-hidden">
					<img :src="image.image" :alt="image.image" class="h-52 object-cover">
				</figure>

			</div>
		</div>

		<button class="absolute inset-y-1/2 left-2">
			<span class="iconify cursor-pointer text-white text-opacity-60 w-10 h-10 p-2 rounded-full bg-black bg-opacity-20 hover:text-opacity-80 hover:bg-opacity-50" data-icon="bx:bxs-left-arrow" data-inline="false"></span>
		</button>

		<button class="absolute inset-y-1/2 right-2">
			<span class="iconify cursor-pointer text-white text-opacity-60 w-10 h-10 p-2 rounded-full bg-black bg-opacity-20 hover:text-opacity-80 hover:bg-opacity-50" data-icon="bx:bxs-right-arrow" data-inline="false"></span>
		</button>
	</section>
</template>

<script>
	import { reactive } from "vue";
	export default {
		setup() {
			const images = reactive([
				{ image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"},
				{ image: "https://images.unsplash.com/photo-1506017669510-0bcbe8003d70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},
				{ image: "https://images.unsplash.com/photo-1560148174-3afe3d91aa3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},
				{ image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"}
			]);

			return {
				images
			}
		}
	}
</script>