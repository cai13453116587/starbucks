<template>
    <div class="content-item" @click="togoDetails(item.applicationNumber)">
        <div>
            {{item.applicationNumber}}
        </div>
        <div>
            <span></span>
            <span v-for="(item1,index) in type" v-if="index===item.type">
                {{item1}}
            </span>
        </div>
        <div>
            <span>申请人</span><span>{{item.nickname}}</span>
        </div>
        <div>
            <span>加班类型</span><span>{{week}}</span>
        </div>
        <div>
            <span>加班日期</span><span>
                {{item.startTime.slice(0,item.startTime.indexOf("T"))}}
            </span>
        </div>
        <div>
            <span>加班时数</span><span>
                {{time}}
            </span>
        </div>
    </div>
</template>
<script>

export default {
    props:["item"],
    components:{

    },
    data(){
        return {
            type:["已完成","已退回","已召回","待审批","待确认"]
        }
    },
    computed:{
        listType(){
           let type = this.item.list_type === "overtime" ? 0 : 1;
           return type;
        },
        time(){
           let time = new Date(this.item.endTime)*1 - new Date(this.item.startTime)
            return time/1000/3600/24;
        },
        week(){
            let time = new Date(this.item.endTime);
            return time.getDay() === (6 || 7) ? "双休日加班" : "工作日加班" 
        }
    },
    methods:{
        togoDetails(applicationNumber){
            this.$router.push({
                name:"details",
                params:{
                    applicationNumber,
                    type:this.item.list_type
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
@import "../../../static/common.scss";
    .content-item{
        width: 100%;
        height: pxTorem(120px);
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        border-bottom:20px #eee solid;
        >div{
            width: 50%;
            display: flex;
            padding: 20px;
            
            span:nth-child(1){
                color:#666;
            }
            span{
                flex:1;
            }
        }
    }

</style>