<template>
  <main class="lg:flex xl:ml-60 lg:ml-32 sm:ml-24 lg:mt-36 mt-20 mb-24">
		<section class="lg:w-3/5 w-full px-4">
			<ImageHero :image="place.image">
        <template v-slot:button-like>
          <ButtonLike />
        </template>
      </ImageHero>
      <ImagesList />
      <DescriptionPlace :place="place">
        <template v-slot:star-rating>
          <StarRating />
        </template>

        <template v-slot:rating-reviews>
          <RatingReview>
            <template v-slot:review-users>
              <UserReviews />
            </template>
          </RatingReview>
        </template>
      </DescriptionPlace>
		</section>
		<section class="w-2/5 lg:block hidden bg-white rounded-md">
      <RecommendationPlaces :places="places" />
		</section>
	</main>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import StarRating from "./assetComponents/StarRating.vue"
import RatingReview from "./assetComponents/Rating-Review.vue"
import ImageHero from "./assetComponents/ImageHero.vue"
import ImagesList from "./assetComponents/ImagesList.vue"
import DescriptionPlace from "./assetComponents/DescriptionPlace.vue"
import UserReviews from "./assetComponents/UserReviews.vue"
import ButtonLike from "./assetComponents/ButtonLike.vue"
import RecommendationPlaces from './assetComponents/RecommendationPlace.vue'
export default {
  name: "detail-main",
  components: {
    ImageHero,
    ImagesList,
    DescriptionPlace,
    StarRating,
    RatingReview,
    UserReviews,
    ButtonLike,
    RecommendationPlaces
  },
  setup() {
    const store = useStore()
    const router = useRoute()

    const { id } = router.params

    onMounted(() => {
      store.dispatch('getPlaces/getPlaces')
      store.dispatch('getPlaceById/getPlaceById', id)
    })

    const places = computed(() => {
      return store.getters['getPlaces/getterPlaces'];
    });

    const place = computed(() => {
      return store.getters['getPlaceById/getterPlaceById']
    })

    return { place, places }
  }
}
</script>
