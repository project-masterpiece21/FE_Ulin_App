<template>
	<main class="md:flex xl:ml-52 sm:ml-24 mt-20">
		<section class="lg:w-3/4 w-full px-4">
			<BannerComponent />
			<CategoryDestination />
			<CardListComponent />
		</section>
		<section class="w-2/6 sticky top-20 lg:block hidden px-4">
			<RecomendationListComponent />
		</section>
	</main>
</template>

<script>
	import BannerComponent from './assetComponents/BannerComponent.vue';
	import CardListComponent from './assetComponents/CardListComponent.vue';
	import RecomendationListComponent from './assetComponents/RecomendationListComponent.vue';
	import CategoryDestination from "./assetComponents/CategoryDestination.vue";
	export default {
		components: {
			BannerComponent,
			CardListComponent,
			RecomendationListComponent,
			CategoryDestination
		},
	}
</script>