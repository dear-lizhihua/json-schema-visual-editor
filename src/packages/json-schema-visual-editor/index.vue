<template>
  123
</template>

<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const store = inject('store')
    console.log(store)
  }
})
</script>
