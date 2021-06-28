<template>
	<aside class="mt-5 w-full bg-white rounded-lg p-5">
		<div class="pb-4 border-b font-medium text-lg">
			Tags Populer
		</div>

		<div class="grid grid-cols-2 gap-y-2 text-base truncate mt-2">
			<div v-for="tag in bestTags" class="py-1">
				<a href="/" class="px-4 py-1.5 bg-yellow-100 rounded-full text-yellow-600 font-medium">
					{{ tag }}
				</a>
			</div>
		</div>
	</aside>
</template>

<script>
	import { ref } from 'vue';
	export default {
		setup() {
			const bestTags = ref([
				'Pemda Majalengka', 'Cirebon Raya', 'Yogyakarta', 'Malang Raya', 'Indramayu',
				'Ciayumajakuning', 'Cipeteuy', 'Kuningan', 'Kasepuhan', 'Tasikmalaya'
			]);

			return {
				bestTags
			}
		}
	}
</script>