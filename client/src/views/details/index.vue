<template>
    <div class="warp">
        <header class="header">
            <span class="iconfont icon-arrow-left"  @click="$router.go(-1)"></span>
            <span>办公室{{ this.$route.params.type === "overtime" ? "加班":"休假"}}申请表</span>
            <span></span>
        </header>
        <div class="main"  v-if="list.startTime">
            <div class="top">
                <div>
                    <img :src="list.avatar" />
                </div>
                <div>
                    <p>申请人姓名</p>
                    <p>直接主管</p>
                    <p>申请单号</p>
                    <p>发起时间</p>
                </div>
                <div>
                    <p>{{list.nickname}}</p>
                    <p>{{list.wechat}}</p>
                    <p>{{list.applicationNumber}}</p>
                    <p>{{list.startTime.slice(0,list.startTime.indexOf("T"))}}</p>
                </div>
                <div>
                    &gt;
                </div>
            </div>
            <div class="applicationinfo">
                <h3>申请信息</h3>
                <p><span>加班日期</span><span>{{list.updated_at.slice(0,list.updated_at.indexOf("T"))}}</span></p>
                <p><span>加班类型</span><span>{{week}}</span></p>
                <p><span>加班起始时间</span><span>{{list.startTime.slice(list.startTime.indexOf("T")+1,list.startTime.indexOf("."))}}</span></p>
                <p><span>加班截止时间</span><span>{{list.endTime.slice(list.endTime.indexOf("T")+1,list.endTime.indexOf("."))}}</span></p>
                <p><span>共计时数</span><span>{{time}}</span></p>
            </div>
            <div class="overtimeReason">
                <h3>加班事由</h3>
                <div>
                    {{list.describes}}
                </div>
            </div>
            <div class="adjunct">
                <h3><span>附件</span><span>共{{list.annex.length}}个</span></h3>
                <ul>
                    <li  v-for="(item,index) in list.annex" :key="index" >
                        <img :src="`http://localhost:3000${item}`" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <span @click="togo">
                审批历史
            </span>
            <span @click="$router.go(-1)">退回</span>
            <span @click="ok">同意</span>
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
            list:{}
        }
    },
    computed:{
        time(){
           let time = new Date(this.list.endTime)*1 - new Date(this.list.startTime)
            return time/1000/3600;
        },
        week(){
            let time = new Date(this.list.endTime);
            return time.getDay() === (6 || 7) ? "双休日加班" : "工作日加班" 
        }
    },
    methods:{
        togo(){
            this.$router.push("/history/"+ this.$route.params.applicationNumber )
        },
        ok(){
            this.$router.push({
                path:"/agree",
                query:{
                    applicationNumber:this.$route.params.applicationNumber,
                    type:this.$route.params.type
                }
            })
        }
    },
    created(){
        api.details(this.$route.params.type,{
            params:{
                applicationNumber:this.$route.params.applicationNumber
            }
        }).then(res=>{        
            this.list = res.data
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    @import "../../static/common.scss";
@import "../../static/_mixin.scss";
  .warp{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background: #eee;
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
  .footer{
      width: 100%;
      height:pxTorem(45px) ;
      background:#fff;
      display: flex;
      span{
          flex:1;
           display: flex;
      justify-content: space-around;
      align-items: center;
        &:nth-child(2){
          background:#999;
          color:#eee;
         
      }
      &:nth-child(3){
          background:#0b6242;
          color:#fff;

      }
      }

      
  }
  .main{
      overflow: auto;
      .top{
          width: 100%;
          height: pxTorem(150px);
          background: #0b6242;
          border-radius: 0 0 pxTorem(50px) pxTorem(50px);
          display: flex;
          justify-content: space-between;
          padding: pxTorem(10px) ;
          color:#fff;

          img{
              border-radius: 50%;
              width:pxTorem(50px) ;
          }
          div{
              display: flex;
              flex-direction: column;
                font-size: pxTorem(13px);
              p{
                  flex:1;  
              }
          }
      }
      .adjunct h3{
          display: flex;
          justify-content: space-between;
      }
      .applicationinfo,.overtimeReason,.adjunct{
          width: 90%;
          margin: pxTorem(-18px) auto;
          background: #fff;
          border-radius: pxTorem(10px);
            ul{
                width: 100%;
                min-height: pxTorem(50px);
                display: flex;
                flex-wrap: wrap;
                padding: pxTorem(10px);
                li{
                    width: 33.3%;
                    height: 33.3vw;
                    padding: pxTorem(5px);

                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
          h3{
              font-size: pxTorem(18px);
              height: pxTorem(40px);
              line-height: pxTorem(40px);
              padding:0 pxTorem(20px);
              border-bottom: 1px #ccc solid;
          }
          p{
              height: pxTorem(30px);
              line-height: pxTorem(30px);
              padding:0 pxTorem(20px);
              display: flex;
              justify-content: space-between;

              span{
                  &:nth-child(1){
                      color:#999;
                  }
              }

          }
          div{
              min-height: pxTorem(50px);
              padding: pxTorem(10px) pxTorem(20px);
          }
      }
      .overtimeReason{
          margin: pxTorem(30px) auto;
      }
  }
</style>