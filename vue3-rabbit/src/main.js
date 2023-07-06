import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
//引入初始化样式文件
import common from '@/style/common.scss'

//引入懒加载指令
import {lazyPlugin} from '@/directives/index.js'

// 引入全局注册插件
import {compontentPlugin} from '@/components'

const app = createApp(App)
const pinia=createPinia()
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(compontentPlugin)
app.mount('#app')





