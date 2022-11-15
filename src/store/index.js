// 전역에서 사용하는 변수 및 함수
import { createStore } from 'vuex'
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js'

export default createStore({
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  getters: {
    fetchedAsk (state) {
      return state.ask
    }
  },
  // mutations : actions의 결과값을 담는 기능
  mutations: {
    // state : 변수, data : actions에서 받는 값
    SET_NEWS (state, data) {
      state.news = data
    },
    SET_ASK (state, data) {
      state.ask = data
    },
    SET_JOBS (state, data) {
      state.jobs = data
    }
  },
  // actions : API 호출하는 기능
  actions: {
    FETCH_NEWS (context) {
      fetchNewsList().then(response => {
        console.log(response.data)
        // 결과값을 mutations에 담는 기능
        context.commit('SET_NEWS', response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    FETCH_ASK (context) {
      fetchAskList().then(response => {
        console.log(response)
        context.commit('SET_ASK', response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    // Destructuring(구조분해문법) : obj.items을 {}를 이용해서 바로 꺼내오는 방법
    // 예제 : let { items1, items2, items3 } = obj
    FETCH_JOBS ({ commit }) {
      fetchJobsList().then(({ data }) => {
        console.log(data)
        commit('SET_JOBS', data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
