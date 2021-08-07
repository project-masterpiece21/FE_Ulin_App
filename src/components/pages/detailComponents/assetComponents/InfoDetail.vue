<template>
	<div class="rounded-lg cursor-default">
		<h1 class="
			lg:text-2xl 
			xs:text-xl 
			text-lg 
			font-semibold 
			border-gray-300
		 ">
		 		{{ `Detail ${name}` }}
		 </h1>
		
		<div v-for="item in infoDetails" :key="item.info" 
			class="py-6 border-b pb-2 flex justify-between items-center">
				<h2 class="md:text-base text-sm w-1/3 block font-semibold mb-1">
					{{ item.info }}
				</h2>
				<p class="md:text-base text-sm text-gray-600 text-right">
					{{item.detail}}
				</p>
		</div>

	</div>
</template>

<script>
	import { reactive, toRefs } from 'vue';

	export default {
		name: 'info-detail',
		props: [
			'name',
			'owner',
			'openDay',
			'openTime',
			'ticket',
			'vehicles',
			'address',
		],
		setup(props) {
			const items = toRefs(props);

			const infoDetails = reactive([
				{ info: "Pengelolah", detail: items.owner },
				{ info: "Alamat lengkap", detail: items.address },
				{ info: "Waktu buka", detail: items.openTime },
				{ info: "Hari buka", detail: items.openDay },
				{ info: "Tiket masuk", detail: items.ticket },
				{ info: "Kendaraan masuk", detail: items.vehicles },
			]);

			return { infoDetails }
		}
	}
</script>