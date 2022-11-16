export default {
  // state : 변수, data : actions에서 받는 값
  SET_NEWS (state, data) {
    state.news = data
  },
  SET_ASK (state, data) {
    state.ask = data
  },
  SET_JOBS (state, data) {
    state.jobs = data
  },
  SET_USER (state, data) {
    state.user = data
  },
  SET_ITEM (state, data) {
    state.item = data
  }
}
