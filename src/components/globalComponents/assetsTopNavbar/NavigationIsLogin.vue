<template>
	<div class="flex items-center">

		<button :onclick="modalForm" name="form moment" class="hidden lg:block xl:mr-12 mr-5 px-6 xl:px-8 py-1.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-l hover:from-yellow-400 hover:to-yellow-400 transition duration-700 ease-in-out font-semibold text-white rounded-xl hover:shadow-md">
			Moment
		</button>

		<!-- Nav -->
		<div class="flex items-center">
			<router-link to="/" class="lg:hidden">
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

			<a href="/user/dasda">
				<button name="profile" class="group h-9 w-9 md:h-10 md:w-10 rounded-full shadow focus:outline-none bg-white">
					<span class="iconify group-hover:text-yellow-500 text-gray-600 text-base md:text-xl mx-auto" data-icon="bx:bxs-user" data-inline="false"></span>
				</button>
			</a>
		</div>
		<!-- Nav -->
	</div>

	<ModalForm v-if="isFromTrue" />
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
	setup() {
		const store = useStore();

		const modalForm = () => {
			store.commit('modalForm/setTrueModal');
		}

		const isFromTrue = computed(() => {
			return store.getters['modalForm/checkIsModal']
		})

		return {
			modalForm,
			isFromTrue
		}
	}
}
</script>
