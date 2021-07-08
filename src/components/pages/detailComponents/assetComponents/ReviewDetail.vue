<template>
	<aside class="my-4">
		<span id="review_list" class="text-sm">Komentar diambil satu bulan terakhir</span>

		<div v-for="review in reviews" :key="review" class="relative my-4 w-full bg-white h-52 rounded-md">
			<div class="absolute left-3 top-3 flex items-center">
				<div class="h-14 w-14 rounded-full overflow-hidden">
					<img :src="review.image" :alt="review.name" class="object-cover h-full w-full">
				</div>
				<div class="flex flex-col ml-3.5 truncate">
					<span class="font-bold truncate">{{ review.name }}</span>
					<span class="text-sm truncate">{{ review.posted }}</span>
				</div>
			</div>

			<button class="absolute top-4 right-3">
				<span class="iconify mx-auto text-xl text-gray-600" data-icon="carbon:overflow-menu-vertical" data-inline="false"></span>
			</button>

			<div class="absolute top-20 w-full h-28">
				<p class="px-4 mt-1 sm:text-base text-sm">{{ review.comment }}</p>
			</div>
		</div>
	</aside>

	<button class="w-full mx-auto font-medium mb-4 border border-gray-300 py-1.5 rounded-md hover:bg-white focus:bg-white focus:ring-2 ring-yellow-400">
		Selengkapnya
	</button>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const reviews = reactive([
				{ name: "Asep Maulana", posted: "1 jam lalu", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", comment: "Nice Place!" },
				{ name: "Ella", posted: "23 jam lalu", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", comment: "Nice Place!" },
				{ name: "Iffan Affandy", posted: "1 hari lalu", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", comment: "Nice Place!" },
			]);

			return { reviews }
		}
	}
</script>