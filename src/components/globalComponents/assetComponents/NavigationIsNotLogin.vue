<template>
	<div class="hidden lg:block">
		<div class="flex items-center font-medium text-base">
			<slot></slot>

			<router-link to="/signup">
				<h1 class="mr-4 py-1 lg:px-8 px-7 rounded-2xl shadow-md text-yellow-700 font-semibold bg-yellow-300 hover:bg-yellow-200">
					Daftar
				</h1>
			</router-link>
			<router-link to="/login">
				<h1 class="py-1 lg:px-8 px-7 bg-white rounded-2xl shadow font-medium hover:shadow-md hover:text-yellow-600 hover:font-semibold">
					Masuk
				</h1>
			</router-link>
		</div>
	</div>

	<button class="lg:hidden">
		<span class="iconify mx-auto text-3xl" data-icon="bytesize:menu" data-inline="false"></span>
	</button>
</template>