<template>
	<main class="md:flex xl:ml-52 sm:ml-24 md:mt-20 mt-6">
		<section class="w-full lg:mr-4">
			<BannerComponent />
			<CategoryDestination />
			<CardListComponent />
		</section>
		<section class="w-2/5 lg:block hidden">
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