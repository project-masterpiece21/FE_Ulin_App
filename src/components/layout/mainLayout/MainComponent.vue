<template>
	<keep-alive>
		<TopNavbar>
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
	<keep-alive>
		<SideNavbar />
	</keep-alive>
	<keep-alive>
		<NavbarBottomMobile />
	</keep-alive>

	<popup-login />
	
	<router-view></router-view>
</template>
