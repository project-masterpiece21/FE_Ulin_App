<template>

	<MainDetail />

</template>

<script>
	import { defineAsyncComponent } from 'vue';

	const MainDetail = defineAsyncComponent(() =>
		import ('../pages/detailPlace/MainDetail.vue')
	);
	export default {
		components: {
			MainDetail,
		}
	}
</script>
