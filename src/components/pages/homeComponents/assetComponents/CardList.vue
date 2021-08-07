<template>
  <article class="grid md:grid-cols-2 gap-5 w-full mt-5 mb-20 px-4">
    <CardItem 
      v-for="(place, index) in places" 
      :key="index" 
      :id="place.id"
      :name="place.name"
      :description="places.description"
      :image="place.image"
      :province="place.province"
      :city="place.city"
      :address="place.address"
    />
  </article>
</template>

<script>
export default {
  name: "card-list",
  props: ["places"],
}
</script>
