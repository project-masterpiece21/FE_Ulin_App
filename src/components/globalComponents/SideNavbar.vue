<template>
	<nav class="fixed top-14 mt-2 hidden sm:block z-10">
		<div  class="xl:w-44 xl:ml-3 flex flex-col md:w-28 w-24 h-screen bg-gray-100">

			<!-- Menu Navbar -->
			<a :href="menu.link" v-for="menu in navMenu" :key="menu.name" class="xl:w-full group mt-7 mx-auto cursor-pointer block items-center">

				<div :class="$route.path === menu.link ? ['bg-yellow-100 group-hover:bg-yellow-100'] : ''" class="xl:w-full xl:h-12 xl:rounded-3xl flex items-center w-14 h-14 rounded-full group-hover:bg-white">

					<div class="xl:pl-3 flex xl:ml-0 mx-auto items-center">
						<span :class="$route.path === menu.link ? 'text-yellow-500' : ''" class="iconify text-3xl mx-auto text-gray-400" :data-icon="menu.icon" data-inline="false"></span>

						<h1 :class="$route.path === menu.link ? 'text-yellow-500' : ''" class="xl:block text-black hidden ml-3 font-semibold">{{menu.name}}</h1>
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
				{ name: "Beranda", icon: "bx:bxs-home-circle", link:"/", isActive: false},
				{ name: "Momentum", icon: "ri:ghost-smile-fill", link:"/moment", isActive: false},
				{ name: "Destinasi", icon: "cib:everplaces", link:"/category", isActive: false},
				{ name: "Peringkat", icon: "icomoon-free:trophy", link:"/rank", isActive: false}
			]);

			return {
				navMenu,
			}
		}
	}
</script>