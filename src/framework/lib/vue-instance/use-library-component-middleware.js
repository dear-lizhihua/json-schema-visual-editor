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
  TabPane,
  AutoComplete,
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export const useLibraryComponentMiddleware = (context, next) => {
  const replaceAntdComponentName = value => value.replace(/^A/g, '')
  context.vueInstance.component(replaceAntdComponentName(Button.name), Button)
  context.vueInstance.component(replaceAntdComponentName(Modal.name), Modal)
  context.vueInstance.component(replaceAntdComponentName(Tabs.name), Tabs)
  context.vueInstance.component(replaceAntdComponentName(TabPane.name), TabPane)
  next()
}
