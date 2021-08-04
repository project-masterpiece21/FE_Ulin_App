<template>
  <section class="xl:ml-56 md:ml-28 sm:ml-28 lg:mt-36 md:mt-24 mt-20 sm:mr-7">
    <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-1 w-full mb-20">
      <CardItem
        v-for="image in images"
        :key="image.name"
        :image="image.image"
        :alt="image.name"
      />
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";

import CardItem from "./assetsComponets/cardItem.vue";

export default {
  components: {
    CardItem,
  },
  setup() {
    const images = reactive([
      {
        name: "Pasar Wkwkwkw",
        image:
          "https://images.unsplash.com/photo-1549982150-1129eb6aa6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      },
      {
        name: "Curug Cipeteuy",
        image:
          "https://images.unsplash.com/photo-1565607984261-9b4670499ec1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=352&q=80",
      },
      {
        name: "Pulai Biawak",
        image:
          "https://images.unsplash.com/photo-1527437934671-61474b530017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
      {
        name: "Mandirancan Kuningan",
        image:
          "https://images.unsplash.com/photo-1549868372-88205efb2ea0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
      },
      {
        name: "Pantai Kejawenan",
        image:
          "https://images.unsplash.com/photo-1454551272232-16b9502430e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80",
      },
      {
        name: "Gedung BAT Cirebon",
        image:
          "https://images.unsplash.com/photo-1605798486087-36de29626515?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      },
      {
        name: "Terasering Penyaweuan",
        image:
          "https://images.unsplash.com/photo-1555071941-45994dc79d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      },
      {
        name: "Curug Baliho",
        image:
          "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      },
      {
        name: "Mandirancan Kuningan",
        image:
          "https://images.unsplash.com/photo-1537888056975-b1e66404c9d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      },
      {
        name: "Pantai Kejawenan",
        image:
          "https://images.unsplash.com/photo-1572240046450-775a7ef69386?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
      },
    ]);

    return { images };
  },
};
</script>
