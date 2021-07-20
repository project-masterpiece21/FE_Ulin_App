<template>
	<header class="fixed top-0 2xl:container z-20 w-full md:bg-white bg-gray-100">
		<slot></slot>

		<div class="flex w-full justify-between px-8 items-center h-20">

			<a href="/" class="w-24">
				<img src="../../assets/img/logo/logo.png" alt="logo-ulin">
			</a>

			<div class="relative lg:block hidden w-3/5">

				<form class="relative w-full text-sm pb-5">
					<input type="search" name="search" class="focus:border-yellow-400 px-6 focus:outline-none border py-2 rounded-xl w-full shadow" placeholder="Cari tempat destinasi wisata, tempat nongkrong, caffe">

					<button type="sumbit" class="absolute top-1 right-1 py-1 px-4 rounded-lg bg-yellow-200 text-2xl text-yellow-700 hover:bg-yellow-300">
						<span class="iconify" data-icon="bx:bx-search-alt" data-inline="false"></span>
					</button>
				</form>

				<div class="absolute left-3 -bottom-0.5 text-xs text-gray-500 font-medium truncate">
					<a href="/" class="mr-4 hover:text-yellow-600 truncate">desa cibuntu</a>
					<a href="/" class="mr-4 hover:text-yellow-600 truncate">taman kanggraksan</a>
					<a href="/" class="mr-4 hover:text-yellow-600 truncate">penyaweuan</a>
					<a href="/" class="mr-4 hover:text-yellow-600 truncate">cadas gantung</a>
				</div>
			</div>

			<div class="flex items-center">

				<NavbarIsLogin>
					<TopNavigation />
				</NavbarIsLogin>
				
				<!-- <NavbarIsNotLogin>
					<TopNavigation />
				</NavbarIsNotLogin> -->
			</div>
			
		</div>
	</header>
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