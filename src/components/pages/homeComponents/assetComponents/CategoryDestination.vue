<template>
	<section class="md:hidden px-4 w-full my-8">
		<div class="scrollbar-thin overflow-x-scroll scrollbar-thumb-rounded">
			<div class="flex flex-row w-max">
				<div v-for="category in categories" :key="category.name" class="group flex flex-col items-center sm:mr-8 mr-7">
					<button class="group-hover:bg-yellow-100 sm:h-14 sm:w-14 h-12 w-12 bg-gray-200 rounded-full">
						<img :src="category.src" :alt="category.name" class="sm:h-9 sm:w-9 w-8 h-8 mx-auto">
					</button>
					<span class="mx-auto text-xs mt-1.5 truncate">{{ category.name }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const categories = reactive([
				{ name: 'Pantai', src: './src/assets/img/beach.png' },
				{ name: 'Camping', src: './src/assets/img/camp.png' },
				{ name: 'Pegunungan', src: './src/assets/img/mountain.png' },
				{ name: 'Muncak', src: './src/assets/img/tracking.png' },
				{ name: 'Water Park', src: './src/assets/img/pool.png' },
				{ name: 'Kuliner', src: './src/assets/img/culinary.png' },
			]);

			return {
				categories
			}
		}
	}
</script>