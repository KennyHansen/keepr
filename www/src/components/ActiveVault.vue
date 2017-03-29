<template>
  <div class="vault">
    <div v-for="keep in vaultKeeps">
        <keep :keep="keep"></keep>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vault',
  props: ['vault'],
  data () {
    return {

    }
  },
  mounted() {
      this.$root.$data.store.actions.getKeepsInVault(this.vault._id)
  },
  computed: {
      vaultKeeps() {
          return this.$root.$data.store.state.activeVault.keeps || []
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
