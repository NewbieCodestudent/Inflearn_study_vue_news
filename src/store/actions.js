import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from '../api/index.js'
export default {
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
  },
  FETCH_USER ({ commit }, name) {
    fetchUserInfo(name).then(({ data }) => {
      console.log(data)
      commit('SET_USER', data)
    }).catch(error => {
      console.log(error)
    })
  },
  FETCH_ITEM ({ commit }, item) {
    fetchItemInfo(item).then(({ data }) => {
      console.log(data)
      commit('SET_ITEM', data)
    }).catch(error => {
      console.log(error)
    })
  }
}
