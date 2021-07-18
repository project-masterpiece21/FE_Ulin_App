<template>
	<header class="fixed top-0 2xl:container z-10 w-full">
		<div class="flex w-full justify-between px-4 items-center py-4 bg-gray-100 ">

			<a href="/" class="xl:ml-2 xl:mb-2 xl:w-28 h-9 w-24">
				<img src="../../assets/img/logo/logo.png" alt="logo-ulin" class="w-full">
			</a>
			
			<!-- <NavbarIsLogin /> -->
			<NavbarIsNotLogin />
		</div>
	</header>
</template>

<script>
	import NavbarIsLogin from './assetComponents/NavbarIsLogin.vue';
	import NavbarIsNotLogin from './assetComponents/NavbarIsNotLogin.vue';
	export default {
		components: {
			NavbarIsLogin,
			NavbarIsNotLogin
		}
	}
</script>
