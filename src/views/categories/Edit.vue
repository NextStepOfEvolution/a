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
          v-model:value="model.sphere_id"
          :options="spheres"
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
      <n-button style="float: right" type="primary" @click="CreatePost">
        Submit
      </n-button>
    </n-form>
  </n-space>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useMessage } from 'naive-ui'
import EditsAPI from '../../services/edites'

export default defineComponent({
  name: 'CategoriesEdit',
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  setup (props, context) {
    const message = useMessage()
    const formRef = ref(null)
    // eslint-disable-next-line vue/no-setup-props-destructure
    const model = props.row
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
        model.image = e.file.file
      },
      removeImage () {
        model.image = null
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
            formData.append('_method', 'put')
            formData.append('title', model.title)
            formData.append('description', model.description)
            formData.append('sphere_id', model.sphere_id)
            formData.append('meta_title', model.meta_title)
            formData.append('meta_desc', model.meta_desc)
            formData.append('parent_id', model.parent_id)
            formData.append('type', model.type)
            formData.append('image', model.image)
            EditsAPI.update('http://127.0.0.1:8000/api/categories/' + model.id, formData)
              .then((response) => {
                switch (response.status) {
                  case 400:
                  case 422:
                    for (let i = 0; i <= Object.keys(model).length; i++) {
                      const check = response.data.errors[Object.keys(model)[i]]
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
