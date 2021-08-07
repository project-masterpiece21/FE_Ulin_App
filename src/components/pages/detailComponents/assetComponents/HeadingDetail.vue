<template>
	<div class="my-4">
		<h1 class="
			md:text-2xl 
			sm:text-xl 
			text-lg 
			font-semibold 
			w-full block 
			mr-4 
			leading-tight"
		>
				{{ name }}
		</h1>

		<button class="flex items-center rounded-lg focus:outline-none mt-2">
			<span class="iconify sm:text-xl text-lg mr-1 text-yellow-500" data-icon="fluent:thumb-like-16-filled" data-inline="false"></span>
			
			<div class="md:text-lg sm:text-sm text-xs font-semibold pr-1 text-yellow-500">
				Rekomendasi kami	
			</div>
		</button>

		<p class="mt-2 md:text-lg text-sm text-gray-700 font-medium">
			{{ `${address} ${city} ${province}` }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'heading-detail',
	props: [ 'name', 'address', 'city', 'province' ]
}
</script>