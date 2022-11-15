<template>
  <div>
    <!-- <div v-for="item in jobsItems" v-bind:key="item">{{item.title}}</div> -->
    <p v-for="job in jobsItems" v-bind:key="job">
      <a v-bind:href="job.url">{{job.title}}</a>
      <small>{{job.domain}}, {{job.time_ago}}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    this.$store.dispatch('FETCH_JOBS')
    // fetchJobsList().then(response => {
    //   this.ask = response.data
    // }).catch(error => {
    //   console.log(error)
    // })
  },
  computed: {
    ...mapGetters({
      jobsItems: 'fetchedJobs'
    })
  }
}
</script>

<style>

</style>
