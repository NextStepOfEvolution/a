<template>
  <div>
    <n-button type="primary" @click="warning">Edit</n-button>
  </div>
</template>

<script>
import { useDialog } from "naive-ui";
import { h } from "vue";
import EditForm from "../../components/Forms/EditForm";
export default {
  name: "Edit",
  props: ["postData"],
  mounted() {
    // console.log(this.postData);
  },
  methods: {
    warning() {
      this.dialog.warning({
        title: "Post Edit",
        content: () =>
          h(EditForm, {
            postData: this.postData
          }),
        positiveText: "Sure",
        negativeText: "Not Sure",
        onPositiveClick: () => {
          alert("Sure");
        },
        onNegativeClick: () => {
          alert("Not sure");
        },
      });
    },
  },
  setup() {
    const dialog = useDialog();
    return {
      dialog: dialog
    };
  },
};
</script>

<style scoped>
</style>
