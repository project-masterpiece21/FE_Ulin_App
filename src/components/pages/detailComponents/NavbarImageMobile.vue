<template>
	<nav class="sm:hidden absolute flex justify-between items-center w-full top-0 p-3">
			<div class="bg-black rounded-full bg-opacity-50">
				<button class="h-10 w-10 focus:outline-none">
					<span class="iconify mx-auto text-lg text-white" data-icon="bx:bxs-left-arrow" data-inline="false"></span>
				</button>
			</div>

			<div class="flex">
				<div class="bg-black rounded-full bg-opacity-50 mr-2">
					<button class="h-10 w-10 focus:outline-none">
						<span class="iconify mx-auto text-white text-2xl" data-icon="carbon:overflow-menu-vertical" data-inline="false"></span>
					</button>
				</div>

				<div class="bg-black rounded-full bg-opacity-50">
					<router-link to="/">
						<button class="h-10 w-10 focus:outline-none">
							<span class="iconify mx-auto text-white text-2xl" data-icon="bx:bx-search-alt" data-inline="false"></span>
						</button>
					</router-link>
				</div>
			</div>
		</nav>
</template>