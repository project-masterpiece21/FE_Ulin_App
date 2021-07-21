<template>
	<nav class="fixed top-0 left-0 hidden sm:block z-10">
		<div  class="xl:w-44 xl:ml-3 flex flex-col md:pt-32 pt-20 md:w-28 w-24 h-screen bg-gray-100">
			<!-- Menu Navbar -->
			<a :href="menu.link" v-for="menu in navMenu" :key="menu.name" class="xl:w-full group mt-4 mx-auto cursor-pointer block items-center">

				<div :class="$route.path === menu.link ? ['bg-yellow-100 group-hover:bg-yellow-100'] : ''" class="xl:w-full xl:h-12 xl:rounded-3xl flex items-center w-14 h-14 rounded-full group-hover:bg-white">

					<div class="xl:pl-3 flex xl:ml-0 mx-auto items-center">
						<span :class="$route.path === menu.link ? 'text-yellow-500' : ''" class="iconify xl:text-2xl text-3xl mx-auto text-gray-400" :data-icon="menu.icon" data-inline="false"></span>

						<h1 :class="$route.path === menu.link ? 'text-yellow-500 font-semibold' : ''" class="xl:block text-black hidden ml-3 font-medium">{{ menu.name }}</h1>
					</div>

				</div>

			</a>
			<!-- Menu Navbar -->

		</div>
	</nav>	
</template>

<script>
	import { reactive } from "vue";
	export default {
		setup() {
			const navMenu = reactive([
				{ name: "Beranda", icon: "bx:bxs-home-smile", link:"/" },
				{ name: "Cari Tempat", icon: "ri:map-pin-fill", link:"/category" },
				{ name: "Momentum", icon: "ri:ghost-smile-fill", link:"/moment" },
				{ name: "Peringkat", icon: "icomoon-free:trophy", link:"/rank" },
				{ name: "Pusat info", icon: "ph:newspaper-clipping-fill", link:"/information" },
			]);

			return {
				navMenu,
			}
		}
	}
</script>