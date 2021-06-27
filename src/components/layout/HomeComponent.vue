<template>
	<SearchMobileComponent />
	<main class="md:flex xl:ml-52 sm:ml-24 md:mt-20 mt-6">
		<section class="w-full lg:mr-4">
			<BannerComponent />
			<CategoryMobileComponent />
			<CardListComponent />
		</section>
		<section class="w-2/5 lg:block hidden">
			<RecomendationListComponent />
		</section>
	</main>
</template>

<script>
	import SearchMobileComponent from '../pages/homeComponents/componentMobileOnly/SearchMobileComponent.vue';
	import CategoryMobileComponent from '../pages/homeComponents/componentMobileOnly/CategoryMobileComponent.vue';
	import BannerComponent from '../pages/homeComponents/BannerComponent.vue';
	import CardListComponent from '../pages/homeComponents/CardListComponent.vue';
	import RecomendationListComponent from '../pages/homeComponents/RecomendationListComponent.vue';
	export default {
		components: {
			SearchMobileComponent,
			BannerComponent,
			CardListComponent,
			RecomendationListComponent,
			CategoryMobileComponent
		},
	}
</script>