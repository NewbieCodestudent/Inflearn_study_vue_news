// 전역에서 사용하는 변수 및 함수
import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  getters: {
    fetchedNews (state) {
      return state.news
    },
    fetchedAsk (state) {
      return state.ask
    },
    fetchedJobs (state) {
      return state.jobs
    }
  },
  // mutations : actions의 결과값을 담는 기능
  mutations: mutations,
  // actions : API 호출하는 기능
  actions: actions,
  modules: {
  }
})
