// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index.js"
import {DatePicker} from "element-ui"
import "./static/flexble"
import "./static/fonts/iconfont.css"
import popup from "./components/popup"
Vue.config.productionTip = false
Vue.use(DatePicker)
let elpopup = Vue.extend(popup);
Vue.prototype.$alert =(data)=>{
    let aa = new elpopup({
    propsData:{
      title:data
    }
  })
  document.body.appendChild(aa.$mount().$el)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

