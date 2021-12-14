import { createApp } from 'vue'

export const createRootVueInstanceMiddleware = (context, next) => {
  context.vueInstance = createApp(context.project.components.root)
  next()
}
