import { createApp } from 'vue'

// import Antd from 'ant-design-vue'
import Example from './packages/example.vue'
const app = createApp(Example)

// import { FilterFilled } from '@ant-design/icons-vue'
// app.component(FilterFilled.displayName, FilterFilled)

import {
  Input,
  Row,
  Tooltip,
  Col,
  Form,
  Select,
  Checkbox,
  Button,
  Modal,
  message,
  Tabs,
  AutoComplete,
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const replaceAntdComponentName = value => value.replace(/^A/g, '')
app.component(replaceAntdComponentName(Button.name), Button)
// app.use(Antd)
app.mount('#app')
