<template>
	<nav class="sm:hidden absolute flex justify-between items-center w-full top-0 p-3">
			<div class="bg-black rounded-full bg-opacity-50">
				<button @click="hasHistory() ? $router.go(-1) : $router.push('/')"
					type="button"
					name="back-button"
					class="xs:h-10 xs:w-10 h-8 w-8 focus:outline-none"
				>
					<span class="iconify mx-auto xs:text-lg text-white"
						data-icon="bx:bxs-left-arrow" data-inline="false">
					</span>
				</button>
			</div>

			<div class="flex">
				<div class="bg-black rounded-full bg-opacity-50 mr-2">
					<button type="button" name="menu-button" class="xs:h-10 xs:w-10 h-8 w-8 focus:outline-none">
						<span class="iconify mx-auto text-white xs:text-2xl text-lg" 
							data-icon="carbon:overflow-menu-vertical" data-inline="false">
						</span>
					</button>
				</div>

				<div class="bg-black rounded-full bg-opacity-50">
					<router-link to="/">
						<button type="button" name="search-button" class="xs:h-10 xs:w-10 h-8 w-8 focus:outline-none">
							<span class="iconify mx-auto text-white xs:text-2xl text-lg" 
								data-icon="bx:bx-search-alt" data-inline="false">
							</span>
						</button>
					</router-link>
				</div>
			</div>
		</nav>
</template>

<script>
export default {
	setup() {
		const hasHistory = () => {
			return window.history.length > 2;
		};

		return { hasHistory }
	}
}
</script>