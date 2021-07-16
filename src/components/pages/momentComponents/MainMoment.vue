<template>
	<main class="md:flex xl:ml-52 sm:ml-24">
		<section class="lg:w-3/4 w-full px-4">
			<CardMomentComponent />
		</section>
		<section class="w-2/6 lg:block hidden px-4">
			<BestOwnerComponent />
		</section>
	</main>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	const CardMomentComponent = defineAsyncComponent(() => 
		import('./assetComponents/CardMomentComponent.vue')
	);

	const BestOwnerComponent = defineAsyncComponent(() => 
		import('./assetComponents/BestOwnerComponent.vue')
	);

	export default {
		name: 'Moment',
		components: {
			CardMomentComponent,
			BestOwnerComponent
		}
	}
</script>