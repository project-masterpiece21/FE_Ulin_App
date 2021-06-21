<template>
	<router-link to="/detail" class="w-full bg-white rounded-2xl overflow-hidden border cursor-pointer shadow-md hover:shadow-xl">
			<div>
				<figure class="flex-shrink-0">
					<img
						class="md:h-52 sm:h-60 h-52 w-full object-cover"
						src="https://images.unsplash.com/photo-1614773305142-260aa1658982?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80"
						alt="Man looking at item at a store"
					/>
				</figure>

				<div class="px-4 sm:py-4 py-3">
					<div class="flex justify-between overflow-ellipsis overflow-hidden">

						<div>
							<div class="tracking-wide text-xs text-yellow-400 font-semibold flex items-center block">
								<span class="iconify mr-1 md:mr-1.5 sm:text-base text-sm" data-icon="mdi:human-greeting" data-inline="false"></span>
								Rekomendasi pengunjung
							</div>

							<router-link to="/detail" class="block mt-1 sm:text-base text-sm leading-tight font-semibold text-black">
								Penyaweuan, Majalengka
							</router-link>
						</div>

						<div class="flex-rows items-center text-yellow-400">
							<div class="flex-rows">
								<div class="md:text-lg text-center sm:text-base text-sm font-semibold">
									8.5
								</div>
							</div>

							<div class="flex items-center">
								<span class="iconify text-base md:text-base md:mr-1" data-icon="fluent:thumb-like-20-filled" data-inline="false"></span>
								<div class="sm:text-sm md:text-sm text-xs">
									Like
								</div>
							</div>
						</div>
					</div>

					<div>
						<p class="sm:mt-2 mt-1 sm:text-base text-xs text-gray-500">
							Getting a new business off the ground is a lot of hard
							work. Here are five ideas you can use to find your first
							customers.
						</p>
					</div>

				</div>
			</div>
	</router-link>
</template>