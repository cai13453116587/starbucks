import axios from "axios"
import router from "../router";
import Vue from "vue"

const request = axios.create();
request.interceptors.request.use((config)=>{
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem("token")
        }
    }
},(error)=>{
    return Promise.reject(error)
})

request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    const response = error.response;
    const status = response.status;
    if(status > 400){
        switch(status){
            case 401:
                router.push('/login');
            break;
            case 403:
                this.$alert('没有权限');
            break;
            case 404:
                this.$alert('页面走丢了');
            break;
        }
    }
    return Promise.reject(error)
})

export default request;