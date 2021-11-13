<template>
	<a v-for="destination in destinations" href="/" class="reactive flex aspect-w-4 aspect-h-2 items-center w-full mt-4" :key="destination.name">
		<img v-lazy="destination.image" alt="Recomendation Destination" class="object-fit rounded-xl block object-cover">

		<figcaption class="absolute group hover:bg-opacity-0 w-full h-full bg-black bg-opacity-25 rounded-xl">
			<div class="flex flex-col py-3 text-white px-3">
				<h1 class="lg:text-xl text-lg font-bold leading-tight">{{ destination.name }}</h1>
				<h4 class="flex items-center lg:text-base text-sm font-medium">
					<span class="iconify mr-0.5 text-yellow-500 text-lg" data-icon="ri:map-pin-fill" data-inline="false"></span>
					{{ destination.address }}
				</h4>
			</div>
		</figcaption>
	</a>
</template>



<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const destinations = reactive([
				{ 
					name: 'Desa Cibuntu',
					image: 'https://images.unsplash.com/photo-1523539693385-e5e891eb4465?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80',
					address: 'Kuningan, Jawa Barat'
				},
				{ 
					name: 'Bali',
					image: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
					address: 'Denpasar, Bali'
				},
				{ 
					name: 'Alun-alun Indramayu',
					image: 'https://images.unsplash.com/photo-1602183081720-3ff0403e87d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
					address: 'Indramayu, Jawa Barat'
				},
			]);
			return {
				destinations,
			}
		}
	}
</script>