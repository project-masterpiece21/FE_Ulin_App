<template>
  <user-main />
</template>

<script>
import { defineAsyncComponent } from 'vue';

const UserMain = defineAsyncComponent(() =>
  import('../pages/userComponents/UserMain.vue')
);

export default {
  name: 'User-profile',
  components: {
    UserMain
  },
  setup() {
    
  },
}
</script>