<template>
	<SearchMobileComponent />
	<main class="md:flex xl:ml-52 ml-24">
		<BannerComponent />
	</main>
</template>

<script>
	import SearchMobileComponent from '../pages/homeComponents/componentMobileOnly/SearchMobileComponent.vue';
	import BannerComponent from '../pages/homeComponents/BannerComponent.vue';
	export default {
		components: {
			SearchMobileComponent,
			BannerComponent
		}
	}
</script>