<template>
	<section class="flex justify-between w-full items-center mt-4 mb-5">
		<a href="#info_detail" class="group w-full block py-2 px-3 text-center text-sm">
			<button class="flex mx-auto items-center focus:outline-none">
				<span class="iconify mr-1 text-base group-hover:text-yellow-500" data-icon="uil:layer-group" data-inline="false"></span>

				<div class="group-hover:text-yellow-500">	
					Detail info
				</div>

			</button>
		</a>

		<a href="#review_list" class="group text-sm w-full block py-2 px-3 text-center border-l-2 border-r-2">
			<button class="flex mx-auto items-center focus:outline-none">
				<span class="iconify mr-1 text-base group-hover:text-yellow-500" data-icon="bx:bx-message-square-detail" data-inline="false"></span>
				<div class="group-hover:text-yellow-500">
					Review
				</div>
			</button>
		</a>

		<div class="group w-full block py-2 px-3 text-center text-sm">
			<button class="flex mx-auto items-center focus:outline-none">
				<span class="iconify mr-1 group-hover:text-red-600 text-base" data-icon="ri:user-heart-line" data-inline="false"></span>
				<div class="group-hover:text-red-600">
					Ikuti
				</div>
			</button>
		</div>
	</section>
</template>