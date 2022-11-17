import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js'
export default {
  // FETCH_NEWS (context) {
  //   fetchNewsList().then(response => {
  //     // console.log(response.data)
  //     // 결과값을 mutations에 담는 기능
  //     context.commit('SET_NEWS', response.data)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // },
  async FETCH_NEWS (context) {
    try {
      const response = await fetchNewsList() // then의 response를 받는부분
      context.commit('SET_NEWS', response.data)
      return response
    } catch (error) {
      console.log(error)
    }
  },
  // Destructuring(구조분해문법) : obj.items을 {}를 이용해서 바로 꺼내오는 방법
  // 예제 : let { items1, items2, items3 } = obj
  async FETCH_ASK ({ commit }) {
    // try catch를 api index.js fetchAskList()에서 처리
    const response = await fetchAskList()
    commit('SET_ASK', response.data)
    return response
  },
  async FETCH_JOBS ({ commit }) {
    const response = await fetchJobsList()
    commit('SET_JOBS', response.data)
    return response
  },
  async FETCH_USER ({ commit }, name) {
    const response = await fetchUserInfo(name)
    commit('SET_USER', response.data)
    return response
  },
  async FETCH_ITEM ({ commit }, item) {
    const response = await fetchItemInfo(item)
    commit('SET_ITEM', response.data)
    return response
  },
  // ListView에 활용
  async FETCH_LIST ({ commit }, pageName) {
    const response = await fetchList(pageName)
    commit('SET_LIST', response.data)
    return response
  }
}
