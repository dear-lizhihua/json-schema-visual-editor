import { reactive, ref } from 'vue'

import schema from './models/schema'
const store = reactive({
  schema
})

export default (config = {}) => {

  if(config.mock) {
    store.__jsonSchemaMock = config.mock
  }

  store
}
