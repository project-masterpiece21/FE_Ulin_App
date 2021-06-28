<template>
	<a v-for="destination in destinations" href="/" class="reactive flex aspect-w-4 aspect-h-2 items-center w-full mt-4">
		<img v-lazy="destination.image" alt="Recomendation Destination" class="object-fit rounded-xl block object-cover">

		<figcaption class="absolute group hover:bg-opacity-0 w-full h-full bg-black bg-opacity-25 rounded-xl">
			<div class="flex flex-col py-3 truncate text-white px-3">
				<h1 class="text-lg text-base truncate font-bold">{{ destination.name }}</h1>
				<span class="text-sm font-semibold truncate">{{ destination.address }}</span>
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
					name: 'Kuningan',
					image: 'https://images.unsplash.com/photo-1523539693385-e5e891eb4465?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80',
					address: 'Kuningan, Jawa Barat'
				},
				{ 
					name: 'Bali',
					image: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
					address: 'Denpasar, Bali'
				},
				{ 
					name: 'Karang Taruna Daerah Indramayu',
					image: 'https://images.unsplash.com/photo-1602183081720-3ff0403e87d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
					address: 'Wonosobo, Jawa Tengah'
				},
			]);
			return {
				destinations,
			}
		}
	}
</script>