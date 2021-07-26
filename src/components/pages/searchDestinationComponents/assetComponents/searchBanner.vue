<template>
  <div class="relative">
    <div
      class="
        lg:aspect-w-7 lg:aspect-h-2
        md:aspect-w-6 md:aspect-h-2
        aspect-w-5 aspect-h-2
      "
    >
      <img
        src="/src/assets/img/bg-search/bg-search3.jpg"
        alt=""
        class="object-cover sm:rounded-md"
      />
    </div>
    <div
      class="
        absolute
        lg:bottom-14
        md:bottom-12
        sm:bottom-9
        bottom-7
        inset-x-0
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
            focus:ring
            ring-yellow-500
            md:text-base
            text-sm
            lg:py-3
            sm:py-2
            py-1.5
            px-5
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
            focus:ring focus:ring-offset-2
            ring-yellow-500
            lg:py-3
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
