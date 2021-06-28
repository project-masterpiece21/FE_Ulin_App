<template>
	<router-link to="/detail" class="w-full bg-white rounded-xl overflow-hidden border cursor-pointer shadow-md hover:shadow-xl">
			<div>

				<figure class="relative flex-shrink-0">
					<img
						v-lazy="{ src: 'https://images.unsplash.com/photo-1555071941-45994dc79d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' }"
						alt="Man looking at item at a store" class="md:h-52 sm:h-60 h-52 w-full object-cover"
					/>

					<div class="absolute flex items-center mx-auto right-4 bottom-4">
						<span class="md:px-4 py-1.5 px-5 bg-yellow-300 bg-opacity-80 rounded-md text-yellow-700 font-semibold text-xs truncate">Kabupaten Majalengka</span>
					</div>
				</figure>

				<div class="relative px-4 sm:py-4 py-3">
					<div class="flex justify-between overflow-ellipsis overflow-hidden">

						<div class="truncate md:w-5/6 w-10/12">
							
							<VisitorRecommendation />

							<router-link to="/detail" class="block mt-1 md:text-lg text-base leading-tight font-semibold text-black truncate">
								Penyaweuan, Majalengka sdadsadsa asdasdsadsadsjsad asodjsadasjd asdasd asdasd
							</router-link>
						</div>

					</div>

					<div>
						<p class="mt-3.5 sm:text-base text-sm text-gray-500">
							Getting a new business off the ground is a lot of hard
							work. Here are five ideas you can use to find your first
							customers.
						</p>
					</div>


					<LikedVisitorComponents />
				</div>
					

			</div>
	</router-link>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	const LikedVisitorComponents = defineAsyncComponent(() => import('./LikedVisitorComponents.vue'));
	const VisitorRecommendation = defineAsyncComponent(() => import('./VisitorRecommendation.vue'));

	export default {
		components: {
			LikedVisitorComponents,
			VisitorRecommendation
		}
	}
</script>