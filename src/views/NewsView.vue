<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news" v-bind:key="user">{{user.title}}</div> -->
    <p v-for="item in newsItems" v-bind:key="item">
      <a v-bind:href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { fetchNewsList } from '../api/index.js'

export default {
  created () {
    this.$store.dispatch('FETCH_NEWS')
    // 1. url로 정보를 가져오는 부분
    // fetchNewsList().then(response => {
    //  console.log(response)
    // 2. 정보를 담는 부분
    //  this.users = response.data
    // }).catch(error => {
    //  console.log(error)
    // })
  },
  computed: {
    ...mapGetters({
      newsItems: 'fetchedNews'
    })
  }
}
</script>

<style>

</style>
