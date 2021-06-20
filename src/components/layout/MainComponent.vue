<template>
	<TopNavComponent />
	<SideNavComponent />
	<NavMobileComponent />
	<router-view></router-view>
</template>

<script>
	import NavMobileComponent from '../globalComponents/NavMobileComponent.vue';
	import SideNavComponent from '../globalComponents/SideNavComponent.vue';
	import TopNavComponent from '../globalComponents/TopNavComponent.vue';
	export default {
		components: {
			NavMobileComponent,
			SideNavComponent,
			TopNavComponent
		}
	}
</script>