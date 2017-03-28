<template>
  <div class="register">
    <h1>Register</h1>
    <router-link to="/">Back</router-link></li>
    <div class="container">
        <div class="card">
            <form @submit.prevent="registerUser">
                <input type="text" v-model="username" placeholder="Username"></input>
                <input type="email" v-model="email" placeholder="Email"></input>
                <input type="password" v-model="password" placeholder="Password"></input>
                <button class="btn btn-primary" type="submit">Register</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
        username: '',
        email: '',
        password: ''
    }
  },
  methods: {
      registerUser() {
          if(this.username && this.email && this.password) {
            this.$root.store.actions.register(this.username, this.email, this.password)
            this.username = ''
            this.password = ''
            this.email = ''
            this.$router.push({path: '/'})
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
