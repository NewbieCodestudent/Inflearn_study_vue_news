<template>
  <div>
    <div v-for="item in this.$store.state.jobs" v-bind:key="item">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('FETCH_JOBS')
    // fetchJobsList().then(response => {
    //   this.ask = response.data
    // }).catch(error => {
    //   console.log(error)
    // })
  }
}
</script>

<style>

</style>
