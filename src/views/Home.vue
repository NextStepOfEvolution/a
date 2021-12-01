<template>
  <f-tab>
    <template #one>
      <n-message-provider>
        <f-table :tabTitleOne="tabTitleOne"/>
      </n-message-provider>
    </template>
    <template #two>
    </template>
  </f-tab>
</template>

<script>

import FTab from '../components/UI/FTab'
import FTable from '../components/Tables/FTable'

export default {
  name: 'Home',
  data () {
    return {
      tabTitleOne: 'One',
      tabTitleTwo: 'Two'
    }
  },
  components: {
    FTab,
    FTable
  }
}
</script>
