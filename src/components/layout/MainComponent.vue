<template>
	<keep-alive>
		<TopNavbar>
			<template v-slot:top-navigation>
				<TopSideNavbar />
			</template>
			
			<template v-slot:search-form>
				<SearchForm>
					<PopularSearch />
				</SearchForm>
			</template>
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
	import SearchForm from '../globalComponents/assetComponents/SearchForm.vue';
	import PopularSearch from '../globalComponents/assetComponents/PopularSearch.vue';
	
	export default {
		components: {
			TopSideNavbar,
			SearchForm,
			PopularSearch
		}
	}
</script>