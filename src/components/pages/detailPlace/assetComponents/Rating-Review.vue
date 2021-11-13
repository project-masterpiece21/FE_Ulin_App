<template>
  <section class="mt-4">
    <div class="text-medium text-gray-800">
      <h1>Rating dan Reviews</h1>

      <div class="mt-3 flex items-center">
        <span class="iconify text-yellow-400 text-3xl" data-icon="ant-design:star-filled"></span>
        <span class="text-xl font-semibold mx-2">8.5</span>
        <span>(76 reviews)</span>
      </div>
    </div>

    <slot name="review-users"></slot>
  </section>
</template>