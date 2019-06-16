import Vue from "vue"
import Vuex from "vuex"
import userdata from "./modules/index";
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        userdata
    },
    state:{},
    mutations:{},
    actions:{}
})