<template>
  <div class="json-schema-react-editor">
    <Button class="import-json-button" type="primary" @click="showModal">
      {{ localProvider('import_json') }}
    </Button>
    <Modal
      :visible="visible"
      :title="localProvider('import_json')"
      @cancel="handleCancel"
    >
      123
    </Modal>
  </div>
</template>

<script>
import { defineComponent, provide, inject, ref } from 'vue'
import localProvider from '/@/packages/components/local-provider'

export default defineComponent({
  setup() {
    provide('localProvider', localProvider)
    // const store = inject('store')
    // console.log(store)
    const visible = ref(false)
    const showModal = () => visible.value = true
    const handleCancel = () => visible.value = false
    return {
      localProvider,

      // modal
      visible,
      showModal,
      handleCancel,
    }
  }
})
</script>
