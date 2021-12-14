import { message, Modal } from 'ant-design-vue'

export const takeClient = (context, next) => {
  context.client = Object.create(null)
  context.client.message = message
  context.client.modal = Modal
  next()
}
