<template>
  <n-space justify="space-between" size="large">
    <img style="max-width: 36px; margin: 10px 0 0 14px;" src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/img/logo.36f34a9f.svg" alt="">
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
// import { EllipsisHorizontal } from '@vicons/ionicons5'

export default {
  name: 'FNavBar',
  // components: { FButton, EllipsisHorizontal },
  data () {
    return {
      type: 'default'
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
