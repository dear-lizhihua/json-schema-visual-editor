<template>
  <Button class="import-json-button" type="primary" @click="showModal">
    {{ localProvider('import_json') }}
  </Button>
</template>

<script>
import { defineComponent, provide, inject } from 'vue'
import localProvider from '/@/packages/components/local-provider'

export default defineComponent({
  setup() {
    provide('localProvider', localProvider)
    const store = inject('store')
    console.log(store)
    const showModal = () => console.log('showModal')
    return {
      showModal,
      localProvider,
    }
  }
})
</script>
