<template>

	<keep-alive>
		<TopNavbar class="sm:block hidden"></TopNavbar>
	</keep-alive>

	<main class="md:flex lg:mt-24 sm:mt-20">

		<section class="lg:w-3/4 w-full lg:px-4 md:px-8">
				<HeroImage :img="place.image" :name="place.name" />

				<InviteButton />

				<div class="lg:px-0 px-3 w-full">

					<HeadingDetail 
						:name="place.name" 
						:address="place.address" 
						:city="place.city"
						:province="place.province"
					/>

					<NavigationInfo />

					<ImagesSlider />

					<DescriptionDetail 
						:description="place.description"
						:name="place.name" 
					/>

					<InfoDetail
						:name="place.name"
						:owner="place.manager"
						:openDay="place.openDay"
						:openTime="place.openTime"
						:ticket="`Rp.${place.ticket}`"
						:vehicles="place.vehicle"
						:address="`${place.address}, ${place.city} ${place.province}`"
					/>

				</div>
		</section>

		<section class="w-2/6 sticky top-20 lg:block hidden px-4">
			<recommendation-destination />
		</section>
	</main>
</template>

<script>
	import { useRoute } from 'vue-router';
	import { onMounted, computed } from 'vue';
	import { useStore } from 'vuex';

	import HeroImage from './assetComponents/HeroImage.vue' 
	import InviteButton from './assetComponents/InviteButton.vue';
	import InfoDetail from './assetComponents/InfoDetail.vue';
	import HeadingDetail from './assetComponents/HeadingDetail.vue';
	import NavigationInfo from './assetComponents/NavigationInfo.vue';
	import ImagesSlider from './assetComponents/ImagesSlider.vue';
	import DescriptionDetail from './assetComponents/DescriptionDetail.vue';
	import ReviewDetail from './assetComponents/ReviewDetail.vue';
	import RecommendationCity from '../searchDestinationComponents/assetComponents/recommendationCity.vue';
	import RecommendationDestination from '../../globalComponents/RecommendationDestination.vue';

	export default {
		name: 'homepage',
		components: {
			HeroImage,
			InviteButton,
			InfoDetail,
			HeadingDetail,
			NavigationInfo,
			ImagesSlider,
			DescriptionDetail,
			ReviewDetail,
			RecommendationCity,
			RecommendationDestination
		},
		setup() {
			const route = useRoute();
			const store = useStore();
			const params = route.params.id;

			onMounted(() => {
				store.dispatch('place/getPlaceById', params)
			});

			const place = computed(() => {
				return store.getters.place.getterPlaceById;
			})

			return { place }
		}
	}
</script>