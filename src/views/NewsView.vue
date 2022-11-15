<template>
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user">{{user.title}}</div>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
