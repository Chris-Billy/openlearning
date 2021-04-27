<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">openlearning</h1>
      <h2>La plus grande école du monde</h2>
      <div>
        <br />
        <br />
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.id }} - {{ user.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // Appel ajax simple via axios à notre api backend express
    const users = await $axios.$get('/users')
    return {
      users,
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
