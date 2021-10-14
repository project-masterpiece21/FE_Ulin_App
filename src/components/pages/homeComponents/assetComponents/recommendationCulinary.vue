<template>
  <div class="md:mt-12 sm:mt-8 mt-7 sm:px-0 px-7">
    <div class="sm:text-sm text-xss font-medium">
      <div class="md:text-center">
        <h1 class="lg:text-2xl md:text-xl sm:text-lg text-base font-bold">
          Kuliner paling populer
        </h1>
        <span class="text-gray-500 lg:text-xl">Makanan khas paling banyak dicari pengunjung</span>
      </div>
      <div
        class="
          scrollbar-thin
          overflow-x-scroll
          scrollbar-thumb-rounded
          md:mt-10
          mt-3.5
          overflow-hidden
        "
      >
        <div class="flex flex-row w-max md:grid grid-cols-5 gap-4 md:w-full">
          <CardItem :destinations="culinary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import CardItem from "./cardItem.vue";

export default {
  props: [],
  components: {
    CardItem,
  },
  setup() {
    const culinary = reactive([
      {
        name: "Rendang",
        image:
          "https://images.unsplash.com/photo-1620700668269-d3ad2a88f27e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        place: "Surabaya",
      },
      {
        name: "Sate",
        image:
          "https://images.unsplash.com/photo-1520690594286-1aadf7e7af36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        place: "Bali",
      },
      {
        name: "Redang ayam",
        image:
          "https://images.unsplash.com/photo-1620700668269-d3ad2a88f27e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGZvb2QlMjBpbmRvbmVzaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        place: "Surabaya",
      },
      {
        name: "Grejeg udang",
        image:
          "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80",
        place: "Jawa Timur",
      },
      {
        name: "Sate gulai",
        image:
          "https://images.unsplash.com/photo-1603088549155-6ae9395b928f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        place: "Bandung",
      },
      {
        name: "Es buah",
        image:
          "https://images.unsplash.com/photo-1527786747587-f712769de1e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
        place: "Bali",
      },
      {
        name: "Siomay",
        image:
          "https://images.unsplash.com/photo-1587202029727-920dc30c05ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        place: "Bogor",
      },
      {
        name: "Rendang jengkol",
        image:
          "https://images.unsplash.com/photo-1622198678447-47d574f474e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        place: "Jakarta",
      },
      {
        name: "Kue Putu",
        image:
          "https://images.unsplash.com/photo-1567560953114-47d97e5aa422?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1481&q=80",
        place: "Jawa Tengah",
      },
      {
        name: "Spaghetti",
        image:
          "https://images.unsplash.com/photo-1612939684314-5dd23b244817?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        place: "Surakarta",
      },
    ]);

    return { culinary };
  },
};
</script>
