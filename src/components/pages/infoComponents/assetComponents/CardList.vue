<template>
	<article>

		<CardItem>
			<template v-slot:imagePost>
				<ImagesPost />
			</template>
			<template v-slot:buttonCard>
				<ButtonsCard />
			</template>
		</CardItem>

	</article>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	
	import ImagesPost from './ImagesPostCard.vue';
	import ButtonsCard from './ButtonLikeCommentShare.vue';

	const CardItem = defineAsyncComponent(() => 
		import('./CardItem.vue')
	);

	export default {
		components: {
			CardItem,
			ImagesPost,
			ButtonsCard
		},
	}
</script>