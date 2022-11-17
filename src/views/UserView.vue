<template>
  <div>
    <UserProfile v-bind:info="userInfo">
      <template v-slot:username>{{userInfo.id}}</template>
      <template v-slot:time>
        <span>{{`Joined : ${userInfo.created}, `}}</span>
      </template>
      <template v-slot:karma>
        <span>{{`karma : ${userInfo.karma}`}}</span>
      </template>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
  // created () {
  //   // params값 불러오기
  //   const userName = this.$route.params.id
  //   this.$store.dispatch('FETCH_USER', userName)
  // },
  computed: {
    ...mapGetters({
      userInfo: 'fetchedUser'
    })
  },
  components: {
    UserProfile: UserProfile
  }
}
</script>

<style>
</style>
