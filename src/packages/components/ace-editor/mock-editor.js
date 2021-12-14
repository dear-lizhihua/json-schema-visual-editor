import * as ace from 'brace'
import 'brace/mode/json'
import 'brace/mode/javascript'

function handleData (data) {
  // 将 undefined/string/null/object 转为字符串
  data = data || ''
  if (typeof data === 'string') {
    return data
  } else if (typeof data === 'object') {
    return JSON.stringify(data, null, '  ')
  }
}

function handleJson (editorProxy, json) {
  const curData = editorProxy.curData
  try {
    curData.text = json
    const obj = JSON.parse(json)
    curData.format = true
    curData.jsonData = obj
  } catch (error) {
    curData.format = error.message
  }
}

export default (options = {}) => {
  let {container, data} = options
  container = container || 'mock-editor'
  data = data || ''
  options.readOnly = options.readOnly || false
  options.fullScreen = options.fullScreen || false

  // 创建 ace 实例
  const editor = ace.edit(container)
  editor.$blockScrolling = Infinity
  editor.getSession().setMode('ace/mode/json')
  if (options.readOnly === true) {
    editor.setReadOnly(true)
    editor.renderer.$cursorLayer.element.style.display = 'none'
  }
  editor.setOptions({useWorker: true})
  editor._fullscreen_yapi = options.fullScreen

  // 创建 ace 代理
  const editorProxy = {
    curData: {},
    getValue: () => editorProxy.curData.text,
    setValue: function (data) {
      console.log(data)
      editor.setValue(handleData(data))
    },
    editor,
    options,
    insertCode: (code) => {
      let pos = editor.selection.getCursor()
      editor.session.insert(pos, code)
    },
  }

  // 设置默认值 string
  editorProxy.setValue(handleData(data))
  // 从 ace 解析出 JSON，并且存放在 ace 代理上
  handleJson(editorProxy, editor.getValue())

  // 清理选中状态
  editor.clearSelection()

  // ace 绑定修改事件
  editor.getSession().on('change', () => {
    handleJson(editorProxy, editor.getValue())
    if (typeof options.onChange === 'function') options.onChange.call(editorProxy, editorProxy.curData)
    editor.clearSelection()
  })

  return editorProxy
}
