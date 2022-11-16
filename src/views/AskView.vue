<template>
  <div>
    <!-- map의 방법 1 -->
    <!-- <div v-for="item in askItems" v-bind:key="item">{{item.title}}</div> -->
    <p v-for="item in askItems" v-bind:key="item">
      <router-link v-bind:to="`/item/${item.id}`">{{item.title}}</router-link>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  computed: {
    // map의 방법 1
    // ask () {
    //   return this.$store.state.ask
    // }
    // map의 방법 2 : import mapState 필요
    // ...mapState({
    //   ask: state => state.ask
    // })
    // map의 방법 3 : import mapGetters 필요
    ...mapGetters({
      // 선언하려는 변수명 : 'store getter에 선언한 변수명'
      askItems: 'fetchedAsk'
    })
  },
  created () {
    this.$store.dispatch('FETCH_ASK')
    // fetchAskList().then(response => {
    //   this.ask = response.data
    // }).catch(error => {
    //   console.log(error)
    // })
  }
}
</script>

<style>

</style>
