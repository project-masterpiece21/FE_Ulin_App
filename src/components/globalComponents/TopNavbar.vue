<template>
	<header class="fixed top-0 2xl:container z-20 w-full">
		<slot></slot>

		<div class="flex w-full justify-between px-7 items-center h-16 bg-gray-100">

			<a href="/" class="w-24">
				<img src="../../assets/img/logo/logo.png" alt="logo-ulin">
			</a>
			<!-- 
			<NavbarIsLogin>
				<TopNavigation />
			</NavbarIsLogin>
			 -->
			<NavbarIsNotLogin>
				<TopNavigation />
			</NavbarIsNotLogin>
		</div>
	</header>

	<!-- <DropdownMenu /> -->
</template>

<script>
	import NavbarIsLogin from './assetComponents/NavigationIsLogin.vue';
	import NavbarIsNotLogin from './assetComponents/NavigationIsNotLogin.vue';
	import TopNavigation from './assetComponents/TopNavigation.vue';
	import DropdownMenu from './assetComponents/DropdownMenu.vue';
	export default {
		components: {
			NavbarIsLogin,
			NavbarIsNotLogin,
			TopNavigation,
			DropdownMenu
		}
	}
</script>