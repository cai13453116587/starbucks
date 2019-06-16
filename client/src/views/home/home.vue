<template>
    <div class="warp">
        <header class="header">
            <span class="iconfont icon-arrow-left" @click="$router.go(-1)"></span>
            <span>加班/休假</span>
            <span>
                <i class="iconfont icon-riqixuanze"></i><i class="iconfont icon-fangdajing"></i>
            </span>
        </header>
        <Nav  @tab="tab"></Nav>
        <div class="main">
            <mainNav @mainnavtab="mainnavtab" :ind="ind"></mainNav>
            <div class="content">
                <Content v-for="(item,index) in data" :item="item" :key="index"></Content>
            </div>
        </div>
        <div class="fixed" @click="shade">
           + 发起任务
        </div>
        <Shade v-if="shadeOpen" @sha="shaa"/>
        <input type="checkbox"/>
    </div>
</template>
<script>
import Content from "../home/components/content"
import Shade from "../../components/shade"
import request from "../../utils/request"
import mainNav from "./components/mainNav"
import Nav from "../home/components/nav"
import api from "@/api"
import axios from "axios"
export default {
     name:"home",
    props:{

    },
    components:{
        Content,Shade,Nav,mainNav
    },
    data(){
        return {
            shadeOpen:false,
            data:[],
            ind:0,
            obj:{
                page:1,
                pageSize:10,
                create_at:0,
                type:"overtime",
                status:0
            }
        }
    },
    computed:{

    },
    methods:{
       
        shade(){
            this.shadeOpen = true;
        },
        shaa(){
            this.shadeOpen = false;
        },
        tab(index){
            this.obj.status = index;
            this.obj.type = "overtime"
            this.ind = this.obj.type === "overtime" ? 0 : 1; 
            this.requests()
        },
        mainnavtab(type){
            this.obj.type = type;
            this.ind = this.obj.type === "overtime" ? 0 : 1; 
            this.requests()
        },
        requests(){
            api.listdata({
                params:this.obj
            }).then(res=>{
                this.data = res.data
            })
        },

    },
    created(){
         this.requests()
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
  }
 .header{
    width: 100%;
    height: pxTorem(45px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 900;
    font-size: pxTorem(18px);
    i{
      margin-right: 10px;
    }
  }
  
  
  .main{
      flex:1;
      overflow: auto;
  }

   
   .fixed{
       position: fixed;
       right: 5%;
       bottom: 5%;
       width: 30%;
       height: 5%;
       background: green;
       color:#fff;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: pxTorem(15px);
       border-radius: 100px;
   }
</style>