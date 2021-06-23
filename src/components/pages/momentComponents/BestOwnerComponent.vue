<template>
	<aside class="sticky top-20 rounded-xl ml-6 px-7 bg-white">
		<h1 class="py-4 border-b font-bold text-base">Pengelolah Terbaik</h1>

		<OwnerListComponent />
	</aside>
</template>


<script>
	import { defineAsyncComponent } from 'vue';
	const OwnerListComponent = defineAsyncComponent(() => 
		import('./OwnerListComponent.vue')
	)
	export default {
		components: {
			OwnerListComponent,
		}
	}
</script>