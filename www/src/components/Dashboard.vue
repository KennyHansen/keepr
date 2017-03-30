<template>
  <div class="dashboard">

    <router-link to="/">Back</router-link>

    <h2>My Vaults</h2>
    <div v-for="vault in myVaults">
      {{vault.name}}
      <router-link :to="{ path: '/vaults/' + vault._id }">Link to vault</router-link>
    </div>

    <form @submit.prevent="createVault">
      <input type="text" v-model="name" placeholder="Name"></input>
      <input type="text" v-model="description" placeholder="Description"></input>
      <input type="text" v-model="imageUrl" placeholder="Image"></input>
      <button type="submit">Submit</button>
    </form>

    <h2>My Keeps</h2>
    <div v-for="keep in myKeeps">
      {{keep.title}}
    </div>
    
    </form>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
        name: '',
        description: '',
        imageUrl: ''
    }
  },
  mounted() {
    this.$root.$data.store.actions.getDashboard()
  },
  computed: {
      myVaults() {
          return this.$root.$data.store.state.myVaults
      },
      myKeeps() {
        return this.$root.$data.store.state.myKeeps
      }
  },
  methods: {
    createVault() {
      console.log(this.imageUrl)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
