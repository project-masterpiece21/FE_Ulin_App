<template>
	<keep-alive>
		<TopNavbar class="sm:block hidden"></TopNavbar>
	</keep-alive>

	<div class="flex sm:mt-20 lg:px-8">

		<MainDetail />
		
		<RecommendationDestination />
	</div>

</template>

<script>
	import { defineAsyncComponent } from 'vue';

	const MainDetail = defineAsyncComponent(() => 
		import ('../pages/detailComponents/MainDetail.vue')
	);
	export default {
		components: {
			MainDetail,
		}
	}
</script>