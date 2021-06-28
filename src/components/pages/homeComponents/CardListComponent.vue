<template>
	<article class="grid md:grid-cols-2 gap-5 w-full mt-8 px-4">

		<CardItemComponent />

		<CardItemComponent />

		<CardItemComponent />

		<CardItemComponent />
		
	</article>
</template>

<script>
	import CardItemComponent from "./CardItemComponent.vue";
	export default {
		components: {
			CardItemComponent
		},
	};
</script>