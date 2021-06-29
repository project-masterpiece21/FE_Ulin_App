<template>
	<header class="fixed top-0 2xl:container z-10 w-full">
		<div class="flex w-full justify-between px-4 items-center py-4 bg-gray-100 ">

			<a href="/" class="xl:ml-2 xl:mb-2 xl:w-28 h-9 w-28 mb-1">
				<img src="../../assets/img/logo/logo.png" alt="logo-ulin">
			</a>


			<div class="2xl:container flex items-center w-full justify-end">

				<div class="md:block hidden flex items-center border-r-2 mr-9">
					<router-link to="/" class="px-4 font-semibold text-base text-gray-800 hover:text-yellow-500">
						Kategori
					</router-link>

					<router-link to="/" class="focus:ring ring-yellow-300 hover:bg-yellow-500 hover:text-white hover:shadow py-2 px-7 rounded mr-11 bg-yellow-200 text-yellow-700 font-semibold">
						Dashboard
					</router-link>
				</div>

				<!-- Nav -->
				<div class="flex items-center">
					<router-link to="/" class="md:block hidden">
						<button name="profile" class="group h-9 w-9 md:h-10 md:w-10 rounded-full shadow focus:outline-none mr-2 bg-white">
							<span class="iconify group-hover:text-yellow-500 text-gray-600 text-base md:text-xl mx-auto" data-icon="bx:bx-search-alt" data-inline="false"></span>
						</button>
					</router-link>

					<router-link to="#">
						<button name="message" class="relative group h-9 w-9 md:h-10 md:w-10 rounded-full shadow focus:outline-none mr-2 bg-white">

							<span class="flex h-3 w-3 top-0 right-0 absolute">
								<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
								<span class="inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
							</span>

							<span class="iconify group-hover:text-yellow-500 text-sm md:text-lg text-yellow-500 mx-auto" data-icon="whh:notificationbottom" data-inline="false"></span>
						</button>
					</router-link>

					<router-link to="/">
						<button name="profile" class="group h-9 w-9 md:h-10 md:w-10 rounded-full shadow focus:outline-none bg-white">
							<span class="iconify group-hover:text-yellow-500 text-gray-600 text-base md:text-xl mx-auto" data-icon="bx:bxs-user" data-inline="false"></span>
						</button>
					</router-link>
				</div>
				<!-- Nav -->

			</div>
		</div>
	</header>
</template>
