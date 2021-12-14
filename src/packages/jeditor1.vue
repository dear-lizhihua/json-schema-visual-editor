<script>
import { defineComponent, reactive, provide } from 'vue'
import { JsonSchemaVisualEditor } from './json-schema-visual-editor'

import schema from './models/schema'

export default defineComponent({
  props: {
    mock: Array,
    showEditor: Boolean,
    data: String,
    onChange: Function
  },
  components: {JsonSchemaVisualEditor},
  setup(props) {
    const store = reactive({schema})
    store.__jsonSchemaMock = props.mock

    provide('store', store)

    return {}
  }
})
</script>

<template>
  <JsonSchemaVisualEditor
  />
</template>

<style lang="scss" scoped>

</style>
