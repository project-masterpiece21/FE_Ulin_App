<template>
	<nav class="fixed hidden md:block">
		<div  class="xl:w-52 xl:ml-3 flex flex-col w-28">

			<!-- Logo -->
			<router-link to="/">
				<figure class="lg:ml-0 lg:ml-3 lg:w-24 mb-3 w-20 mx-auto">
					<img src="../../assets/img/logo/logo.png">
				</figure>
			</router-link>
			<!-- Logo -->

			<!-- Menu Navbar -->
			<router-link :to="menu.link" v-for="menu in navMenu" :key="menu.name" class="xl:w-full group mt-7 mx-auto cursor-pointer block items-center">

				<div class="xl:w-full xl:h-12 xl:rounded-3xl flex items-center w-14 h-14 rounded-full group-hover:bg-white">

					<div class="xl:pl-3 flex xl:ml-0 mx-auto items-center">
						<span class="iconify text-3xl mx-auto text-gray-400 group-hover:text-yellow-500" :data-icon="menu.icon" data-inline="false"></span>

						<h1 class="xl:block group-hover:text-yellow-500 hidden ml-3 font-semibold">{{menu.name}}</h1>
					</div>

				</div>

			</router-link>
			<!-- Menu Navbar -->

		</div>
	</nav>	
</template>

<script>
	import { reactive } from "vue";
	export default {
		setup() {
			const navMenu = reactive([
				{ name: "Beranda", icon: "bx:bxs-home-circle", link:"/", isActive: false},
				{ name: "Momentum", icon: "ri:ghost-smile-fill", link:"/moment", isActive: false},
				{ name: "Kategori", icon: "bx:bxs-category-alt", link:"/category", isActive: false},
				{ name: "Peringkat", icon: "icomoon-free:trophy", link:"/rank", isActive: false}
			]);

			// const isActive = (nameIcon) => {
			// 	navMenu.map(menu => {
			// 		if (menu.name === nameIcon) {
			// 			menu.isActive = true
			// 		} else {
			// 			menu.isActive = false
			// 		}
			// 	})
			// }

			return {
				navMenu,
				// isActive
			}
		}
	}
</script>