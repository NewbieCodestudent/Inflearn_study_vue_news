<template>
  <div>
    <p>name : {{userInfo.id}}</p>
    <p>karma : {{userInfo.karma}}</p>
    <p>created : {{userInfo.created}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created () {
    // params값 불러오기
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  },
  computed: {
    ...mapGetters({
      userInfo: 'fetchedUser'
    })
  }
}
</script>

<style>

</style>
