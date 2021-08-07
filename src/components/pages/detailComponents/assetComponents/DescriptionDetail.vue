<template>
	<section class="my-6">
		<div class="lg:text-2xl xs:text-xl text-lg font-semibold w-full">
			{{`Tentang ${name}`}}
		</div>

		<div class="
			lg:text-lg 
			xs:text-base 
			mt-2 
			font-medium 
			text-sm 
			leading-relaxed 
			text-gray-700"
		>
			{{ description }}
		</div>
	</section>
</template>

<script>
export default {
	name: 'detail-description',
	props: [ 'description', 'name' ],
}
</script>