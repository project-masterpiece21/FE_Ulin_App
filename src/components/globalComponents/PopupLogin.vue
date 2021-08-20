<template>
  <section
    v-if="credensial !== true"
    class="
      hidden
      md:block
      fixed
      bottom-8
      xl:right-10
      right-5
      h-44
      w-80
      bg-white
      shadow-2xl
      z-50
      rounded-lg
    "
  >
    <button @click="closePopup" name="close" class="group">
      <span
        class="iconify text-base mx-auto top-2 right-3 absolute group-hover:text-gray-600"
        data-icon="akar-icons:circle-x"
      ></span>
    </button>

    <div class="mx-6 flex flex-col">
      <span class="font-semibold text-lg">Selamat datang!</span>
      <span class="text-sm">Temukan inspirasi dan syurga tersembunyi</span>

      <div class="flex mt-5 items-center">
        <button
          name="login"
          class="
            bg-gradient-to-b
            from-yellow-400
            to-yellow-500
            hover:bg-gradient-to-b 
            hover:from-yellow-300 
            hover:to-yellow-400
            py-2
            px-3.5
            rounded-md
            text-sm
            font-bold
            text-white
          "
        >
          Login dengan Email
        </button>
        <button name="google" class="hover:shadow-md ml-3 border rounded-md py-2 px-2.5">
          <span
            class="iconify mx-auto"
            data-icon="flat-color-icons:google"
          ></span>
        </button>
        <button name="facebook" class="hover:shadow-md ml-3 border rounded-md py-2 px-2.5">
          <span class="iconify mx-auto" data-icon="logos:facebook"></span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore(); 

    onMounted(() => {
      localStorage.setItem('credensial', false);
    });

    const credensial = computed(() => {
      return store.getters.checkCredential
    });

    const closePopup = computed(() => {
      store.commit('setCredential');
    });

    return { credensial, closePopup }
  }
}
</script>