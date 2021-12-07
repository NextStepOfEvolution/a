<template>
  <n-result
    :description="description"
    :status="status"
    :title="title"
  >
    <template #footer>
      <n-button>{{ btnText }}</n-button>
    </template>
  </n-result>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResultStatus',
  props: {
    status: {
      String,
      required: true
    },
    title: {
      String,
      required: true
    },
    btnText: {
      String,
      required: true
    },
    description: {
      String,
      required: true
    }
    /*
      status: '404',
      title: '404 title',
      btnText: 'button',
      description: 'desciption text '
    * */
  }
})
</script>

<style scoped>

</style>
