<template>
  <ul class="mt-4 w-full flex overflow-y-auto snap-x gap-4 overflow-hidden">
    <li v-for="review in reviews" :key="review" class="flex-shrink-0 bg-white sm:h-60 sm:w-72 w-52 h-44 rounded-lg shadow-md sm:px-6 sm:py-5 px-4 py-3">
      <div class="flex items-center">
        <img class="sm:w-12 sm:h-12 w-10 h-10 flex-shrink-0 bg-white shadow rounded-full" :src="review.pic" alt=""/>
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
    </li>
  </ul>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "user-review",
  setup() {
    const reviews = reactive([
      { pic: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        name: "Andi Setiawan", 
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem, quisquam magnam, numquam tempora debitis at labore..." 
      },
      { pic: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        name: "Cok", 
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem, quisquam magnam, numquam tempora debitis at labore..."
      },
      { pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        name: "Ahayyy", 
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem, quisquam magnam, numquam tempora debitis at labore..."
      }
    ])

    return {
      reviews
    }
  }
}
</script>