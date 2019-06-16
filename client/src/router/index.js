import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
       path: '/home',
      name: 'home',
      meta:{
        title:"加班/休假"
      },
      component:()=>import("../views/home/home")
    },{
      path:"/login",
      meta:{
        title:"登录"
      },
      component:()=>import("../views/login/login")
    },{
      path:"/details/:type/:applicationNumber",
      name:"details",
      meta:{
        title:"办公室加班申请表"
      },
      component:()=>import("../views/details/index")
    },{
      path:"/apply/:type",
      name:"apply",
      meta:{
        title:"办公室加班申请表"
      },
      component:()=>import("../views/apply")
    },{
      path:"/history/:id",
      meta:{
        title:"审批历史"
      },
      component:()=>import("../views/history")
    },{
      path:"/agree",
      name:"agree",
      meta:{
        title:"同意"
      },
      component:()=>import("../views/agree")
    }
  ]
})

router.beforeEach((to,from,next)=>{
    document.title = to.meta.title
    next();
})
export default router;