<template>
	<nav class="sm:hidden w-full fixed bottom-0 inset-x-0 flex text-xs bg-white z-10">

		<a :href="menu.link" v-for="menu in navMenu" :key="menu.name" :name="menu.name" class="w-full focus:outline-none block py-3 text-center md:mb-8 group cursor-pointer">
			<span :class="$route.path === menu.link ? 'text-yellow-500' : 'text-gray-400'" class="iconify text-xl mx-auto  group-hover:text-yellow-500" :data-icon="menu.icon" data-inline="false"></span>

			<div :class="$route.path === menu.link ? 'text-yellow-500' : ''" class="text-gray-500 group-hover:text-yellow-500 text-xs">
				{{menu.name}}
			</div>
		</a>
		
	</nav>
</template>

<script>
	import { reactive } from "vue";
	export default {
		setup() {
			const navMenu = reactive([
				{ name: "Beranda", icon: "bx:bxs-home-smile", link:"/"},
				{ name: "Moment", icon: "ri:ghost-smile-fill", link:"/moment"},
				{ name: "Kategory", icon: "bx:bxs-category-alt", link:"/category"},
				{ name: "Peringkat", icon: "icomoon-free:trophy", link:"/rank"}
			])

			return {
				navMenu,
			}
		}
	}
</script>