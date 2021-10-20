<template>
  <div class="absolute py-12 w-96 bg-white text-center shadow-xl rounded-xl border-2 border-yellow-400">
    <div class="flex flex-col items-center justify-center gap-y-14 sm:gap-y-20">

      <slot name="text-alert"></slot>

      <button name="button close" class="px-10 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full font-semibold text-white border-2 border-white shadow">
        Tutup
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      
      return {

      }
    }
  }
</script>