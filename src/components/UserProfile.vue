<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <div class="time">
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  // 1. computed를 UserProfile에 선언하여 출력
  // computed: {
  //   ...mapGetters({
  //     userInfo: 'fetchedUser'
  //   })
  // }
  // 2. computed를 UserView에 선언하여 props로 받아서 출력
  props: {
    info: Object
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
