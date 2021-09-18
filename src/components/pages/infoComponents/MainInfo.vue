<template>
	<main class="md:flex xl:ml-52 lg:ml-24 sm:ml-20 lg:mt-36 mt-24">
		<section class="lg:w-3/4 w-full lg:px-4 md:px-8 sm:px-2 px-1">
			<CardList />
		</section>
		<section class="w-2/6 lg:block hidden px-4">
			<div class="sticky top-32">
				<SidebarBestOwner />
			</div>
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