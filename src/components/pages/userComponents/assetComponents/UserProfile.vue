<template>
  <aside class="md:flex items-center gap-x-10 lg:mt-44 md:mt-32 mt-24 justify-center mx-auto">

    <div class="sm:h-36 sm:w-36 w-28 shadow rounded-full md:mx-0 mx-auto border-4 border-white overflow-hidden">
      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="asdad">
    </div>


    <div class="flex flex-col md:gap-y-1">
      <div class="flex justify-center mt-4">
        <div class="flex flex-col items-center leading-5">
          <h1 class="font-semibold sm:text-2xl text-xl">Saepudin</h1>
          <p class="text-gray-600 sm:text-base text-sm">Orang yang suka gabut</p>
        </div>
      </div>

      <ShareButtonProfile />
    </div>
  </aside>
</template>

<script>
import ShareButtonProfile from './ShareProfileUser.vue';
  export default {
    components: {
      ShareButtonProfile
    }
  }
</script>
