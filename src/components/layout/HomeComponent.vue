<template>
	<HomeComponents />
</template>

<script>
	import { defineAsyncComponent } from 'vue';

	const HomeComponents = defineAsyncComponent(() => 
		import('../pages/homeComponents/MainHome.vue')
	);
	export default {
		name: "Home",
		components: {
			HomeComponents
		}
	}
</script>