<template>
  <section class="mt-4 w-full">
    <div class="scrollbar-thin overflow-x-scroll scrollbar-thumb-rounded">
      <div class="flex flex-row w-max gap-x-3">
        <div v-for="review in reviews" :key="review" class="bg-white w-52 h-44 rounded-lg shadow-md px-4 py-3">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-white shadow rounded-full">

            </div>
            <div class="flex flex-col mx-3 leading-tight">
              <h3 class="">
                {{ review.name }}
              </h3>
              <div class="flex items-center mt-1">
                <span class="iconify text-yellow-400" data-icon="ant-design:star-filled"></span>
                <span class="iconify text-yellow-400" data-icon="ant-design:star-filled"></span>
                <span class="iconify text-yellow-400" data-icon="ant-design:star-filled"></span>
                <span class="iconify text-yellow-400" data-icon="ant-design:star-filled"></span>
                <span class="iconify text-gray-400" data-icon="ant-design:star-filled"></span>
              </div>
            </div>
          </div>
          <p class="text-xs mt-5 text-gray-800">
            {{ review.message }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "user-review",
  setup() {
    const reviews = reactive([
      { name: "Andi", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem, quisquam magnam, numquam tempora debitis at labore." },
      { name: "Cok", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem, quisquam magnam, numquam tempora debitis at labore." },
      { name: "Ahayyy", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem, quisquam magnam, numquam tempora debitis at labore." }
    ])

    return {
      reviews
    }
  }
}
</script>