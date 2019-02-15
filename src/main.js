import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.flexible.js'
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(YDUI);

new Vue({
  router,
  store,
  render: h => h(App),
  mounted(){
    window.vue=this
  }
}).$mount('#app')


