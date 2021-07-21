<template>
	<article class="grid md:grid-cols-2 gap-5 w-full mt-8 mb-20 px-4">

		<CardItem />

		<CardItem />

		<CardItem />

		<CardItem />
		
	</article>
</template>

<script>
	import CardItem from "./CardItem.vue";
	export default {
		components: {
			CardItem
		},
	};
</script>