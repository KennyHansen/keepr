<template>
  <div class="container">

    <router-link to="/">Back</router-link>

    <div v-for="keep in keeps">
        <div class="card">
            <div class="card-head grey lighten-4">
                <p v-show="keep.author">{{keep.author}}</p>
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
        public: true,
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
      user() {
          return this.$root.$data.store.state.user
      }
  },
  methods: {
      createKeep() {
        this.$root.$data.store.actions.createKeep(this.title, this.author, this.imageUrl, this.articleLink, this.isPublic, this.tags)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
