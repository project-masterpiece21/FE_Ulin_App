<template>
	<RankMain />
</template>

<script>
	import { defineAsyncComponent } from 'vue';

	const RankMain = defineAsyncComponent(() => import('../../pages/rankComponents/RankMain.vue'));
	export default {
		components: {
			RankMain
		}
	}
</script>