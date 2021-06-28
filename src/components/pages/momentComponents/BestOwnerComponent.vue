<template>
	<aside class="sticky top-20 rounded-xl ml-6 px-7 bg-white">
		<h1 class="py-4 border-b font-semibold text-lg">Pengelolah Terbaik</h1>

		<OwnerItemComponent />
	</aside>
</template>


<script>
	import { defineAsyncComponent } from 'vue';
	const OwnerItemComponent = defineAsyncComponent(() => 
		import('./OwnerItemComponent.vue')
	)
	export default {
		components: {
			OwnerItemComponent,
		}
	}
</script>