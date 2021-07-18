<template>
	<div class="hidden md:block">
		<div class="flex items-center">
			<router-link to="/signup">
				<div class="mr-4 bg-yellow-500 lg:py-2 py-1.5 lg:px-8 px-7 rounded text-white font-semibold hover:bg-yellow-400">
					Daftar
				</div>
			</router-link>
			<router-link to="/login">
				<div class="mr-4 lg:py-2 py-1.5 lg:px-8 px-7 rounded font-medium border-2 hover:border-yellow-400 hover:text-yellow-500">
					Masuk
				</div>
			</router-link>
		</div>
	</div>

	<button class="md:hidden">
		<span class="iconify mx-auto text-3xl" data-icon="bytesize:menu" data-inline="false"></span>
	</button>
</template>