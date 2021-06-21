<template>
	<section class="lg:hidden px-4 md:mt-5">
		<div class="md:text-lg mb-2 text-sm font-medium text-gray-600">Kategori</div>
		<div class="w-full grid grid-cols-5 gap-2">
			<router-link v-for="categorie in categories" :key="categorie.name"  to="/" class="group w-full max-w-xs flex flex-col items-center border mx-auto shadow-sm rounded-xl py-2 hover:shadow-lg bg-white shadow-sm">
				<span class="iconify md:text-5xl text-4xl text-gray-600 group-hover:text-yellow-500" :data-icon="categorie.icon" data-inline="false"></span>
				<span class="md:mt-2 text-xs mt-1 text-gray-600 group-hover:text-yellow-500">{{ categorie.name }}</span>
			</router-link>
		</div>
	</section>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const categories = reactive([
				{ name: 'Gunung', icon: 'uil:mountains-sun' },
				{ name: 'Pantai', icon: 'fluent:beach-16-regular' },
				{ name: 'Camping', icon: 'carbon:campsite' },
				{ name: 'Cafe', icon: 'carbon:cafe' },
				{ name: 'Perkebunan', icon: 'tabler:trees' },
				{ name: 'Museum', icon: 'map:museum' },
				{ name: 'Wisata Religi', icon: 'emojione-monotone:mosque' },
				{ name: 'Hiking', icon: 'ic:outline-hiking' },
				{ name: 'Water Park', icon: 'ic:round-pool' },
				{ name: 'Selengkapnya', icon: 'akar-icons:arrow-right' },
			]);

			return {
				categories
			}
		}
	}
</script>