<template>
	<!-- Top Navbar -->
	<keep-alive>
		<TopNavbar >
			<template v-slot:top-navigation>
				<top-side-navbar />
			</template>
			
			<template v-slot:search-form>
				<search-form>
					<popular-search />
				</search-form>
			</template>
		</TopNavbar>
	</keep-alive>

	<!-- Side Navbar -->
	<keep-alive>
		<SideNavbar />
	</keep-alive>

	<!-- Bottom Navbar For Mobile -->
	<keep-alive>
		<NavbarBottomMobile />
	</keep-alive>

	<popup-login />
	
	<!-- View Page -->
	<router-view></router-view>
</template>
