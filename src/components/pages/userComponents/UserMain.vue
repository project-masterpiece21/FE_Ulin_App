<template>
  <!-- Top Navbar -->
  <keep-alive>
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
  </keep-alive>

  <section class="xl:ml-64 lg:ml-32 md:ml-28 sm:ml-24 lg:mt-36 mt-24 sm:mr-7">
    <user-profile />

    <ButtonNavigationMenu />
  </section>
</template>

<script>
import UserProfile from './assetComponents/UserProfile.vue';
import ButtonNavigationMenu from './assetComponents/ButtonNavigationMenu.vue';

export default {
  name: 'user-pages',
  components: {
    ButtonNavigationMenu,
    UserProfile,
  },
  setup() {

  },
}
</script>
