<template>
  <n-space vertical>
    <!--<n-switch v-model:value="updateDisabled" />-->
    <n-form
      ref="formRef"
      :disabled="updateDisabled"
      :inverted="$store.state.inverted"
      :label-width="160"
      :model="model"
      :rules="rules"
      :style="{
        maxWidth: '640px'
      }"
      label-placement="top"
    >
      <n-form-item label="Title" path="title">
        <n-input v-model:value="model.title" placeholder="Title"/>
      </n-form-item>

      <n-form-item label="Description" path="description">
        <n-input v-model:value="model.description" clearable placeholder="description" round type="textarea"/>
      </n-form-item>

      <n-form-item label="Spheres" path="sphere_id">
        <n-select
          :options="spheres"
          v-model:value="model.sphere_id"
          clearable
          filterable
          placeholder="sphere"
          round/>
      </n-form-item>

      <n-form-item label="Meta Title" path="meta_title">
        <n-input v-model:value="model.meta_title" placeholder="Meta Title"/>
      </n-form-item>

      <n-form-item label="Meta Description" path="meta_desc">
        <n-input v-model:value="model.meta_desc" clearable placeholder="Meta Description" round type="textarea"/>
      </n-form-item>

      <n-form-item label="Parents" path="parent_id">
        <n-select
          v-model:value="model.parent_id"
          :options="parents"
          clearable
          filterable
          placeholder="parent"
          round
        />
      </n-form-item>

      <n-form-item label="Type" path="type">
        <n-select
          v-model:value="model.type"
          :options="types"
          clearable
          filterable
          placeholder="type"
          round
        />
      </n-form-item>

      <n-form-item label="Image" path="image">
        <n-upload accept=".png, .jpg, .jpeg" @change="uploadImage($event)" @remove="removeImage">
          <n-button>Upload file</n-button>
        </n-upload>
      </n-form-item>
      <n-button type="primary" @click="CreatePost">
        Submit
      </n-button>
    </n-form>
  </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue'
import CreatesAPI from '../../services/creates'
import { useMessage } from 'naive-ui'
// import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CategoriesCreate',
  setup: function () {
    const message = useMessage()
    const formRef = ref(null)
    // const router = useRouter()
    const model = ref({
      title: null,
      description: null,
      sphere_id: null,
      meta_title: null,
      meta_desc: null,
      parent_id: null,
      type: null,
      image: null
    })
    return {
      spheres: [
        {
          label: 'Drive My Car',
          value: 1
        }
      ],
      parents: [
        {
          label: 'Drive My Car',
          value: 1
        }
      ],
      types: [
        {
          label: 'Norwegian Wood',
          value: 1
        }
      ],
      updateDisabled: ref(false),
      formRef,
      uploadImage (e) {
        model.value.image = e.file.file
      },
      removeImage () {
        model.value.image = null
      },
      model,
      rules: {
        title: {
          required: true,
          message: 'Please input title',
          trigger: 'blur'
        },
        meta_desc: {
          required: false
        },
        description: {
          required: true,
          message: 'Please input description',
          trigger: 'blur'
        }
      },
      CreatePost (e) {
        e.preventDefault()
        formRef.value.validate((errors) => {
          if (!errors) {
            const formData = new FormData()
            formData.append('title', model.value.title)
            formData.append('description', model.value.description)
            formData.append('sphere_id', model.value.sphere_id)
            formData.append('meta_title', model.value.meta_title)
            formData.append('meta_desc', model.value.meta_desc)
            formData.append('parent_id', model.value.parent_id)
            formData.append('type', model.value.type)
            formData.append('image', model.value.image)
            CreatesAPI.create('http://127.0.0.1:8000/api/categories', formData)
              .then((response) => {
                switch (response.status) {
                  case 400:
                  case 422:
                    for (let i = 0; i <= Object.keys(model.value).length; i++) {
                      const check = response.data.errors[Object.keys(model.value)[i]]
                      if (check !== undefined) {
                        message.error(check[0])
                      }
                    }
                    break
                  case 200:
                    document.querySelector('div[data-name="index"]').click()
                    // router.push({ name: 'CategoriesMain' })
                    break
                  default:
                    message.error('Что-то пошло не так попробуйте позже')
                    break
                }
              })
          }
        })
      }
    }
  }
})
</script>
