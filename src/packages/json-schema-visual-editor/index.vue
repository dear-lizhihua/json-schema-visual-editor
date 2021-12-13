<template>
  <div class="json-schema-react-editor">
    <Button class="import-json-button" type="primary" @click="showModal">
      {{ localProvider('import_json') }}
    </Button>
    <Modal
      wrapClassName="json-schema-react-editor-import-modal"
      :visible="visible"
      :maskClosable="false"
      :title="localProvider('import_json')"
      @cancel="handleCancel"
    >
      <Tabs
        v-model:activeKey="activeKey"
      >
        <TabPane tab="JSON" key="json">
          <AceEditor data="" mode="json" :onChange="onChange" />
        </TabPane>
        <TabPane tab="JSON-SCHEMA" key="schema">Content of Tab Pane 3</TabPane>
      </Tabs>
      <template #footer>
        <Button key="back" @click="handleCancel">{{localProvider('cancel')}}</Button>
        <Button key="submit" type="primary" @click="handleOk">{{ localProvider('ok') }}</Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { defineComponent, provide, inject, ref } from 'vue'
import localProvider from '/@/packages/components/local-provider'
import AceEditor from '/@/packages/components/ace-editor/ace-editor.vue'

export default defineComponent({
  components: {AceEditor},
  setup() {
    provide('localProvider', localProvider)
    // const store = inject('store')
    // console.log(store)
    const visible = ref(false)
    const showModal = () => visible.value = true
    const handleCancel = () => visible.value = false
    const handleOk = () => visible.value = false
    const activeKey = ref('1')

    const onChange = () => {}
    return {
      localProvider,

      // modal
      visible,
      showModal,
      handleCancel,
      handleOk,

      // tabs
      activeKey,
      onChange,
    }
  }
})
</script>
