<template>
	<section class="md:hidden sm:mt-10 mt-8">
		<div class="w-full grid grid-cols-5 gap-y-2">

			<router-link v-for="categorie in categories" :key="categorie.name"  to="/" class="group w-14 flex flex-col items-center w-full">

				<div class="flex items-center sm:w-14 sm:h-14 h-12 w-12 bg-yellow-200 rounded-xl border border-yellow-300">
					<span class="iconify md:text-5xl sm:text-3xl text-2xl text-yellow-500 group-hover:text-yellow-700 mx-auto" :data-icon="categorie.icon" data-inline="false"></span>
				</div>

				<span class="sm:text-sm text-xss mt-1 text-gray-500 group-hover:text-yellow-500 truncate font-medium">{{ categorie.name }}</span>

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