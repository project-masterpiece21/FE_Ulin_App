<template>
	<MainInfo />
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	const MainInfo = defineAsyncComponent(() => 
		import('../pages/infoComponents/MainInfo.vue')
	);
	export default {
		name: 'Info_page',
		components: {
			MainInfo,
		}
	}
</script>