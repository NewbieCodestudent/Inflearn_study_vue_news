import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import store from '../store/index.js'
// hiorder component를 위한 import 아래 createListView와 연계하여 사용
// import createListView from '@/views/CreateListView'

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    // component: createListView('NewsView')
    // 스피너 및 네이게이션 라우터가드 적용
    beforeEnter: (to, from, next) => {
      store.commit('START_LOADING')
      store.dispatch('FETCH_LIST', to.name).then(() => {
        setTimeout(() => {
          next()
          store.commit('END_LOADING')
        }, 500)
      })
    }
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    // component: createListView('JobsView')
    beforeEnter: (to, from, next) => {
      store.commit('START_LOADING')
      store.dispatch('FETCH_LIST', to.name).then(() => {
        setTimeout(() => {
          next()
          store.commit('END_LOADING')
        }, 500)
      })
    }
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    // component: createListView('AskView')
    beforeEnter: (to, from, next) => {
      store.commit('START_LOADING')
      store.dispatch('FETCH_LIST', to.name).then(() => {
        // ListMixin에서 스피너 종료함
        next()
      })
    }
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemView,
    beforeEnter: (to, from, next) => {
      store.commit('START_LOADING')
      store.dispatch('FETCH_ITEM', to.params.id).then(() => {
        store.commit('END_LOADING')
        next()
      })
    }
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView,
    beforeEnter: (to, from, next) => {
      store.commit('START_LOADING')
      store.dispatch('FETCH_USER', to.params.id).then(() => {
        store.commit('END_LOADING')
        next()
      })
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 로딩 화면 구현(네비게이션 전역가드)
// 1. store state에 변수 선언(loadingStatus)
// 2. store mutation에 START_LOADING, END_LOADING 작성
// 3. router index.js에 아래 코드 2개 작성
// 4. SpinNer로 사용할 vue를 components에 작성
// 5. App.vue에 import하여 사용
/*
router.beforeEach((to, from, next) => {
  store.commit('START_LOADING')
  setTimeout(() => {
    next()
  }, 500)
})

router.afterEach((to, from) => {
  store.commit('END_LOADING')
})
*/

export default router
