<template>
  <n-form>
    <n-space vertical>
      <n-space>
        <n-form-item label="Post ID">
          <n-input
            type="number"
            v-model:value="postData.id"
            :disabled="false"
          />
        </n-form-item>
        <n-form-item label="User ID">
          <n-input
            type="number"
            v-model:value="postData.userId"
            :disabled="false"
          />
        </n-form-item>
      </n-space>
        <n-form-item label="Title">
          <n-input
            type="text"
            v-model:value="postData.title"
            :disabled="false"
          />
        </n-form-item>
        <n-form-item label="Body">
          <n-input
            type="textarea"
            v-model:value="postData.body"
            :disabled="false"
          />
        </n-form-item>
    </n-space>
  </n-form>
</template>

<script>
export default {
  name: "EditForm",
  props: ["postData"],
  mounted() {

  },
};
</script>

<style>
</style>
