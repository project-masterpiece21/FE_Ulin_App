<template>
	<div class="w-full h-screen bg-white md:px-10 py-6 px-5 rounded-lg">
		<div class="flex items-center justify-between pb-2 border-b">
			<div class="flex lg:flex-row flex-col truncate sm:text-base text-xs">
				<span>Peringkat menurut : </span> 
				<p class="font-bold truncate"> Pencarian</p>
			</div>

			<select name="role" class="border-none shadow-none sm:text-sm text-xs bg-gray-50 focus:ring-2 ring-gray-200 focus:ring-gray-300 font-medium w-36">
				<option value="">Pengunjung</option>
				<option value="User">Pengelolah</option>
				<option value="Owner">Pencarian</option>
			</select>
		</div>
		<CardItemRankComponent />
	</div>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	const CardItemRankComponent = defineAsyncComponent(() => import('./CardItemRankComponent.vue'));
	export default {
		components: {
			CardItemRankComponent
		}
	}
</script>