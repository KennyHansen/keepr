<template>
  <div class="container">

    <router-link to="/">Back</router-link>
    <!-- 
    
        Display vaults on side with link to them, click & drag keeps to vaults to add them, 
        then toast a message to the user. 
    
    -->

    <div v-for="keep in keeps">
        <div class="card">
            <div class="card-head grey lighten-4">
                <p v-show="keep.author">{{keep.author}}</p>
                <button @click="addToVault">Add To Vault</button>
            </div>
            <div class="card-body">
                <p v-show="keep.body">{{keep.body}}</p>
            </div>
            <div class="card-title">
                <p v-show="keep.title">{{keep.title}}</p>
                <img :src="keep.imgUrl"></img>
            </div>
        </div>
    </div>
    <form @submit.prevent="createKeep">
    
    </form>
  </div>
</template>

<script>
export default {
  name: 'keeps',
  data () {
    return {
        title: '',
        imageUrl: '',
        articleLink: '',
        isPublic: true,
        tags: '',
    }
  },
  mounted() {
      this.$root.$data.store.actions.getKeeps()
  },
  computed: {
      keeps() {
          return this.$root.$data.store.state.keeps
      },
      vaults() {
          return this.$root.$data.store.state.myVaults
      },
      user() {
          return this.$root.$data.store.state.user
      }
  },
  methods: {
      createKeep() {
        this.$root.$data.store.actions.createKeep(this.title, this.author, this.imageUrl, this.articleLink, this.isPublic, this.tags)
      },
      addToVault() {
          console.log('ok')
          // pick which vault to add it to

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
