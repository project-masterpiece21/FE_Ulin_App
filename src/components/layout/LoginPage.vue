<template>
	<div class="min-h-screen sm:bg-gradient-to-b from-yellow-100 to-yellow-300 flex justify-center items-center">
    <div class="sm:w-96 w-80 rounded-lg bg-white shadow-xl pt-12 pb-1">
      <div class="w-full px-10 pt-2 pb-7">
        <h1 class="text-2xl font-semibold text-gray-900">Masuk akun</h1>

        <form @submit.prevent="loginUser" class="mt-12">
          <div class="mt-7 relative">
            <label for="email" class="absolute -top-4 text-sm text-gray-600 font-medium">Email</label>

            <input v-model="payload.email" id="email" name="email" type="text" class="peer h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:border-yellow-500" placeholder="Masukan email" />
          </div>
          <div class="mt-7 relative">
            <label for="password" class="absolute -top-4 text-sm text-gray-600 font-medium">Password</label>

            <input v-model="payload.password" id="password" type="password" name="password" class="h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:border-yellow-500" placeholder="Masukan Password" />
          </div>

          <button type="sumbit" class="mt-12 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-1 focus:ring-yellow-500 focus:ring-opacity-80 cursor-pointer">
            Masuk ke akun
          </button>
        </form>

				<!-- login Oauth2 -->
        <div class="mt-5 w-full mx-auto">
          <span class="text-xs mx-auto flex justify-center text-gray-500 my-4">Atau masuk menggunakan</span>


          <div class="w-full sm:flex items-center mt-3">

            <button class="w-full py-1 focus:outline-none bg-gray-100 rounded-xl focus:ring-1 ring-yellow-400 mr-2 hover:bg-yellow-100">
              <div class="w-full mx-auto flex justify-center items-center py-1">
                <span class="iconify text-lg" data-icon="logos:facebook" data-inline="false"></span>
                <span class="ml-2 sm:text-base text-sm font-medium text-gray-500">Facebook</span>
              </div>
            </button>

            <button class="w-full py-1 bg-gray-100 rounded-xl focus:outline-none focus:ring-1 ring-yellow-400 hover:bg-yellow-100 sm:mt-0 mt-2">
              <div class="w-full mx-auto flex justify-center items-center py-1">
                <span class="iconify text-xl" data-icon="flat-color-icons:google" data-inline="false"></span>
                <span class="ml-2 sm:text-base text-sm font-medium text-gray-500">Google</span>
              </div>
            </button>

          </div>
        </div>

				<!-- Close login Oatuh2 -->
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
		const payload = reactive({
			email: '',
			password: ''
		});

		const loginUser = () => {
			store.dispatch('loginUser/postLogin', payload);
		}

		return {
			payload,
			loginUser
		}
  },
}
</script>
