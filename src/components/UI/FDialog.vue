<template>
  <n-button :size="button.size" :type="button.type" style="margin-right: 10px" @click="handleConfirm">{{ button.text }}
  </n-button>
  <br v-if="br">
</template>

<script>
import { defineComponent } from 'vue'
import { useDialog, useMessage } from 'naive-ui'

export default defineComponent({
  props: {
    button: {
      type: Object,
      required: true,
      default: () => {
        return {
          size: 'small',
          type: 'primary',
          text: 'Button'
        }
      }
    },
    dialog: {
      type: Object,
      required: true,
      default: () => {
        return {
          type: 'warning',
          title: 'title',
          content: 'content',
          positiveText: 'positiveText',
          negativeText: 'negativeText',
          successText: 'successText',
          errorText: 'errorText'
        }
      }
    },
    br: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const message = useMessage()
    const dialog = useDialog()
    return {
      handleConfirm () {
        switch (props.dialog.type) {
          case 'warning':
            dialog.warning({
              title: props.dialog.title,
              content: props.dialog.content,
              positiveText: props.dialog.positiveText,
              negativeText: props.dialog.negativeText,
              onPositiveClick: () => {
                message.success(props.dialog.successText)
              },
              onNegativeClick: () => {
                message.error(props.dialog.errorText)
              }
            })
            break
          case 'success':
            dialog.success({
              title: props.dialog.title,
              content: props.dialog.content,
              positiveText: props.dialog.positiveText,
              onPositiveClick: () => {
                message.success(props.dialog.successText)
              }
            })
            break
          case 'error':
            dialog.error({
              title: props.dialog.title,
              content: props.dialog.content,
              positiveText: props.dialog.positiveText,
              onPositiveClick: () => {
                message.error(props.dialog.errorText)
              }
            })
            break
        }
      }
    }
  }
})
</script>
