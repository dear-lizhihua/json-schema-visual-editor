import compose from 'koa-compose'

import { registerRootVueComponent } from '../lib/register/register-root-vue-component'
import { takeClient } from '../lib/take/take-client'
import { createRootVueInstanceMiddleware } from '../lib/vue-instance/root-vue-instance'
import { useLibraryComponentMiddleware } from '../lib/vue-instance/use-library-component-middleware'
import { provideClient } from '../lib/provide/provide-client'

export class Framework {
  constructor() {
    const context = this.context = Object.create(null)
    context.project = Object.create(null)
    context.project.components = Object.create(null)
  }
  register(key, ...args) {
    const context = this.context
    let name
    let value
    if (args.length === 1) value = args[0]
    if (args.length === 2) name = args[0]
    if (args.length === 2) value = args[1]
    if (key === 'rootVueComponent') return registerRootVueComponent(context, value)
  }

  middlewares = []
  use (middleware) {
    this.middlewares.push(middleware)
  }

  async start ({ mount } = {}) {
    const { mountId } = mount

    /* 根组件实例逻辑 */
    this.use(takeClient)
    this.use(createRootVueInstanceMiddleware)
    this.use(useLibraryComponentMiddleware)
    this.use(provideClient)

    console.time('async')
    const promiseFn = compose(this.middlewares)
    try {
      await promiseFn(this.context, () => {
        console.log(this.context)
        console.timeEnd('async')
        this.context.vueInstance.mount(mountId)
      })
    } catch (error) {
      console.error(error)
    }
  }
}
