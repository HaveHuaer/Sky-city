// 导入创建应用的函数
import { createApp } from 'vue'
// 全局样式
import './style.css'
// 导入 vue 项目的跟组件
import App from './App.vue'
// 导入路由对象
import router from './router'

import HeaderView from "../src/components/HeaderView.vue"

// import Header from "../src/"
const app = createApp(App)
// 注册路由
app.use(router)
// 应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：
app.mount('#app')
app.component("HeaderView", HeaderView)