<template>
  <n-menu
    v-model:value="$store.state.activeKey"
    :collapsed="$store.state.collapsed"
    :collapsed-icon-size="22"
    :collapsed-width="64"
    :inverted="$store.state.inverted"
    :options="menuOptions"
  />
</template>

<script>

export default {
  name: 'FMenu',
  props: {
    menuOptions: {
      type: Object,
      required: true
    }
  }
}
</script>
