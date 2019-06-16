<template>
  <div id="app">
    <keep-alive include="home">
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import api from "@/api"
export default {
  created(){
    api.userInfo().then(res=>{
        // console.log(res)
    }).catch((error)=>{
      // console.log(error)
      // console.log(error.response.data.message)
    })
  }
}
</script>

<style lang="scss">
@import "./static/common.scss";
@import "./static/_mixin.scss";
*{
  @include sizing;
  font-size: pxTorem(16px);
}
#app{
  width: 100%;
  height: 100%;
}
</style>
