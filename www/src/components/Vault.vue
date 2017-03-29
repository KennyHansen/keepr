<template>
  <div class="vault">
    {{vault}}
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
  computed: {
      myKeeps() {
          return this.$root.$data.store.state.myKeeps
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
