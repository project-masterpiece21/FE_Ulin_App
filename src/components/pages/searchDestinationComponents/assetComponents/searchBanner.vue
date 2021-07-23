<template>
  <div class="relative">
    <img
      src="/src/assets/img/bg-search/bg-search3.jpg"
      alt=""
      class="w-full md:h-80 h-64 object-cover sm:rounded-md"
    />
    <div
      class="
        absolute
        md:inset-y-48
        inset-y-40 inset-x-0
        xl:px-52
        lg:px-42
        md:px-36
        sm:px-24
        px-12
      "
    >
      <form action="" class="w-full flex items-center">
        <input
          type="search-destination"
          name="search-destination"
          id="search-destination"
          class="
            lg:py-3
            sm:py-2
            py-1.5
            px-4
            mx-auto
            focus:outline-none
            rounded-full
            w-full
            mr-3
            shadow-lg
          "
          placeholder="Cari tempat kesukaanmu"
        />
        <button
          type="submit"
          class="
            sm:py-2
            py-1.5
            px-4
            bg-yellow-400
            rounded-full
            hover:bg-yellow-500
            shadow-xl
          "
        >
          <span
            class="iconify mx-auto text-2xl text-white"
            data-icon="bx:bx-search-alt"
            data-inline="false"
          ></span>
        </button>
      </form>
    </div>
  </div>
</template>
