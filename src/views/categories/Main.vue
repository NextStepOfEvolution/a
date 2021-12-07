<template>
  <f-main>
    <n-dialog-provider>
    <f-tab :tabTitleIndex="tabTitleIndex" :tabTitleCreate="tabTitleCreate" :create="create">
      <template #index>
          <index />
      </template>
      <template #create>
        <create />
      </template>
    </f-tab>
    </n-dialog-provider>
  </f-main>
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
      create: ref(true),
      reload: ref(false)
    }
  },
  methods: {

  },
  components: {
    Index,
    Create
  }
}
</script>
