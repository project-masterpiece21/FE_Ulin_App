<template>
	<MainMoment />
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	const MainMoment = defineAsyncComponent(() => 
		import('../pages/momentComponents/MainMoment.vue')
	);
	export default {
		name: 'Moment',
		components: {
			MainMoment,
		}
	}
</script>