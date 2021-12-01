<template>
  <n-space justify="space-between" size="large">
    <f-button
      :type="type"
      style="margin: 0 10px 5px 1px;"
      @click="$store.state.collapsed === true ? $store.state.collapsed = false : $store.state.collapsed = true"
    >
      open
    </f-button>
    <n-menu v-model:value="$store.state.activeKey" :inverted="$store.state.inverted" :options="navbarOptions"
            mode="horizontal"/>
  </n-space>
</template>

<script>
import FButton from '../../UI/FButton'

export default {
  name: 'FNavBar',
  components: { FButton },
  data () {
    return {
      type: 'error'
    }
  },
  props: {
    navbarOptions: {
      type: Object,
      required: true
    }
  }
}
</script>
