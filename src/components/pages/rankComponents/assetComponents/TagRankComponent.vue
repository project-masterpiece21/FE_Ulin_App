<template>
	<aside class="mt-5 w-full bg-white rounded-lg p-5">
		<div class="pb-4 border-b font-medium lg:text-lg text-base">
			Tags Populer
		</div>

		<div class="lg:text-base lg:text-sm text-xs mt-2 flex flex-wrap">
			<a v-for="tag in bestTags" href="/" class="px-4 lg:mr-3 my-1 mr-1.5 py-1.5 bg-yellow-100 rounded-full text-yellow-600 font-medium truncate">
				{{ tag }}
			</a>
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