<template>
  <div
    ref="domRef"
    :style="{ width: '100%', height: '200px' }"
  >
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import editorProxy from './mock-editor'

function getMode (mode) {
  const ModeMap = {
    javascript: 'ace/mode/javascript',
    json: 'ace/mode/json',
    text: 'ace/mode/text',
    xml: 'ace/mode/xml',
    html: 'ace/mode/html',
  }
  return ModeMap[mode] || ModeMap.text
}

export default defineComponent({
  props: ['mode', 'data', 'onChange', 'readOnly', 'fullScreen'],
  setup (props) {
    const domRef = ref(null)
    onMounted(() => {
      const mockEditor = editorProxy({
        container: domRef.value,
        data: props.data,
        onChange: props.onChange,
        readOnly: props.readOnly,
        fullScreen: props.fullScreen,
      })
      let mode = props.mode || 'ace/mode/javascript'
      mockEditor.editor.getSession().setMode(getMode(mode))
    })
    return {
      domRef,
    }
  },
})
</script>
