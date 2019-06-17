# starbucks

# 前言




## 技术栈

vue + vuex + vue-router + webpack + ES6  + scss + flex 


## 项目运行


```
git clone https://github.com/cai13453116587/starbucks.git 

cd client

npm install

npm run dev

```
## 关于接口数据

此项目的所有接口数据都来源于配套的后台系统。

cd server

npm install

npm start




<!-- # 效果演示

[查看demo请戳这里](http://cangdu.org/elm/)（请用chrome手机模式预览）

### 移动端扫描下方二维码 -->
<!-- 
<img src="https://github.com/bailicangdu/vue2-elm/blob/master/screenshots/ewm.png" width="250" height="250"/> -->



# 目标功能
- [x] 任务列表 -- 完成
- [x] 登录、注册 -- 完成
- [x] 加班详情 -- 完成
- [x] 休假详情 --完成
- [x] 提交加班 --完成
- [x] 提交休假 --完成
- [x] 审批历史 -- 完成
- [x] 任务状态更新 --完成
- [x] 图片上传 -- 完成
- [ ] 搜索 -- 未完成






# 项目布局

```
|——— server                                 // 数据
|——— client                                 
|     |——— build                            // webpack 配置文件
|     |——— config                           // 项目打包路径
|     |——— dist                             //
|     |——— src                              // 源码目录
|     |    |—— api                          // 配置接口
|     |    |—— components                   // 公共组件
|     |    |    |—— popup.vue
|     |    |    |—— shade.vue
|     |    |—— directives                   //
|     |    |—— plugins
|     |    |—— router                       // 配置路由
|     |    |—— static                       // 静态文件加载
|     |    |    |—— fonts                   // icon 图标
|     |    |    |—— _mixin.scss             // mixin 方法
|     |    |    |—— common.scss             // 全局样式
|     |    |    |—— fiexble.js              // 封装的 rem
|     |    |—— store                        // vuex
|     |    |    |—— modules                 // 个人信息
|     |    |—— utils                        // 公共方法
|     |    |    |—— files.js                // 上传图片方法的判断
|     |    |    |—— request.js              // axios的前置拦截
|     |    |—— views                        // 视图
|     |    |    |—— agree                   // 同意视图
|     |    |    |—— apply                   // 提交办公室加班||休假申请表
|     |    |    |—— details                 // 提交办公室加班||休假申请表
|     |    |    |—— history                 // 历史审批
|     |    |    |—— home                    // 首页
|     |    |    |   |—— components          // 首页组件
|     |    |    |   |   |—— content.vue     // 首页列表
|     |    |    |   |   |—— mainNav.vue     // 首页列表导航
|     |    |    |   |   |—— nav.vue         // 导航
|     |    |    |—— login                   // 登录
|     |    |    |—— register                // 注册
|     |    |    |—— search                  // 搜索
|     |    |—— App.vue                      // 页面入口文件
|     |    |—— main.js                      // 程序入口文件 加载公共组件


```