<template>

	<MainDetail />

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
