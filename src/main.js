import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Example from './packages/example.vue'

// import { FilterFilled } from '@ant-design/icons-vue'
// app.component(FilterFilled.displayName, FilterFilled)

const app = createApp(Example)
app.use(Antd)
app.mount('#app')
