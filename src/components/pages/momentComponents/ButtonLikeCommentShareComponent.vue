<template>
	<div class="flex mt-4">
		<button v-for="button in buttons" :key="button" class="flex items-center mr-8 focus:outline-none">
			<span class="iconify text-2xl text-gray-600 mr-2" :data-icon="button" data-inline="false"></span>
			<span>23</span>
		</button>
	</div>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		setup() {
			const buttons = reactive([
				'akar-icons:heart',
				'ant-design:comment-outlined',
				'ant-design:share-alt-outlined'
			]);
			return {
				buttons
			}
		}
	}
</script>