<template>
	<aside class="sticky top-20 rounded-lg w-full h-full">
		<SearchRank />
		<OwnerRank />
		<TagRank />
	</aside>	
</template>


<script>
	import SearchRank from './SearchRankComponent.vue';
	import OwnerRank from './OwnerRankComponent.vue';
	import TagRank from './TagRankComponent.vue';
	export default {
		components: {
			SearchRank,
			OwnerRank,
			TagRank
		}
	}
</script>