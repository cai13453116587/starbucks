<template>
    <div class="login">
        <h2>欢迎来到星享俱乐部</h2>
        <p><input type="text" placeholder="手机号" v-model="user"></p>
        <p><input type="text" placeholder="验证码" v-model="pwd"></p>
        <button @click="btn">登录/注册</button>
    </div>
</template>
<script>
// import request from "../../utils/request"
import api from "@/api"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            user:"",
            pwd:"",
            userRed:/^1[3456789]\d{9}$/
        }
    },
    computed:{

    },
    methods:{
        btn(){
            if((this.pwd.trim() !== "") && (this.userRed.test(this.user.trim()))){
               api.login({
                        phone:this.user.trim(),
                        password:this.pwd
                }).then(res=>{
                    window.localStorage.token = res.token;
                    this.$router.back()
                }).catch(error=>{
                    alert(error.response.data.message)
                })
            }else{
                alert("请正确输入")
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.login{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 24px;
}
p{  
    width: 80%;
    height: 100px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    padding: 10% 5%;
}
  button{
      width: 60%;
      height: 100px;
      
     margin:10% 20%;
  }
</style>