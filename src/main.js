import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Example from './packages/example.vue'

const app = createApp(Example)
app.use(Antd)
app.mount('#app')
