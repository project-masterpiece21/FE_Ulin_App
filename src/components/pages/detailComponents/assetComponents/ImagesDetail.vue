<template>
	<div class="px-3">
		<Carousel :settings="settings" :breakpoints="breakpoints">
			<Slide v-for="image in images" :key="image">
				<div class="w-full mr-2">
					<img :src="image.image" :alt="image.image" class="rounded-lg w-full">
				</div>
			</Slide>

			<template #addons>
				<Navigation />
			</template>
		</Carousel>
	</div>
</template>

<script>
	import { reactive } from "vue";
	import { Carousel, Navigation, Slide } from 'vue3-carousel';

  import 'vue3-carousel/dist/carousel.css';

	export default {
		name: "images-slider-detail",
		components: {
			Carousel,
			Navigation,
			Slide
		},
		setup() {
			const images = reactive([
				{ image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"},
				{ image: "https://images.unsplash.com/photo-1506017669510-0bcbe8003d70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},
				{ image: "https://images.unsplash.com/photo-1560148174-3afe3d91aa3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"},
				{ image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"}
			]);

			const breakpoints = ({
				240: {
					itemsToShow: 1.4,
					snapAlign: 'start',
				},
			});

			const settings = ({
				itemsToShow: 3,
      	snapAlign: 'center',
			});

			return {
				images,
				breakpoints,
				settings
			}
		}
	}
</script>

<style>
	.carousel__prev, .carousel__next {
		background-color: white;
		color: #4b5563;
	}
</style>