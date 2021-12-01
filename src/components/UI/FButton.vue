<template>
    <n-button :type="type">
      <slot></slot>
    </n-button>
</template>

<script>
export default {
  name: 'FButton',
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
