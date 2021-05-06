<template>
  <div class="container">
    <div class="container_top">
      <Profile :nom="users[3].nom" :prenom="users[3].prenom" />
    </div>
    <div class="container_bottom">
      <CardPrebuild
        :CardTitle="'Lorem ipsum dolor sit ametLorem ipsum dolor sit amet'"
        :Percentage="'10%'"
      />
    </div>
    <Navigation />
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue'
import CardPrebuild from '@/components/Card.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'LoginPage',
  components: {
    Profile,
    CardPrebuild,
    Navigation
  },
  async asyncData({ $axios }) {
    // Appel ajax simple via axios à notre api backend express
    const users = await $axios.$get('/users')
    return {
      users
    }
  }
}
</script>

<style scoped>
/* div {
  background: rgb(117, 117, 117);
} */
@media only screen and (max-width: 500px) {
  .container {
    height: 100vh;
    width: 100vw;
    background: rgb(117, 117, 117);
  }
  .container_top {
    display: flex;
    height: 30%;
    width: 100vw;
  }
  .container_bottom {
    display: flex;
    height: 70%;
    justify-content: center;
    width: 100vw;
    background: #e6e6e6;
    border-radius: 30px 30px 0 0;
  }
}
</style>
