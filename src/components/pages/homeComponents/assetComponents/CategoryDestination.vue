<template>
  <section class="md:hidden px-4 w-full my-6 py-3">
    <div class="scrollbar-thin overflow-x-scroll scrollbar-thumb-rounded">
      <div class="flex flex-row w-max">
        <div
          v-for="(category, index ) in categories"
          :key="index"
          class="group flex flex-col items-center mr-8">
            <button
              class="
                group-hover:bg-yellow-100
                sm:h-14
                sm:w-14
                h-12
                w-12
                bg-gray-200
                rounded-full
              "
            >
              <img
                :src="category.icon"
                alt="category.name"
                class="sm:h-9 sm:w-9 w-8 h-8 mx-auto"
              />
            </button>
            <span class="mx-auto xs:text-xs text-xss mt-1.5 truncate"
              >{{category.name}}</span
            >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: "category-place",
  setup() {
    const categories = reactive([
      { name: 'Pantai', icon: 'icon_category/beach.png' },
      { name: 'Camping', icon: 'icon_category/camp.png' },
      { name: 'Pegunungan', icon: 'icon_category/mountain.png' },
      { name: 'Muncak', icon: 'icon_category/tracking.png' },
      { name: 'Water Park', icon: 'icon_category/pool.png' },
      { name: 'Kuliner', icon: 'icon_category/culinary.png' },
    ]);

    return { categories }
  }
}
</script>
