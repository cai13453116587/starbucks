<template>
    <div class="warp">
        <header class="header">
            <span class="iconfont icon-arrow-left"  @click="$router.go(-1)"></span>
            <span>审批历史</span>
            <span></span>
        </header>
        <div class="main">
            <div class="top">
                <div class="con">
                    <p><span>申请人</span><span>刘大雨</span></p>
                    <p><span>部门</span><span @click="showText">星巴克运营部 中国 — 门店副经理</span></p>
                    <p><span>员工职务</span><span>p2</span></p>
                    <p><span>员工编号</span><span>06060606</span></p>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom-item" v-for="(item,index) in list">
                    <div></div>
                    <div>
                        <div>
                            <img :src="item.avatar" alt="">
                        </div>
                    </div>
                    <div>
                        <p>{{item.nickname}}</p>
                        <p>主管循环审批</p>
                        <p>审批意见：{{item.remark}}</p>
                    </div>
                    <div>
                        <i class="iconfont icon-yibangding"></i>
                    </div>
                </div>
            </div>
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
            list:[]
        }
    },
    computed:{

    },
    methods:{
        showText(e){
            this.$alert(e.target.innerText)
        }
    },
    created(){
        api.history({
            params:{applicationNumber:this.$route.params.id}
        }).then(res=>{
            if(res.data){
                this.list = res.data
            }else{
                this.$alert("暂无历史审批记录")
                this.$router.go(-1)
            }
        })
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
      flex:1;
      overflow: auto;
      .top{
          width: 100%;
          height: pxTorem(100px);
          background: #0b6242;
          border-radius: 0 0 pxTorem(50px) pxTorem(50px);
          display: flex;
          justify-content: space-between;
          padding: pxTorem(10px) ;
        
          img{
              border-radius: 50%;
              width:pxTorem(50px) ;
          }
          .con{
              width: 100%;
              height: 100%;
              background: #fff;
              border:1px solid #ccc;
              border-radius: pxTorem(10px);
              padding: pxTorem(20px);
              margin-top: pxTorem(20px);
              box-shadow: 3px 5px 3px #ccc;
              display: flex;
              flex-wrap: wrap;
              p{
                  width: 50%;
                  height: 70%;
                  display: flex;
                  
                  span{
                      flex: 1;
                       white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                      &:nth-child(1){
                          color:#ccc;
                      }
                  }
              }
          }
          
      }
      .bottom{
          width: 90%;
          margin: 0 auto;
          .bottom-item{
                width: 100%;
                display: flex;
                height:pxTorem(60px) ;
                margin-top: pxTorem(30px);
                div{
                    flex:1;
                    display: flex;
                    flex-direction: column;
                    &:nth-child(4){
                        text-align: end;
                    }
                    div{
                        width: 50%;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                    img{
                        width: 100%;
                        border-radius: 50%;
                    }
                    p{
                        width:100%;
                        flex:1;
                        color:#ccc;
                        
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        &:nth-child(3){
                            background: #ccc;
                            color:#999;
                        }
                    }
                }
            }
      }
      
   }
</style>