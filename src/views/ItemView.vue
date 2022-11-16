<template>
  <div>
    <!-- 질문 상세 정보 영역 -->
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link v-bind:to="`/user/${items.user}`">
            {{items.user}}
          </router-link>
          <div class="time">
            {{items.time_ago}}
          </div>
        </div>
      </div>
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
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
