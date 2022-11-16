// import Vue from 'vue'

// export default new Vue()

/*
bus.js에서 내보내는 것을 변수로 하면
export const bus = new Vue();
app.vue에서 받을때 {변수명}으로 받아야 한다.
import {bus} from './bus.js';

bus.js에서 내보내는 것을 default로 하면
export default new Vue();
app.vue에서 받을때 자신이 사용할 변수명으로 재정의 해서 받을 수 있다.
import 변수명 from './bus.js';
*/
	
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.mount('#app')
