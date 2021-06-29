<template>
	<keep-alive>
		<TopNavbar class="sm:block hidden" />
	</keep-alive>

	<main>
		<HeroImage />
		<div class="px-3 w-full">
			<InviteButton />

			<HeadingDetail />

			<NavInfoDetail />

			<ImagesDetail />

			<DescriptionDetail />

			<InfoDetail />

		</div>
	</main>
</template>

<script>
	import HeroImage from '../pages/detailComponents/HeroImage.vue';
	import InviteButton from '../pages/detailComponents/InviteButton.vue';
	import InfoDetail from '../pages/detailComponents/infoDetail.vue';
	import HeadingDetail from '../pages/detailComponents/HeadingDetail.vue';
	import NavInfoDetail from '../pages/detailComponents/NavInfoDetail.vue';
	import ImagesDetail from '../pages/detailComponents/ImagesDetail.vue';
	import DescriptionDetail from '../pages/detailComponents/DescriptionDetail.vue';

	export default {
		components: {
			HeroImage,
			InviteButton,
			InfoDetail,
			HeadingDetail,
			NavInfoDetail,
			ImagesDetail,
			DescriptionDetail
		}
	}
</script>