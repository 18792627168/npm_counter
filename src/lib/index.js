import Counter from './counter.vue'

const vueCounter = {
  install: function (Vue) {
    Vue.component(Counter.name, Counter)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueCounter)
}

export default vueCounter