<template>
	<aside class="sticky top-24 lg:block hidden flex flex-col w-full h-screen mr-4 pr-2">
		<div class="flex flex-col bg-white px-6 py-3 rounded-tr-lg rounded-tl-lg">
			<h1 class="font-semibold text-lg w-full mb-5">Rekomendasi</h1>

			<RecomendationItemComponent />

			<RecomendationItemComponent />

			<RecomendationItemComponent />

			<RecomendationItemComponent />

			<RecomendationItemComponent />

			<RecomendationItemComponent />

			<RecomendationItemComponent />

			<RecomendationItemComponent />
		</div>
	</aside>
</template>

<script>
	import RecomendationItemComponent from "./RecomendationItemComponent.vue";
	export default {
		components : {
			RecomendationItemComponent
		}
	}
</script>