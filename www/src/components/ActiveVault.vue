<template>
  <div class="vault">
    <!-- 
    
        Each keep should have a button to remove them from the vault
    
    -->
    <div v-for="keep in vaultKeeps">
        {{keep}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vault',
  data () {
    return {

    }
  },
  mounted() {
      this.$root.$data.store.actions.getKeepsInVault(this.$route.params.id)
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
