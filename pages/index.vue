<template>
  <div>
    <NuxtLink to="/home">HOME</NuxtLink>
    <NuxtLink to="/logIn">Connexion</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // Appel ajax simple via axios à notre api backend express
    const users = await $axios.$get('/users')
    return {
      users
    }
  }
}
</script>
