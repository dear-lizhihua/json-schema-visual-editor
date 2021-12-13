import * as ace from 'brace'
import 'brace/mode/json'
import 'brace/mode/javascript'

export default (options = {}) => {
  let {container, data} = options
  container = container || 'mock-editor'
  const editor = ace.edit(container)
  editor.getSession().setMode('ace/mode/json')

  function handleData (data) {
    data = data || ''
    if (typeof data === 'string') {
      return data
    } else if (typeof data === 'object') {
      return JSON.stringify(data, null, '  ')
    }
  }

  const mockEditor = {
    editor,
    setValue: function (data) {
      editor.setValue(handleData(data))
    },
  }
  mockEditor.setValue(handleData(data))
  return mockEditor
}
