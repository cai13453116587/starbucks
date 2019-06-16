// import api from "@/api";
import request from "../../utils/request"
export default {
    namespaced:true,
    state:{
        userinfos:{}
    },
    mutations:{
        inituser(state,data){
            state.userinfos = data;
        }
    },
    actions:{
        userinfo(context){
            request.get("/api/user/info").then(data=>{
                context.commit("inituser",data.data)
            })
        }
    }
}