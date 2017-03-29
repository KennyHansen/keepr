<template>
  <nav class="Navbar black white-text">
  
  <div v-if="loading == true">
    <p>Loading</p>
  </div>

  <div v-else>
    <div v-if="user.name">
        Welcome, {{user.name}}!
        <a class="blue-text" href="#" @click="logout">Logout</a>
    </div>
    <ul v-else>
       <li><router-link to="login">Login</router-link></li>
       <li><router-link to="register">Register</router-link></li>
    </ul>
  </div>



  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    this.$root.store.actions.authenticate()
  },
  computed: {
      loading() {
          return this.$root.$data.store.state.loading
      },
      user() {
          return this.$root.$data.store.state.user
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
