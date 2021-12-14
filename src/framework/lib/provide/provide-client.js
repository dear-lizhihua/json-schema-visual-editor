export const provideClient = (context, next) => {
  context.vueInstance.provide('$message', context.client.message)
  context.vueInstance.provide('$modal', context.client.modal)
  next()
}
