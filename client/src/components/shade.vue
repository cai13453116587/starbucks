<template>
    <div class="shade" @click.self="$emit('sha')">
        <div class="dialog">
            <div class="dialog-item" @click="togo('overtime')">
                <span :style="{background:'yellow'}" class="iconfont icon-jianpan"></span>
                <span>加班</span>
            </div>
            <div class="dialog-item" @click="togo('vacation')">
                <span  :style="{background:'green'}" class="iconfont icon-fengjing"></span>
                <span>休假</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        togo(type){
            this.$router.push("/apply/"+type)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .shade{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.5);
        z-index: 10;
    }
    .dialog{
        width: 100%;
        background: #fff;
        height: 20%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        .dialog-item{

            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            span:nth-child(1){
                display: flex;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                font-size: 100%;
                color:#fff;
            }
        }
    }
</style>