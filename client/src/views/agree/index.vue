<template>
    <div class="warp">
        <header class="header">
            <span class="iconfont icon-arrow-left"  @click="$router.go(-1)"></span>
            <span>同意</span>
            <span></span>
        </header>
        <div class="main">
            <div class="top">
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="请在此输入审批意见" v-model="val"></textarea>
                </div>
            </div>
            <button @click="submitok">提交</button>
        </div>
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
            val:""
        }
    },
    computed:{

    },
    methods:{
        submitok(){
            console.log(this.$route.query)
            api.agree({
                ...this.$route.query,
                remark:this.val,
                status:0
            }).then(res=>{
                if(res.code){
                    this.$alert("成功"),
                    this.$router.push("/home")
                }
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
  @import "../../static/common.scss";
  .warp{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
  }
  
 .header{
    width: 100%;
    height: pxTorem(45px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: pxTorem(18px);
    background: #0b6242;
    color: #fff;
    i{
      margin-right: 10px;
    }
  }
   .main{
      overflow: auto;
      flex:1;
      .top{
          width: 100%;
          height: pxTorem(150px);
          background: #0b6242;
          border-radius: 0 0 pxTorem(50px) pxTorem(50px);
          padding: pxTorem(20px) ;
          div{
              background: #fff;
              width: 100%;
              height: 150%;
              box-shadow: 3px 5px 10px #ccc;
              border-radius: pxTorem(10px);
                textarea{
                    width: 100%;
                    height: 100%;
                    padding: pxTorem(10px);
                }
          }
      }
   }
   button{
       width: 80%;
       margin : 20% 10%;
       background: #0b6242;
       border:0;
       outline: 0;
       height: pxTorem(40px);
       color:#fff;
       border-radius: pxTorem(5px);
   }
</style>