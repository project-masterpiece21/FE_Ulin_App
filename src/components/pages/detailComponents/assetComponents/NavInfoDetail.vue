<template>
	<section class="flex justify-between w-full items-center my-5">
		<a href="#info_detail" class="group w-full block py-2 px-3 text-center text-sm">
			<button class="flex mx-auto items-center focus:outline-none">
				<span class="iconify mr-1 md:text-xl sm:text-lg text-base md:mr-2 group-hover:text-yellow-500" data-icon="uil:layer-group" data-inline="false"></span>

				<div class="md:text-xl sm:text-base md:font-medium group-hover:text-yellow-500">	
					Detail info
				</div>

			</button>
		</a>

		<a href="#review_list" class="group text-sm w-full block py-2 px-3 text-center border-l-2 border-r-2">
			<button class="flex mx-auto items-center focus:outline-none">
				<span class="iconify mr-1 md:text-xl sm:text-lg text-base md:mr-2 group-hover:text-yellow-500" data-icon="bx:bx-message-square-detail" data-inline="false"></span>
				<div class="md:text-xl sm:text-base md:font-medium group-hover:text-yellow-500">
					Review
				</div>
			</button>
		</a>

		<div class="group w-full block py-2 px-3 text-center text-sm">
			<button class="flex mx-auto items-center focus:outline-none">
				<span class="iconify mr-1 group-hover:text-red-600 md:text-xl sm:text-lg text-base md:mr-2" data-icon="ri:user-heart-line" data-inline="false"></span>
				<div class="md:text-xl sm:text-base md:font-medium group-hover:text-red-600">
					Ikuti
				</div>
			</button>
		</div>
	</section>
</template>