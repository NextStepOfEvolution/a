<template>
  <n-space justify="end" size="large">
    <!--    <f-button-->
    <!--      :type="type"-->
    <!--      style="margin: 10px 0 0 10px;"-->
    <!--      @click="$store.state.collapsed === true ? $store.state.collapsed = false : $store.state.collapsed = true"-->
    <!--    >-->
    <!--      <n-icon>-->
    <!--        <ellipsis-horizontal />-->
    <!--      </n-icon>-->
    <!--    </f-button>-->
    <n-menu
      v-model:value="$store.state.activeKey"
      :inverted="$store.state.inverted"
      :options="navbarOptions"
      mode="horizontal"
    />
  </n-space>
</template>

<script>
// import FButton from '../../UI/FButton'

export default {
  name: 'FNavBar',
  components: { /* FButton */ },
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
