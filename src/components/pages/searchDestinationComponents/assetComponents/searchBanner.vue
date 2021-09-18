<template>
  <div class="relative">
    <div
      class="
        lg:aspect-w-7 lg:aspect-h-2
        md:aspect-w-6 md:aspect-h-2
        sm:aspect-w-5 sm:aspect-h-2
        aspect-w-4 aspect-h-2
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
        sm:bottom-10
        xs:bottom-14
        bottom-9
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
            flex-1
            focus:ring
            ring-yellow-500
            md:text-base
            xs:text-sm
            text-xss
            lg:py-3
            py-2
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
            flex-shrink-0
            focus:ring focus:ring-offset-2
            ring-yellow-500
            lg:py-3
            py-2
            sm:px-4
            px-2
            bg-yellow-400
            rounded-full
            hover:bg-yellow-500
            shadow-xl
          "
        >
          <span
            class="iconify mx-auto sm:text-2xl text-xl text-white"
            data-icon="bx:bx-search-alt"
            data-inline="false"
          ></span>
        </button>
      </form>
    </div>
  </div>
</template>
