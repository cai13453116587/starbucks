<template>
    <div class="popup" v-if="open">
        {{title}}
    </div>
</template>
<script>
export default {
    props:{
        title:String
    },
    components:{

    },
    data(){
        return {
            open:true
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        setTimeout(()=>{
            this.open = false
        },1000)
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../static/common.scss";

.popup{
    background: rgba(0,0,0,0.6);
    padding: pxTorem(10px);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate( -50% , -50% )
}
</style>