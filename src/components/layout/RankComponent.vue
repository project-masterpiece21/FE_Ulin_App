<template>
	<main class="md:flex xl:ml-52 sm:ml-24">
		<section class="md:w-3/5 w-full px-4">
			<CardListRankComponent />
		</section>
		<section class="w-2/5 lg:block hidden px-4">
			<keep-alive>
				<SidebarRanks />
			</keep-alive>
		</section>
	</main>
</template>

<script>
	import { defineAsyncComponent } from 'vue';

	const CardListRankComponent = defineAsyncComponent(() => import('../pages/rankComponents/CardListRankComponent.vue'));

	const SidebarRanks = defineAsyncComponent(() => import('../pages/rankComponents/SidebarRankComponent.vue'));

	export default {
		components: {
			CardListRankComponent,
			SidebarRanks
		}
	}
</script>