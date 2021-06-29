<template>
	<article v-for="owner in owners" :key="owner" class="sm:px-14 sm:py-8 py-5 mb-5 px-6 bg-white rounded-lg cursor-pointer">

		<div class="relative" >
			<div class="flex items-center">
				<img :src="owner.image" :alt="owner.name" class="object-cover sm:w-14 sm:h-14 w-12 h-12 rounded-xl">
				<div class="sm:ml-4 ml-2 truncate">
					<h1 class="lg:text-lg font-semibold text-base truncate">{{ owner.name }}</h1>
					<span class="text-sm text-gray-500 truncate">{{ owner.time }}</span>
				</div>
			</div>
			<button class="absolute top-0 right-0 flex items-center lg:px-4 h-6 px-3 bg-yellow-400 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none">
				<span class="iconify text-sm" data-icon="akar-icons:plus" data-inline="false"></span>
				<span class="ml-1 sm:text-sm text-xs">Ikuti</span>
			</button>
		</div>

		<p class="md:text-base text-sm mt-3">{{ owner.body }}</p>

		<ImagesPostComponent />

		<ButtonsCardComponent />
	</article>
</template>

<script>
	import { reactive, defineAsyncComponent } from 'vue';
	
	const ImagesPostComponent = defineAsyncComponent(() => 
		import('./ImagesPostCardComponent.vue')
	);

	const ButtonsCardComponent = defineAsyncComponent(() => 
		import('./ButtonLikeCommentShareComponent.vue')
	);

	export default {
		components: {
			ImagesPostComponent,
			ButtonsCardComponent
		},
		setup() {
			const owners = reactive([
				{
					name: 'Pemkot Kabupaten Majalengka',
					image: 'https://images.unsplash.com/photo-1623390061270-9ca62aa83da8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=411&q=80',
					time: '2 hari yang lalu',
					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sollicitudin odio. Morbi hendrerit finibus tincidunt. Nullam tempor erat sit amet libero semper, ut lacinia purus aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non nunc finibus, blandit metus at, ultrices erat.',
					images: []
				},
				{
					name: 'Pemkot Kabupaten Majalengka',
					image: 'https://images.unsplash.com/photo-1623390061270-9ca62aa83da8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=411&q=80',
					time: '2 hari yang lalu',
					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sollicitudin odio. Morbi hendrerit finibus tincidunt. Nullam tempor erat sit amet libero semper, ut lacinia purus aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non nunc finibus, blandit metus at, ultrices erat.',
					images: []
				}
			]);
		
			return {
				owners
			}		
		}
	}
</script>