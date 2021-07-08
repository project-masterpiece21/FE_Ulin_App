<template>
	<main class="lg:w-9/12 w-full">
		<HeroImage />
		<InviteButton />
		<div class="lg:px-0 px-3 w-full">

			<HeadingDetail />

			<NavInfoDetail />

			<ImagesDetail />

			<DescriptionDetail />

			<InfoDetail />

			<ReviewDetail />

		</div>
	</main>
</template>

<script>
	import HeroImage from './assetComponents/HeroImage.vue';
	import InviteButton from './assetComponents/InviteButton.vue';
	import InfoDetail from './assetComponents/InfoDetail.vue';
	import HeadingDetail from './assetComponents/HeadingDetail.vue';
	import NavInfoDetail from './assetComponents/NavInfoDetail.vue';
	import ImagesDetail from './assetComponents/ImagesDetail.vue';
	import DescriptionDetail from './assetComponents/DescriptionDetail.vue';
	import ReviewDetail from './assetComponents/ReviewDetail.vue';

	export default {
		components: {
			HeroImage,
			InviteButton,
			InfoDetail,
			HeadingDetail,
			NavInfoDetail,
			ImagesDetail,
			DescriptionDetail,
			ReviewDetail
		}
	}
</script>