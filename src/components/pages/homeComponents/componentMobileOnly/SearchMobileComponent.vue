<template>
	<div class="px-4 flex justify-between items-center pt-3">
		<div class="font-medium text-sm md:text-base text-gray-600 font-semibold">
			<p>Ayo main,</p>
			<p>bosen napa diem-diem bae</p>
		</div>

		<router-link to="/search"
			class="group md:w-28 h-9 w-30 border border-gray-200 rounded-lg flex items-center p-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent hover:border-yellow-500 bg-white shadow-sm"
		>	
			<span class="iconify text-gray-400 text-xl md:ml-2 mr-1 group-hover:text-yellow-500" data-icon="bx:bx-search-alt" data-inline="false"></span>
			<p class="text-base ml-1 text-gray-400 group-hover:text-yellow-500">
				Cari destinasi
			</p>
		</router-link>
	</div>
</template>