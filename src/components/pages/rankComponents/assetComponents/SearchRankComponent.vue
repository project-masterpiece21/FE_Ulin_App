<template>
	<aside class="w-full bg-white rounded-lg p-5">
		<div class="pb-4 border-b font-medium lg:text-lg text-base">
			Paling banyak dicari
		</div>

		<div class="grid grid-cols-2 gap-3 lg:text-base text-sm truncate mt-2">
			<div v-for="(rank, index) in searchRank" :key="rank" :class="index <= 2 ? 'text-yellow-600' : ''" class="truncate">
				<span  class="mr-1.5 font-bold">{{ index + 1 }}.</span>
				{{ rank }}
			</div>
		</div>
	</aside>
</template>

<script>
	import { ref } from 'vue';
	export default {
		setup() {
			const searchRank = ref([
				'Penyaweuan', 'Alun-alun Kejaksan', 'Candi Borobudur', 'Bromo', 'Karangsong',
				'Ciremai', 'Curug Cipeteuy', 'Taman Kuning', 'Sunan Gunung Jati', 'Pangandaran'
			]);

			return {
				searchRank
			}
		}
	}
</script>