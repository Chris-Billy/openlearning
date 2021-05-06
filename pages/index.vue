<template>
  <NuxtLink to="/home">HOME</NuxtLink>
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
