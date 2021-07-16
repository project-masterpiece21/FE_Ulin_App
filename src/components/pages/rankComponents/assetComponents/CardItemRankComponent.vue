<template>
	<a href="/" v-for="( rank, index ) in ranks" :key="rank" class="flex items-center my-8">
 	
		<span class="text-xl font-bold mr-4">{{ index + 1 }}</span>
		
		<div class="lg:w-24 lg:h-24 sm:w-20 sm:h-20 w-16 h-16">
			<img v-lazy="rank.image" :alt="rank.name" class="width-w-max w-full h-full object-cover rounded-xl">
		</div>
		
		<div class="ml-4 truncate">
			<h1 class="lg:text-xl sm:text-lg font-semibold">{{ rank.name }}</h1>
			<span class="lg:text-lg sm:text-base text-sm">{{ rank.city }}</span>

			<span class="flex items-center">
				<span class="iconify text-base md:text-lg text-yellow-500" data-icon="fluent:thumb-like-20-filled" data-inline="false"></span>
				<span class="text-lg text-center text-base font-semibold ml-1 text-yellow-500">8.5</span>
			</span>
		</div>

	</a>
</template>


<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const ranks = reactive([
				{
					name: 'Desa Cibuntu',
					city: 'Kabupaten Kuningan',
					image: 'https://images.unsplash.com/photo-1571591682885-5bf3fef5b0a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
				},
				{
					name: 'Penyaweuan',
					city: 'Kabupaten Majalengka',
					image: 'https://images.unsplash.com/photo-1624652970910-90cb6a9b9a8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
				},
				{
					name: 'Ciremay Park',
					city: 'Kabupaten Kuningan',
					image: 'https://images.unsplash.com/photo-1553755322-56baa43a31d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'
				}
			]);

			return {
				ranks,
			}
		}
	}
</script>