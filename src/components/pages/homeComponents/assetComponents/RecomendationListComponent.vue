<template>
	<aside class="sticky top-20 lg:block hidden flex flex-col w-full h-full">
		<div class="flex flex-col h-full bg-white px-6 py-3 rounded-tr-lg rounded-tl-lg mx-4">
			<h1 class="font-semibold text-lg w-full mb-1 border-b pb-4">Rekomendasi</h1>

			<RecomendationItemComponent />
		</div>
	</aside>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	const RecomendationItemComponent = defineAsyncComponent(() => 
		import('./RecomendationItemComponent.vue')
	);

	export default {
		components : {
			RecomendationItemComponent
		}
	}
</script>