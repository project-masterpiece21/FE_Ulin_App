<template>
	<article class="mt-20">

		<CardItem />

	</article>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	
	const CardItem = defineAsyncComponent(() => 
		import('./CardItem.vue')
	);

	export default {
		components: {
			CardItem
		},
	}
</script>