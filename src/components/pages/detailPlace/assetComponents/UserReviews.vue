<template>
  <section class="mt-4 w-full">
    <div class="scrollbar-thin overflow-x-scroll scrollbar-thumb-rounded">
      <div class="flex flex-row w-max gap-x-3">
        <div v-for="review in reviews" :key="review" class="bg-white sm:h-60 sm:w-72 w-52 h-44 rounded-lg shadow-md sm:px-6 sm:py-5 px-4 py-3">
          <div class="flex items-center">
            <div class="sm:w-12 sm:h-12 w-10 h-10 flex-shrink-0 bg-white shadow rounded-full">

            </div>
            <div class="flex flex-col mx-3 leading-tight truncate">
              <h3 class="font-medium sm:text-lg truncate">
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
          <p class="text-xs sm:text-base mt-5 text-gray-800">
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
      { name: "Andi sdsadsadsdsadsadsadsadsadsdsadad", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem, quisquam magnam, numquam tempora debitis at labore..." },
      { name: "Cok", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem, quisquam magnam, numquam tempora debitis at labore..." },
      { name: "Ahayyy", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem, quisquam magnam, numquam tempora debitis at labore..." }
    ])

    return {
      reviews
    }
  }
}
</script>