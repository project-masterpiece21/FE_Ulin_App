<template>
	<keep-alive>
		<TopSideNavbar />
	</keep-alive>
	<keep-alive>
		<TopNavbar>
			<TopSideNavbar />
		</TopNavbar>
	</keep-alive>
	<keep-alive>
		<SideNavbar />
	</keep-alive>
	<keep-alive>
		<NavbarBottomMobile />
	</keep-alive>
	<router-view></router-view>
</template>

<script>
	import TopSideNavbar from "../globalComponents/assetComponents/TopSideNavbar.vue";
	export default {
		components: {
			TopSideNavbar
		}
	}
</script>