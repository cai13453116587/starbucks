<template>
    <nav class="nav">
            <div class="nav-item" v-for="(item,index) in nav" :class="{'active' : ind===index}" @click="tab(index)">
            <i :class="item.icoclass"></i>
            <span>{{item.title}}</span>
            </div>
        </nav>
</template>
<script>
export default {
    props:[],
    components:{

    },
    data(){
        return {
            ind:0,
            nav:[{
                icoclass:"iconfont icon-05",
                title:"待处理"
            },{
                icoclass:"iconfont icon-07",
                title:"已发起"
            },{
                icoclass:"iconfont icon-yibangding",
                title:"已处理"
            }]
        }
    },
    computed:{

    },
    methods:{
        tab(index){
            this.ind = index;
            this.$emit("tab",index)
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
.nav{
    width: 100%;
    height: pxTorem(80px);
    display: flex;
    box-shadow: 0px 30px 20px #eee;
    
    .nav-item{
      flex:1;
      display: flex;
      flex-direction: column;
      i,span{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.active{
        color:green;

    }
    }
  }
</style>