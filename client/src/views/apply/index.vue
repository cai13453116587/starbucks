<template>
    <div class="warp">
        <header class="header">
            <span class="iconfont icon-arrow-left"  @click="$router.go(-1)"></span>
            <span>办公室{{ this.$route.params.type === "overtime" ? "加班":"休假"}}申请表</span>
            <span></span>
        </header>
        <div class="main">
            <div class="top">
                <div>
                    <img :src="userinfos.avatar" />
                </div>
                <div>
                    <p>申请人姓名</p>
                    <p>直接主管</p>
                </div>
                <div>
                    <p>{{userinfos.nickname}}</p>
                    <p>{{userinfos.wechat}}</p>
                </div>
                <div>
                    &gt;
                </div>
            </div>
            <div class="applicationinfo">
                <h3>申请信息</h3>
                <p><span>加班日期</span><span>
                    <el-date-picker v-model="overtime" 
                    size="mini"
                    :placeholder="new Date().toLocaleDateString()"
                    type="date"></el-date-picker>
                    </span></p>
                <p><span>加班类型</span><span>
                        <select v-model="selectData">
                            <option value="-1">请选择</option>
                            <option v-for="item in this[$route.params.type+'Type']" :key="item.id" :value="item.id">{{item.title}}</option>
                        </select>
                    </span></p>
                <p><span>加班起始时间</span><span><el-date-picker v-model="starttime" 
                    size="mini"
                    :placeholder="new Date().toLocaleDateString()"
                    type="datetime"></el-date-picker></span></p>
                <p><span>加班截止时间</span><span><el-date-picker v-model="endtime" 
                    size="mini"
                    :placeholder="new Date().toLocaleDateString()"
                    type="datetime"></el-date-picker></span></p>
                <p><span>共计时数</span><span>{{time}}</span></p>
            </div>
            <div class="overtimeReason">
                <h3>加班事由</h3>
                <div>
                    <input type="text" v-model="describes">
                </div>
            </div>
            <div class="adjunct">
                <h3><span>附件</span></h3>
                <ul>
                    <li v-for="item in urldata">
                        <img :src="('http://localhost:3000' + item)" alt="">
                    </li>
                    <li>
                        <p>
                            +
                        </p>
                        <input type="file" ref="files" @change="addImg">
                    </li>
                </ul>

            </div>
        </div>
        <div class="footer">
            <span>
                取消
            </span>
            <span @click="submitdata">
                提交
            </span>
        </div>
    </div>
</template>
<script>
import {mapActions,mapState} from "vuex"
import isfile from "../../utils/files"
import api from "@/api"
export default {
    props:{
       
    },
    components:{
        
    },
    data(){
        return {
            overtime:"",
            starttime:new Date(),
            endtime:new Date(),
            describes:"",
            urldata:[],
            selectData:"-1",
            overtimeType:[{
                id:1,
                title:"双休日加班"
            },{
                id:2,
                title:"节假日加班"
            },{
                id:3,
                title:"工作日加班"
            }],
            vacationType:[{
                id:1,
                title:"年假"
            },{
                id:2,
                title:"调休"
            }]
        }
    },
    computed:{
        ...mapState("userdata",["userinfos"]),
        time(){
           let time = new Date(this.endtime)*1 - new Date(this.starttime)*1;
               return (time/1000/3600).toFixed(1)
        }
    },
    methods:{
        ...mapActions("userdata",["userinfo"]),
        submitdata(){
            if(this.describes && this.overtime && this.urldata){
                api['submit'+this.$route.params.type]({
                    annex:this.urldata,
                    endTime:this.endtime,
                    startTime:this.starttime,
                    describe:this.describe,
                    type:this.selectData
                }).then(res=>{
                    if(res.code===1){
                        this.$router.go(-1)
                    }else{
                        this.$alert(res.msg)
                    }
                })
            }else{
                this.$alert("请正确输入")
            }
        },
        addImg(e){
            let ifile = new isfile(e.target.files[0],{
                size:3,
                type:["gif","png","jpeg","jpg"]
            })
            if(ifile.isSize && ifile.isType){
                let formData = new FormData();
                formData.append("file",e.target.files[0])
                api.tofile(formData).then(res=>{
                    this.urldata.push(res.url)
                })
            }
        }

    },
    created(){
        this.userinfo()
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
        &:nth-child(1){
          background:#999;
          color:#eee;
         
      }
      &:nth-child(2){
          background:#0b6242;
          color:#fff;

      }
      }
  }
  option,select{
      font-size:pxTorem(12px) ;
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
                    position: relative;
                    border:1px solid #ccc;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                    p{
                        width: 100%;
                        height: 100%;
                        font-size: pxTorem(40px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    input{
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        position: absolute;
                        left: 0;
                        top: 0;
                        opacity: 0;
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
                  display: flex;
                  justify-content:flex-end;
                 align-items: center;
                  &:nth-child(1){
                      color:#999;
                  }
                  
                  .el-input{
                    width: 70%;
                    height: 100%;
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
//   #app{
//       .el-picker-panel__body,.el-picker-panel__body-wrapper,.el-popper{
//         width: 150%;
//     }
//   }
</style>