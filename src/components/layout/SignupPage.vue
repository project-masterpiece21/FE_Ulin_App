<template>
  <div class="relative min-h-screen sm:bg-gradient-to-b from-yellow-100 to-yellow-300 flex justify-center items-center">
    <div class="sm:w-96 w-80 rounded-lg bg-white shadow-xl py-12">
      <div class="w-full px-10">
        <h1 class="text-2xl font-semibold text-gray-900">Daftar akun baru</h1>

        <form @submit.prevent="signupUser" class="mt-14" autocomplete="off">

          <!-- Username -->
          <div :class="{ error: v$.username.$error.length }" class="relative">
            <label for="username" class="absolute -top-4 text-sm text-gray-600 font-medium">Nama lengkap</label>

            <input v-model="v$.username.$model" id="username" name="username" type="text" class="peer h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:border-yellow-500 font-medium" placeholder="Masukan nama lengkap" />

            <div class="input-errors text-xs text-red-600 pt-1" v-for="error of v$.username.$errors" :key="error">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>

          <!-- Email -->
          <div :class="{ error: v$.email.$error.length }" class="mt-7 relative">
            <label for="email" class="absolute -top-4 text-sm text-gray-600 font-medium">Email</label>

            <input v-model="v$.email.$model" id="email" name="email" type="email" class="peer h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:border-yellow-500 font-medium" placeholder="Masukan email" />

            <div class="input-errors text-xs text-red-600 pt-1" v-for="error of v$.email.$errors" :key="error">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>

          <!-- Password -->
          <div :class="{ error: v$.password.$error.length }" class="mt-7 relative">
            <label for="password" class="absolute -top-4 text-sm text-gray-600 font-medium" >Password</label>

            <input v-model="v$.password.$model" id="password" type="password" name="password" class="h-10 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:border-yellow-500 font-medium" placeholder="Masukan Password" />

            <div class="input-errors text-xs text-red-600 pt-1" v-for="error of v$.password.$errors" :key="error">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>

          <button :disabled='this.v$.$invalid' type="sumbit" class="mt-12 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-1 focus:ring-yellow-500 focus:ring-opacity-80 cursor-pointer">
            Daftar akun
          </button>
        </form>

        <div class="mt-5 w-full mx-auto">
          <span class="text-xs mx-auto flex justify-center text-gray-500 my-4">Atau daftar menggunakan</span>

          <button class="w-full py-1 bg-gray-200 rounded-xl focus:outline-none focus:ring-1 ring-yellow-400 hover:bg-yellow-200 sm:mt-0 mt-2">
            <div class="w-full mx-auto flex justify-center items-center py-1">
              <span class="iconify text-xl" data-icon="flat-color-icons:google" data-inline="false"></span>
              <span class="ml-2 sm:text-base text-sm font-medium text-gray-500">Google</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <modal-alert v-show="checkEmail"> 
        <template #text-alert>
          <h2 class="break-words w-full sm:px-12 px-20 sm:text-base text-sm">
            Email sudah pernah digunakan sebelumnya
          </h2>


          <button @click="closeButton()" name="button close" class="px-10 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full font-semibold text-white border-2 border-white shadow">
            Tutup
          </button>
        </template>
      </modal-alert>
    </transition>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import useVueValidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

export default {
  setup() {
    const store = useStore();

    const payload = reactive({
      username: '',
      email: '',
      password: ''
    });

    const rules = computed(() => {
      const localRules = {
        username: { 
          required: helpers.withMessage('Nama lengkap harus diisi ya :)', required)
        },
        email: { 
          required: helpers.withMessage('Email harus diisi ya :)', required), 
          email: helpers.withMessage('Diisi pakai email ya :)', email) 
          },
        password: { 
          required: helpers.withMessage('Password harus diisi ya :)', required), 
          minLength: helpers.withMessage('Password harus 6 karakter', minLength(6)) }
      }

      return localRules;
    });

    const v$ = useVueValidate(rules, payload);
    
    const signupUser = () => {
      store.dispatch('signupUser/postRegister', payload)
    };

    const checkEmail = computed(() => {
      const checkEmailExist = store.getters['signupUser/getEmailStatus'];

      return checkEmailExist;
    });

    const closeButton = () => {
      store.commit('signupUser/setEmailFalse');
    }

    return {
      v$,
      payload,
      signupUser,
      checkEmail,
      closeButton
    }
  },
}
</script>