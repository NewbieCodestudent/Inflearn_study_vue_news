import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemView
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 로딩 화면 구현
// 1. store state에 변수 선언(loadingStatus)
// 2. store mutation에 START_LOADING, END_LOADING 작성
// 3. router index.js에 아래 코드 2개 작성
// 4. SpinNer로 사용할 vue를 components에 작성
// 5. App.vue에 import하여 사용
router.beforeEach((to, from, next) => {
  store.commit('START_LOADING')
  setTimeout(() => {
    next()
  }, 500)
})

router.afterEach((to, from) => {
  store.commit('END_LOADING')
})

export default router
