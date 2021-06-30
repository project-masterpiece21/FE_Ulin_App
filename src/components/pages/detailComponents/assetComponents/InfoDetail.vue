<template>
	<div id="info_detail" class="rounded-lg cursor-default">
		<h1 class="lg:text-2xl text-xl font-semibold border-gray-300">Detail info</h1>
		
		<div v-for="detail in details" :key="detail.info" class="py-6 border-b pb-2 flex justify-between items-center truncate">
			<h2 class="md:text-base text-sm w-1/3 block font-semibold mb-1 truncate">{{ detail.info }}</h2>
			<p class="md:text-base text-sm text-gray-600 text-right">{{ detail.detail }}</p>
		</div>

	</div>
</template>

<script>
	import { reactive } from "vue";
	export default {
		setup() {
			const details = reactive([
				{ info: "Pengelolah", detail: "Karang taruna Majalengka"},
				{ info: "Alamat lengkap", detail: "Penyeweuan, Maja, Kabupaten Majalengka, Jawa Barat"},
				{ info: "Waktu buka", detail: "Senin  - Minggu, pukul 20:00 wib - 18:00 wib"},
				{ info: "Tiket masuk", detail: "Dewasa Rp.15.000 - Anak-anak Rp.10.000"},
				{ info: "Kendaraan masuk", detail: "Motor - mobil"},
			]);
			return {
				details
			}
		}
	}
</script>