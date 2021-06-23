<template>
	<div class="flex mt-4">
		<button v-for="button in buttons" :key="button" class="group flex items-center sm:mr-8 mr-5 focus:outline-none">
			<span class="iconify group-hover:text-yellow-500 sm:text-2xl text-xl text-gray-600 mr-2" :data-icon="button" data-inline="false"></span>
			<span class="group-hover:text-yellow-500">23</span>
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