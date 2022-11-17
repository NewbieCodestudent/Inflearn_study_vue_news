import store from '../store/index.js'

export default {
  // 재사용할 컴포넌트 옵션 & 로직
  // created() {
  //   this.$store.dispatch('FETCH_LIST', this.$route.name)
  // },
  mounted() {
    store.commit('END_LOADING')
  }
}
