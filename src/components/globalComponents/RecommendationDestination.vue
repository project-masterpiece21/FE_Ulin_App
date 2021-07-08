<template>
	<section class="lg:block hidden ml-5 w-3/12">
		<a v-for="destination in destinations" :key="destination" href="#" class="flex w-full mb-4 items-center">

			<div class="w-28 h-20 rounded-md overflow-hidden">
				<img v-lazy="destination.image" :alt="destination.name" class="object-cover w-full h-full">
			</div>

			<div class="w-full ml-2 truncate">
				<div class="w-full flex items-center">
					<div class="text-xl">
						<span class="iconify text-yellow-600 mr-1" data-icon="akar-icons:location" data-inline="false"></span>
					</div>
					<span class="text-xs font-medium truncate">{{ destination.address }}</span>
				</div>
				<h2 class="xl:text-lg text-base font-medium tracking-tight leading-tight truncate">
					{{ destination.name }}
				</h2>
			</div>

		</a>
	</section>
</template>

<script>
	import { reactive } from 'vue';

	export default {
		setup() {
			const destinations = reactive([
				{ 
					name: 'Desa Cibuntu',
					image: 'https://images.unsplash.com/photo-1523539693385-e5e891eb4465?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80',
					address: 'Kuningan, Jawa Barat asdasdas asdsadasdsadsadsadsadsadas'
				},
				{ 
					name: 'Bali',
					image: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
					address: 'Denpasar, Bali'
				},
				{ 
					name: 'Alun-alun Indramayu Raya asdasd asdasds',
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