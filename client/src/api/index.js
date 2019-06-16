import request from "../utils/request"

export default {
    //查询用户是否登陆
    userInfo:() => request.get("/api/user/info"),
    //用户登陆
    login:(data)=>request.post("/api/login",data),
    //加班、休假 详情
    details:(type,data)=>request.get("/api/apply/"+type,data),
    // 获取任务列表
    listdata:(data)=>request.get("/api/task/list",data),
    //图片提交
    tofile:(data)=>request.post("/api/upload",data),
    //提交加班
    submitovertime:(data)=>request.post("/api/apply/overtime",data),
    //提交休假
    submitvacation:(data)=>request.post("/api/apply/vacation",data),
    //审批历史
    history:(data)=>request.get("/api/task/history",data),
    //同意
    agree:(data)=>request.post("/api/task/approval",data),
    //注册
    register:(data)=>request.post("/api/register",data)

}