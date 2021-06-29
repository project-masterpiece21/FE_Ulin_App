<template>
	<figure class="relative overflow-hidden mx-auto sm:mt-20">
		<img src="https://images.unsplash.com/photo-1605940169841-60884072a854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" class="sm:h-80 md:h-96 sm:h-72 h-64 w-full object-cover ">

		<!-- Nav -->
		<NavbarImageMobile />
		<!-- Nav -->
	</figure>

</template>


<script>
	import NavbarImageMobile from './NavbarImageMobile.vue';
	export default {
		components: {
			NavbarImageMobile,
		}
	}
</script>