<template>
	<SearchMobileComponent />
	<main class="md:flex md:ml-24 xl:ml-52 md:mt-20 mt-6">
		<section>
			<BannerComponent />
			<CategoryMobileComponent />
			<CardListComponent />
		</section>
		<section>
			<RecomendationListComponent />
		</section>
	</main>
</template>

<script>
	import { defineAsyncComponent } from "vue";
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
		}
	}
</script>