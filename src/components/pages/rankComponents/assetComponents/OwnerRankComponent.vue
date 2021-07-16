<template>
	<aside class="mt-5 w-full bg-white rounded-lg p-5">
		<div class="pb-4 border-b font-medium lg:text-lg text-base">
			Pengelolah Terbaik
		</div>

		<div class="grid grid-cols-2 gap-3 lg:text-base text-sm truncate mt-2">
			<div v-for="(owner, index) in bestOwner" :key="owner" :class="index <= 2 ? 'text-yellow-600' : ''" class="truncate">
				<span  class="mr-1.5 font-bold">{{ index + 1 }}.</span>
				{{ owner }}
			</div>
		</div>
	</aside>
</template>

<script>
	import { ref } from 'vue';
	export default {
		setup() {
			const bestOwner = ref([
				'Pemda Majalengka', 'Pemkot Cirebon Raya', 'Pengelolah Yogyakarta', 'Malang Raya', 'Indramayu',
				'Ciayumajakuning', 'Karang Taruna Cipeteuy', 'Kuningan Raya', 'Pengurus Kasepuhan', 'Tasikmalaya'
			]);

			return {
				bestOwner
			}
		}
	}
</script>