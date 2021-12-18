<template>
  <section class="relative">
    <div class="rounded-lg overflow-hidden xs:aspect-w-6 xs:aspect-h-3 aspect-w-5 aspect-h-3 w-full h-44">
      <img class="object-cover" v-lazy={src:image} :alt="image">
    </div>
    
    <slot name="button-like"></slot>
  </section>
</template>

<script>
  export default {
    props: ['image'],
    setup() {

    }
  }
</script>