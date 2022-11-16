<template>
  <div>
    <!-- 질문 상세 정보 영역 -->
    <section>
      <!-- 사용자 정보 -->
      <user-profile v-bind:info="items">
        <template v-slot:username>
          <router-link v-bind:to="`/user/${items.user}`">
            {{items.user}}
          </router-link>
        </template>
        <template v-slot:time>{{`Posted : ${items.time_ago}`}}</template>
      </user-profile>
      <h2>{{items.title}}</h2>
    </section>
    <!-- 질문 댓글 영역 -->
    <section>
      <!-- v-html : html로 된 글을 변환해주는 기능 -->
      <div v-html="items.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
  created () {
    const item = this.$route.params.id
    console.log(item)
    this.$store.dispatch('FETCH_ITEM', item)
  },
  computed: {
    ...mapGetters({
      items: 'fetchedItem'
    })
  },
  components: {
    UserProfile: UserProfile
  }
}
</script>

<style scoped>
</style>
