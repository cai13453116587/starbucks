<template>
    <div class="main-header">
                <div class="main-header-item"></div>
                <div class="main-header-item">
                    <span v-for="(item,index) in mainnav" :key="index"  :class="{'active' : ind===index}"  @click="mainnavtab(index)">{{item.title}}</span>
                </div>
                <div class="main-header-item">
                    <i class="iconfont icon-wodedingdan"></i> 
                    <i class="iconfont icon-gengduo-2"></i>
                </div>
            </div>
</template>
<script>
export default {
    props:["ind"],
    components:{

    },
    data(){
        return {
             navind:0,
            mainnav:[{
                title:"加班"
            },{
                title:"休假"
            }],
        }
    },
    computed:{

    },
    methods:{
         mainnavtab(index){
            this.navind = index;
            let type = index===0 ? "overtime" : "vacation";
            this.$emit("mainnavtab",type)
        },
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../../static/common.scss";
      .main-header{
      width: 100%;
      height: pxTorem(60px);
      display: flex;
      justify-content: space-around;
      align-items: center;

      .main-header-item{

          &:nth-child(2){
              border:green 1px solid;
              border-radius: 100px;
              color:green;
              display: flex;
              overflow: hidden;
              span{
                  display: inline-block;
                  width: 120px;
                  padding: 10px 10%;
              }
                .active{
                    background: green;
                    color: #fff;
                }
          }
      }
  }
</style>