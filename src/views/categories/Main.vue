<template>
  <f-tab :tabTitleIndex="tabTitleIndex" :tabTitleCreate="tabTitleCreate" :create="create">
    <template #index>
      <n-message-provider>
        <index />
      </n-message-provider>
    </template>
    <template #create>
      <create />
    </template>
  </f-tab>
</template>
<script>
import Index from './Index'
import Create from './Create'
import { ref } from 'vue'

export default {
  name: 'Main',
  data () {
    return {
      tabTitleIndex: 'Категории',
      tabTitleCreate: 'Создать категорию',
      create: ref(true)
    }
  },
  components: {
    Index,
    Create
  }
}
</script>
