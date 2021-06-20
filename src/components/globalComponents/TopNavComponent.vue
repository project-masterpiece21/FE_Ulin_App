<template>
	<header class="xl:container w-full">
		<div class="md:fixed md:bg-white w-full left-0 flex justify-between px-4 items-center pt-7 pb-3 bg-gray-100 mr-10 z-10">

			<router-link to="/" class="md:hidden xl:w-28 h-9 w-20">
				<img src="../../assets/img/logo/logo.png" alt="logo-ulin">
			</router-link>


			<div class="flex items-center w-full justify-end">
				<router-link to="" class="md:block hidden px-4 font-semibold text-base text-gray-800 hover:text-yellow-500">
					Kategori
				</router-link>

				<div class="flex items-center">
					<router-link to="#">
						<button name="message" class="relative group h-9 w-9 md:h-11 md:w-11 rounded-full shadow focus:outline-none mr-2 bg-white">

							<span class="flex h-3 w-3 top-0 right-0 absolute">
								<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
								<span class="inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
							</span>

							<span class="iconify group-hover:text-yellow-500 text-sm md:text-lg text-yellow-500 mx-auto" data-icon="whh:notificationbottom" data-inline="false"></span>
						</button>
					</router-link>

					<router-link to="/login">
						<button name="profile" class="group h-9 w-9 md:h-11 md:w-11 rounded-full shadow focus:outline-none bg-white">
							<span class="iconify group-hover:text-yellow-500 text-gray-600 text-md md:text-xl mx-auto" data-icon="bx:bxs-user" data-inline="false"></span>
						</button>
					</router-link>
				</div>

			</div>
		</div>
	</header>
</template>
