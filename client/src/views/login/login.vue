<template>
    <div class="login">
        <h1>&times;</h1>
        <h2>欢迎来到星享俱乐部</h2>
        <p><input type="text" placeholder="手机号" v-model="user"></p>
        <p><input type="text" placeholder="验证码" v-model="pwd"></p>
        <button @click="btn">登录</button>
        <span @click="$router.push('/register')">注册</span>
    </div>
</template>
<script>
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
                    this.$router.push("/home")
                }).catch(error=>{
                    this.$alert(error.response.data.message)
                })
            }else{
                this.$alert("请正确输入")
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
@import "@/static/common.scss";

.login{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 24px;
}
h1{
    width: 100%;
    height:  pxTorem(45px);
    padding-left:  pxTorem(20px);
    line-height:pxTorem(45px) ;
    font-size: pxTorem(20px);
    font-weight: 900;
}
h2{
    font-size: pxTorem(16px);
    padding-left:  pxTorem(20px);
    font-weight: 600;
}
span{
    font-size: pxTorem(12px);
    padding-left:  pxTorem(30px);
    color:red;
}
p{  
    width: 80%;
    height: 100px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    padding: 10% 5%;
}
  button{
      width: 80%;
      height: 100px;
        margin: 10% 10%;
        border-radius:pxTorem(100px) ;
        border:0;
        outline: 0;
  }
</style>