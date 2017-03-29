<template>
  <div class="vault">
    My Vaults

    <!-- <vault v-for="vault in myVaults" :vault="vault"></vault> -->

    
  </div>
</template>

<script>
import Vault from './Vault'
export default {
  name: 'vault',
  data () {
    return {
        name: '',
        description: '',
        imageUrl: ''
    }
  },
  components: { Vault },
  computed: {
      myVaults() {
          return this.$root.$data.store.state.myVaults
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
