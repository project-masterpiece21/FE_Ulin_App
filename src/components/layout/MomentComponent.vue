<template>
	<main class="md:flex md:ml-24 xl:ml-52 md:mt-20 mx-auto px-4">
		<section class="lg:w-4/5 lg:mr-4 overflow-hidden">
			<CardMomentComponent />
		</section>
		<section class="w-1/3 lg:block hidden h-screen bg-white rounded-xl ml-6 px-7">
			<h1 class="py-4 border-b font-bold text-base">Pengelolah Terbaik</h1>
		</section>
	</main>
</template>

<script>
	import CardMomentComponent from '../pages/momentComponents/CardMomentComponent.vue';
	export default {
		components: {
			CardMomentComponent
		}
	}
</script>