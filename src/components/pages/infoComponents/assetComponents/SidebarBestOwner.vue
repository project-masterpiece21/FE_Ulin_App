<template>
	<aside class="rounded-lg w-full h-full">
		<div class="w-full bg-white rounded-lg px-5">
			<h1 class="py-4 border-b font-semibold text-lg">Pengelolah Terbaik</h1>

			<OwnerItem />
		</div>
	</aside>
</template>


<script>
	import { defineAsyncComponent } from 'vue';
	const OwnerItem = defineAsyncComponent(() => import('./OwnerItem.vue'))
	export default {
		components: {
			OwnerItem,
		}
	}
</script>