<template>
	<article class="grid xl:grid-cols-2 gap-4 w-full mt-11 px-4">

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