<template>
  <n-card>
    <n-tabs default-value="index" size="large">
      <!--tab 1-->
      <n-tab-pane name="index" :tab="tabTitleIndex">
        <slot name="index"></slot>
      </n-tab-pane>
      <!--tab 2-->
      <n-tab-pane name="create" :tab="tabTitleCreate" v-if="create">
        <slot name="create"></slot>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script>
export default {
  name: 'FTab',
  props: {
    tabTitleIndex: { String },
    tabTitleCreate: { String },
    create: {}
  }
}
</script>

<style scoped>

</style>
