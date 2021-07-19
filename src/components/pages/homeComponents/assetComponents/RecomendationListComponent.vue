<template>
	<aside class="rounded-lg w-full h-full">
		<div class="w-full bg-white rounded-lg px-5">
			<h1 class="py-4 border-b font-semibold text-lg">Rekomendasi untukmu</h1>

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