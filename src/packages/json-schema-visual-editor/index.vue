<template>
  <div class="json-schema-react-editor">
    <Button class="import-json-button" type="primary" @click="showImportJsonModal">
      {{ localProvider('import_json') }}
    </Button>
    <Modal
      wrapClassName="json-schema-react-editor-import-modal"
      :visible="visible"
      :maskClosable="false"
      :title="localProvider('import_json')"
      @cancel="cancel"
    >
      <Tabs defaultActiveKey="json" @change="changeTab">
        <TabPane tab="JSON" key="json">
          <AceEditor data="" mode="json" :onChange="importJson"/>
        </TabPane>
        <TabPane tab="JSON-SCHEMA" key="schema">
          <AceEditor data="" mode="json" :onChange="importJsonSchema"/>
        </TabPane>
      </Tabs>
      <template #footer>
        <Button key="back" @click="cancel">{{ localProvider('cancel') }}</Button>
        <Button key="submit" type="primary" @click="confirm">{{ localProvider('ok') }}</Button>
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
  setup () {
    provide('localProvider', localProvider)
    const $message = inject('$message')
    // const store = inject('store')
    // console.log(store)
    const visible = ref(false)
    const showImportJsonModal = () => visible.value = true


    const confirm = () => {
      if (importJsonType.value !== 'schema') {
        if (!jsonData.value) {
          return $message.error('json 数据格式有误')
        }
        // let jsonData = GenerateSchema(this.jsonData)
        // this.Model.changeEditorSchemaAction({value: jsonData})
      } else {
        // if (!this.jsonSchemaData) {
        //   return $message.error('json 数据格式有误')
        // }
        // this.Model.changeEditorSchemaAction({value: this.jsonSchemaData})
      }
      visible.value = false
    }
    const cancel = () => visible.value = false

    // JSON 类型：json | json-schema
    const importJsonType = ref('json')
    const changeTab = (value) => importJsonType.value = value

    const jsonData = ref(null)
    const jsonSchemaData = ref(null)
    const importJson = (data) => {
      if (!data.text || data.format !== true) return (jsonData.value = null)
      jsonData.value = data.jsonData
    }
    const importJsonSchema = (data) => {
      if (!data.text || data.format !== true) return (jsonSchemaData.value = null)
      jsonSchemaData.value = data.jsonData
    }
    return {
      localProvider,

      // modal
      visible,
      showImportJsonModal,
      cancel,
      confirm,

      // tabs
      changeTab,
      importJsonType,

      // editor
      importJson,
      importJsonSchema,
    }
  },
})
</script>
