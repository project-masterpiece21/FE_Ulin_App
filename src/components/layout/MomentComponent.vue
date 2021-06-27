<template>
	<main class="md:flex md:ml-24 sm:ml-20 xl:ml-52 md:mt-20 mx-auto px-4 mt-20">
		<section class="w-full lg:mr-4">
			<CardMomentComponent />
		</section>
		<section class="w-2/5 lg:block hidden ">
			<BestOwnerComponent />
		</section>
	</main>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	const CardMomentComponent = defineAsyncComponent(() => 
		import('../pages/momentComponents/CardMomentComponent.vue')
	);

	const BestOwnerComponent = defineAsyncComponent(() => 
		import('../pages/momentComponents/BestOwnerComponent.vue')
	);

	export default {
		name: 'Moment',
		components: {
			CardMomentComponent,
			BestOwnerComponent
		}
	}
</script>