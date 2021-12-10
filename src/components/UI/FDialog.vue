<template>
  <n-button :size="button.size" :type="button.type" style="margin-right: 10px;" @click="handleConfirm">
    {{ button.text }}
  </n-button>
  <br v-if="br">
</template>

<script>
import { defineComponent } from 'vue'
import { useDialog } from 'naive-ui'

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
          errorText: 'errorText',
          onPositiveClick: () => {
            console.log('onPositiveClick')
          },
          onNegativeClick: () => {
            console.log('onNegativeClick')
          }
        }
      }
    },
    br: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const dialog = useDialog()
    return {
      handleConfirm () {
        switch (props.dialog.type) {
          case 'warning':
            dialog.warning({
              title: props.dialog.title,
              content: () => {
                return <span style="font-weight:bold"> {props.dialog.content} </span>
              },
              positiveText: props.dialog.positiveText,
              negativeText: props.dialog.negativeText,
              onPositiveClick: props.dialog.onPositiveClick,
              onNegativeClick: props.dialog.onNegativeClick
            })
            break
          case 'success':
            dialog.success({
              title: props.dialog.title,
              content: () => {
                return <span style="font-weight:bold"> {props.dialog.content} </span>
              },
              positiveText: props.dialog.positiveText,
              onPositiveClick: props.dialog.onPositiveClick
            })
            break
          case 'error':
            dialog.error({
              title: props.dialog.title,
              content: () => {
                return <span style="font-weight:bold"> {props.dialog.content} </span>
              },
              positiveText: props.dialog.positiveText,
              onPositiveClick: props.dialog.onPositiveClick
            })
            break
        }
      }
    }
  }
})
</script>
