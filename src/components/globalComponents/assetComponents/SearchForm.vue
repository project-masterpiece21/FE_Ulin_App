<template>
  <form class="w-full text-sm lg:pb-5 lg:px-0 px-4">
    <div class="relative overflow-hidden">
      <input
        type="search"
        name="search"
        class="
          focus:border-2 focus:border-yellow-500
          pl-6
          lg:pr-10
          pr-12
          focus:outline-none
          border
          lg:py-2.5
          py-2
          rounded-xl
          w-full
          truncate
        "
        placeholder="Cari tempat destinasi wisata, tempat nongkrong, caffe"
      />

      <button
        type="submit"
        class="
          absolute
          right-0
          inset-y-0
          my-1
          mr-1
          lg:px-4
          px-3
          text-2xl
          hover:bg-gradient-to-b
        hover:from-yellow-300
        hover:to-yellow-500
          text-white
          bg-gradient-to-b
        from-yellow-300
        to-yellow-400
          rounded-lg
        "
      >
        <span
          class="iconify"
          data-icon="bx:bx-search-alt"
          data-inline="false"
        ></span>
      </button>
    </div>
  </form>

  <slot></slot>
</template>