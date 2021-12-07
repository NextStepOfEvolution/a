<template>
  <n-button type="primary" @click="openDialog">Edit</n-button>
  <div v-if="show" class="dialog" @click.stop="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "../../mixins/index";
import { useDialog } from "naive-ui";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
  mounted() {
    console.log("dialog mounted");
  },
  setup() {
    const dialog = useDialog();
    return {
      warning() {
        dialog.warning(options);
      },
    };
  },
  methods: {
    openDialog(){

    }
  }
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
