<template>
	<main class="md:flex xl:ml-52 lg:ml-32 sm:ml-24 lg:mt-36 mt-24">
		<section class="md:w-3/5 w-full px-4">
			<CardListRankComponent />
		</section>
		<section class="w-2/5 md:block hidden px-4">
			<keep-alive>
				<SidebarRanks />
			</keep-alive>
		</section>
	</main>
</template>

<script>
	import { defineAsyncComponent } from 'vue';

	const CardListRankComponent = defineAsyncComponent(() => import('./assetComponents/CardListRankComponent.vue'));

	const SidebarRanks = defineAsyncComponent(() => import('./assetComponents/SidebarRankComponent.vue'));

	export default {
		components: {
			CardListRankComponent,
			SidebarRanks
		}
	}
</script>