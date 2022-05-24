/* eslint-disable */
import Vue from 'vue'
//@是一个别名，代表的就是src的路径
import App from '@/App.vue'

Vue.config.productionTip = false

//new Vue({
  //render: h=> h(App),

//}).$mount('#app')
var a = 100

new Vue({
  el:'#app',
  render: h => h(App)
})