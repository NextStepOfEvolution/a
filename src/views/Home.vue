<template>
  <f-main>
    <f-tab>
      <template #one>
          <f-table :tabTitleOne="tabTitleOne"/>
      </template>
      <template #two>
      </template>
    </f-tab>
  </f-main>
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
