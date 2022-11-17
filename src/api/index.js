// api 관리구역 : 주소를 통해서 정보를 가져오는 것에 대해서 정리하는 구역
import axios from 'axios'

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList () {
  // return axios.get(config.baseUrl + 'news/1.json')
  return axios.get(`${config.baseUrl}news/1.json`)
}
async function fetchAskList () {
  // return axios.get(config.baseUrl + 'news/1.json')
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`)
    return response
  } catch (error) {
    console.log(error)
  }
}
async function fetchJobsList () {
  // return axios.get(config.baseUrl + 'news/1.json')\
  try {
    const response = await axios.get(`${config.baseUrl}jobs/1.json`)
    return response
  } catch (error) {
    console.log(error)
  }
}
async function fetchUserInfo (userName) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${userName}.json`)
    return response
  } catch (error) {
    console.log(error)
  }
}
async function fetchItemInfo (item) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${item}.json`)
    return response
  } catch (error) {
    console.log(error)
  }
}
// ListView를 위한 action
async function fetchList (pageName) {
  const response = await axios.get(`${config.baseUrl}${pageName}/1.json`)
  return response
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList
}
