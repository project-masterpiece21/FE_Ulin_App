<template>
	<keep-alive>
		<TopNavbar class="sm:block hidden" />
	</keep-alive>

	<div class="flex sm:mt-20 lg:px-8">

		<MainDetail />
		
		<SidebarDetail />
	</div>

</template>

<script>
	import MainDetail from '../pages/detailComponents/MainDetail.vue';
	import SidebarDetail from '../pages/detailComponents/SidebarDetail.vue';

	export default {
		components: {
			MainDetail,
			SidebarDetail
		}
	}
</script>