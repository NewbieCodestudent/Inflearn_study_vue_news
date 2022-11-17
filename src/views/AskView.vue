<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin.js'

export default {
  components: {
    ListItem: ListItem
  },
  mixins: [ListMixin]
  // created () {
  //   this.$store.dispatch('FETCH_ASK')
  // }
}
</script>

<style scoped>
</style>
