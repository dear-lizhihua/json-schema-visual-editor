<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import HelloWorld from './components/HelloWorld.vue'

import jeditor from './jeditor'

const mock = [
  { name: '字符串', mock: '@string' },
  { name: '自然数', mock: '@natural' },
  { name: '浮点数', mock: '@float' },
  { name: '字符', mock: '@character' },
  { name: '布尔', mock: '@boolean' },
  { name: 'url', mock: '@url' },
  { name: '域名', mock: '@domain' },
  { name: 'ip地址', mock: '@ip' },
  { name: 'id', mock: '@id' },
  { name: 'guid', mock: '@guid' },
  { name: '当前时间', mock: '@now' },
  { name: '时间戳', mock: '@timestamp' }
];

const JEditor1 = jeditor({mock: mock})
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
