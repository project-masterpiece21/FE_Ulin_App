<template>
  <TopNavbar >
    <template v-slot:top-navigation>
      <top-side-navbar />
    </template>
    
    <template v-slot:search-form>
      <search-form>
        <popular-search />
      </search-form>
    </template>
  </TopNavbar>

  <main class="mt-24 md:mt-36 w-full h-full sm:px-10 md:px-14 lg:px-16 xl:px-28 mb-44">
    <div class="flex flex-col items-center mx-auto w-full">
      <div class="w-32 md:w-44">
        <img src="/logo.png" alt="Logo Ulin">
      </div>
      
      <h1 class="mt-9 font-semibold text-xl">Tentang kami</h1>

      <p class="mt-4 mx-auto px-4 font-medium text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab doloribus consectetur facere cumque qui, tempora consequatur neque error illo eveniet et quis asperiores! Aperiam possimus voluptatem ipsum animi aliquid.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 flex justify-center mt-12 items-center">
      <div class="flex flex-col items-center">
        <div class="relative w-48 h-48 bg-white rounded-full shadow overflow-hidden">
          <img src="/Saepudin.jpg" alt="Edwina" class="absolute -top-5 -right-0">
        </div>

        <h1 class="mt-5 font-semibold text-lg">Agung Saepudin</h1>
        <h2 class="mt-1">Founder</h2>
      </div>

      <div class="flex flex-col items-center">
        <div class="relative w-48 h-48 bg-white rounded-full shadow overflow-hidden">
          <img src="/Edwina.jpg" alt="Edwina" class="absolute -top-12 -right-0">
        </div>

        <h1 class="mt-5 font-semibold text-lg">Edwina Ayu Christy</h1>
        <h2 class="mt-1">Co-Founder & Product Manager</h2>
      </div>

      <div class="flex flex-col items-center">
        <div class="relative w-48 h-48 bg-white rounded-full shadow overflow-hidden">
          <img src="/Alvin.jpeg" alt="Edwina" class="absolute w-96 h-96 -top-28 -right-0 object-cover">
        </div>

        <h1 class="mt-5 font-semibold text-lg">Alvin Immanuel Simbolon</h1>
        <h2 class="mt-1">CTO & Co-Founder</h2>
      </div>

      <div class="flex flex-col items-center">
        <div class="relative w-48 h-48 bg-white rounded-full shadow overflow-hidden">
          <img src="/Arnoud.jpeg" alt="Edwina" class="absolute -top-12 -right-0 object-cover">
        </div>

        <h1 class="mt-5 font-semibold text-lg">Arnoud Reinhardt OS</h1>
        <h2 class="mt-1">Co-Founder</h2>
      </div>
    </div>
  </main>
</template>