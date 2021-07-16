<template>
	<a href="/" v-for="owner in owners" :key="owner.name" class="relative flex aspect-w-4 aspect-h-2 items-center mt-4 w-full">
		<img v-lazy="owner.image" :alt="owner.name" class="rounded-xl object-cover">

		<div class="absolute group hover:bg-opacity-0 w-full h-full bg-black bg-opacity-25 rounded-xl">
			<div class="px-3 text-white mt-2">
				<h1 class="xl:text-base text-sm font-bold leading-tight">{{ owner.name }}</h1>
				<span class="text-sm font-medium">233k pengikut</span>
			</div>
		</div>
	</a>
</template>



<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const owners = reactive([
				{ 
					name: 'Pemkot Kabupaten Majalengka',
					image: 'https://images.unsplash.com/photo-1623390061270-9ca62aa83da8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=411&q=80'
				},
				{ 
					name: 'Pemkot Kabupaten Cirebon',
					image: 'https://images.unsplash.com/photo-1524341661047-3a38ae8987f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluZG9uZXNpYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
				},
				{ 
					name: 'Karang Taruna Daerah Indramayu',
					image: 'https://images.unsplash.com/photo-1602183081720-3ff0403e87d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
				},
			]);
			return {
				owners,
			}
		}
	}
</script>