<template>
  <div class="login">
    <h1>Login</h1>
    <router-link to="/">Back</router-link></li>
    <div class="container">
        <div class="card">
            <form @submit.prevent="loginUser">
                <input type="email" v-model="email" placeholder="Email"></input>
                <input type="password" v-model="password" placeholder="Password"></input>
                <button class="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
      loginUser() {
          if(this.email && this.password) {
            this.$root.store.actions.login(this.email, this.password)
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
