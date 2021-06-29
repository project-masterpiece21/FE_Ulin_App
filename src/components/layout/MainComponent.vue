<template>
	<keep-alive>
		<TopNavbar />
	</keep-alive>
	<keep-alive>
		<SideNavbar />
	</keep-alive>
	<keep-alive>
		<NavbarBottomMobile />
	</keep-alive>
	<router-view></router-view>
</template>
