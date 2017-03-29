<template>
  <div class="container">
    <div v-for="keep in keeps" :keep="keep">
        <keep></keep>
    </div>
    <form @submit.prevent="createKeep">
    
    </form>
  </div>
</template>

<script>
import Keep from './Keep'
export default {
  name: 'keeps',
  components: { Keep },
  data () {
    return {
        title: '',
        author: this.user.name || '',
        imageUrl: '',
        articleLink: '',
        public: false,
        tags: ''
    }
  },
  computed: {
      keeps() {
          return this.$root.$data.store.state.keeps
      },
      user() {
          return this.$root.$data.store.state.user
      }
  },
  methods: {
      createKeep() {
        this.$root.$data.store.actions.createKeep(this.title, this.author, this.imageUrl, this.articleLink, this.public, this.tags)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
