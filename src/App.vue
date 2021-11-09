<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import HelloWorld from './components/HelloWorld.vue'

import JEditor1 from './components/JEditor1.vue'
export default {
  components: {JEditor1},
  setup() {
    const onChange = e => {
      console.log('changeValue', e);
    }
    return {
      onChange,
    }
  }
}
</script>

<template>
  <div>
    <a target="_blank" href="https://github.com/YMFE/json-schema-editor-visual">
      <h1>JSON-Schema-Editor</h1>
    </a>
    <p :style="{ fontSize: '16px' }">
      A json-schema editor of high efficient and easy-to-use, base on Vue.
      <a target="_blank" href="https://github.com/YMFE/json-schema-editor-visual">Github</a>
    </p>
    <br />
    <h3>
      该工具已被用于开源接口管理平台：
      <a target="_blank" href="https://github.com/ymfe/yapi">YApi</a>
    </h3>

    <br />
    <h2>Example:</h2>
    <hr />

    <JEditor1
      :showEditor="true"
      :isMock="false"
      @onChange="onChange"
    />

  </div>
</template>

<style>
</style>
