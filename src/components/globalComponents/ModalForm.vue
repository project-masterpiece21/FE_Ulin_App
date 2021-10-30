<template>
  <aside class="absolute inset-0 z-40 w-full h-screen">
    <div class="relative">
      <div :onclick="closeForm" class="absolute left-0 w-full h-screen bg-black opacity-25">

      </div>
      <div class="absolute top-2 left-1/3 z-50 bg-white h-64 w-1/3 rounded-md">
        <form class="p-4" method="post">
          <textarea type="text" name="" placeholder="Moment" class="w-full focus:outline-none bg-gray-100 p-2 rounded-md"></textarea>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    const closeForm = () => {
      store.commit('modalForm/setFalseModal');
    }
    return {
      closeForm
    }
  }
}
</script>
