<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-dialog-provider>
        <router-view></router-view>
      </n-dialog-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script>

import { NDialogProvider, NLoadingBarProvider, NMessageProvider } from 'naive-ui'

export default {
  name: 'App',
  components: {
    NMessageProvider,
    NLoadingBarProvider,
    NDialogProvider
  }
}
</script>

<style>

</style>
