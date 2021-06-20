<template>
	<nav class="md:hidden w-full fixed bottom-0 inset-x-0 flex text-xs bg-white rounded-tl-3xl rounded-tr-3xl">

		<router-link :to="menu.link" v-for="menu in navMenu" :key="menu.name" :name="menu.name" class="w-full focus:outline-none block p-4 text-center md:mb-8 group cursor-pointer">
			<span class="iconify text-2xl mx-auto text-gray-500 group-hover:text-yellow-500" :data-icon="menu.icon" data-inline="false"></span>

			<div class="text-gray-500 group-hover:text-yellow-500">
				{{menu.name}}
			</div>
		</router-link>
		
	</nav>
</template>

<script>
	import { reactive } from "vue";
	export default {
		setup() {
			const navMenu = reactive([
				{ name: "Home", icon: "bx:bxs-home-circle", link:"/"},
				{ name: "Moment", icon: "ri:ghost-smile-fill", link:"/moment"},
				{ name: "Category", icon: "bx:bxs-category-alt", link:"/category"},
				{ name: "Rank", icon: "icomoon-free:trophy", link:"/rank"}
			])
			return {
				navMenu,
			}
		}
	}
</script>