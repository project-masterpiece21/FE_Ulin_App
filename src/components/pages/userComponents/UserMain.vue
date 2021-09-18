<template>
  <background-profile>
  </background-profile>
  <user-profile />
</template>

<script>
import BackgroundProfile from './assetComponents/BackgroundProfile.vue';
import UserProfile from './assetComponents/UserProfile.vue';

export default {
  name: 'user-pages',
  components: {
    BackgroundProfile,
    UserProfile
  },
  setup() {
    
  },
}
</script>