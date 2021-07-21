<template>
	<main class="md:flex xl:ml-52 sm:ml-24 md:mt-24 mt-20">
		<section class="lg:w-3/4 w-full px-4">
			<CardList />
		</section>
		<section class="w-2/6 sticky top-20 lg:block hidden px-4">
			<SidebarBestOwner />
		</section>
	</main>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	const CardList = defineAsyncComponent(() => 
		import('./assetComponents/CardList.vue')
	);

	const SidebarBestOwner = defineAsyncComponent(() => 
		import('./assetComponents/SidebarBestOwner.vue')
	);

	export default {
		name: 'Moment',
		components: {
			CardList,
			SidebarBestOwner
		}
	}
</script>