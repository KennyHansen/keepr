<template>
  <div class="Navbar black white-text">
  <div v-if="loading">
    <h2>Loading</h2>
  </div>

  <div v-else>
    <div v-if="user.name">
        Welcome, {{user.name}}
        <a @click="logout">Logout</a>
    </div>
    <ul v-else>
       <li><router-link to="login">Login</router-link></li>
       <li><router-link to="register">Register</router-link></li>
    </ul>
  </div>



  </div>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    this.$root.store.actions.authenticate()
  },
  computed: {
      loading() {
          return this.$root.store.state.isLoading
      },
      user() {
          return this.$root.store.state.user
      }
  }, 
  methods: {
      logout() {
        this.$root.store.actions.logout()
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
