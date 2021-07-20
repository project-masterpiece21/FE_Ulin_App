<template>
	<div :class="dropdown ? 'block' : 'hidden'" class="absolute top-20 right-0 w-full bg-white h-screen z-30">
		wkwkwkwk
	</div>
</template>

<script>
	import { ref } from 'vue';
	export default {
		setup () {
			const dropdown = ref(false);

			return { dropdown }
		}
	}
</script>