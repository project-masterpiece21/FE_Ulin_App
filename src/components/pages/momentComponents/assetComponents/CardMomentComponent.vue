<template>
	<article>

		<CardItem>
			<template v-slot:imagePost>
				<ImagesPostComponent />
			</template>
			<template v-slot:buttonCard>
				<ButtonsCardComponent />
			</template>
		</CardItem>

	</article>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	
	import ImagesPostComponent from './ImagesPostCardComponent.vue';
	import ButtonsCardComponent from './ButtonLikeCommentShareComponent.vue';

	const CardItem = defineAsyncComponent(() => 
		import('./CardItem.vue')
	);

	export default {
		components: {
			CardItem,
			ImagesPostComponent,
			ButtonsCardComponent
		},
	}
</script>