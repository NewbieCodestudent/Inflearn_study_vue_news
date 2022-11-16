<template>
  <div>
    <ul class="item-list">
      <li v-for="item in ListItems" v-bind:key="item" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{item.points || 0}}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 리스트 아이템 타이틀 영역 -->
          <p class="news-title">
            <!-- 페이지에 따른 if 문 처리 -->
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{item.title}}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{item.title}}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{item.time_ago}} by
            <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text">
              {{item.user}}
            </router-link>
            <a v-bind:href="item.url" v-else>
              {{item.domain}}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      newsItems: 'fetchedNews',
      askItems: 'fetchedAsk',
      jobsItems: 'fetchedJobs'
    }),
    ListItems () {
      const name = this.$route.name
      if (name === 'news') {
        return this.newsItems
      } else if (name === 'ask') {
        return this.askItems
      } else {
        return this.jobsItems
      }
    }
  },
  created () {
    // 라우트에서 정보 가져오기
    // console.log(this.$route.path)
    // console.log(this.$route.name)
    const name = this.$route.name
    if (name === 'news') {
      this.$store.dispatch('FETCH_NEWS')
      this.items = this.newsItems
    } else if (name === 'ask') {
      this.$store.dispatch('FETCH_ASK')
    } else if (name === 'jobs') {
      this.$store.dispatch('FETCH_JOBS')
    }
  }
}
</script>

<style scoped>
.item-list{
  margin: 0;
  padding: 0;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.link-text{
  color: #828282;
}
</style>
