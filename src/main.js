import { Framework } from './framework/main/index'
import Example from './packages/example.vue'

const framework = new Framework()

framework.register('rootVueComponent', Example)

framework.start({
  mount: {
    mountId: '#app'
  }
})
