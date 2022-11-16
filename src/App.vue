<template>
  <div id="app">
    <ToolBar></ToolBar>
    <!-- vue3 transition router-view 사용방법 -->
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
    <SpinNer v-bind:loading="loadingStatus"></SpinNer>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import SpinNer from './components/SpinNer.vue'

export default {
  components: {
    ToolBar,
    SpinNer
  },
  data() {
    return {
      loadingStatus: true
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
