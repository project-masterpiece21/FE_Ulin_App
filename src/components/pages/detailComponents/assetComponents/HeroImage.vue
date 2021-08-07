<template>
	<figure class="relative overflow-hidden mx-auto">

		<div class="aspect-w-3 aspect-h-2 xs:aspect-w-4 xs:aspect-h-2">
			<img :src="img" :alt="name" class="w-full object-cover">
		</div>

		<!-- Nav -->
		<ButtonNavigationImageMobile />
		<!-- Nav -->
	</figure>
</template>


<script>
	import ButtonNavigationImageMobile from './ButtonNavigationImageMobile.vue';

	export default {
		name: 'banner',
		props: [ 'img', 'name' ],
		components: {
			ButtonNavigationImageMobile,
		}
	}
</script>