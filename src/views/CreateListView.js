// hiorder component
import ListView from './ListView.vue'
import { h } from 'vue'

export default function createListView (name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어가는 자리
    name: name,
    created() {
      this.$store.dispatch('FETCH_LIST', this.$route.name)
    },
    /* v3에서는 아래 render를 지원하지 않아 h를 import하여 처리
    render(createElement) {
      return createElement(ListView)
    }
    h는 컴포넌트나 엘리먼트를 그려주는 API
    */
    render() {
      return h(ListView)
    }
  }
}
