<template>
  <n-data-table :columns="columns" :data="response" :pagination="pagination" :scroll-x="500"/>
  <n-pagination
    v-model:page="page1"
    v-model:page-size="pageSize1"
    :page-count="50"
  />
</template>

<script>
import { defineComponent, h, ref } from 'vue'
import FDialog from '../../components/UI/FDialog'
import IndexApi from '../../services/indexes'

export default defineComponent({
  name: 'CategoryIndex',
  methods: {},
  setup () {
    const data = ref([])
    const checkedRowKeysRef = ref([])
    let paginationReactive = ref({})
    IndexApi.Index('http://127.0.0.1:8000/api/categories').then((categories) => {
      for (let i = 0; i < categories.data.length; i++) {
        data.value[i] = Object.assign({}, categories.data[i], { key: i })
      }
      paginationReactive = ref({
        page: categories.current_page,
        pageSize: categories.per_page,
        showSizePicker: true,
        pageSizes: [10, categories.total],
        pageCount: 100,
        itemCount: 100,
        endIndex: 100,
        onChange: (page) => {
          paginationReactive.value.page = page
        },
        onPageSizeChange: (pageSize) => {
          paginationReactive.value.pageSize = pageSize
          paginationReactive.value.page = 1
        }
      })
    })
    return {
      response: data.value,
      checkedRowKeys: checkedRowKeysRef,
      columns: [
        {
          title: 'actions',
          key: 'actions',
          width: 200,
          fixed: 'left',
          render (row, index) {
            return [
              h(
                FDialog,
                {
                  button: {
                    size: 'small',
                    type: 'warning',
                    text: 'Edit'
                  },
                  dialog: {
                    type: 'warning',
                    title: 'title',
                    content: 'content',
                    positiveText: 'positiveText',
                    negativeText: 'negativeText',
                    successText: 'successText',
                    errorText: 'errorText'
                  },
                  br: false
                }
              ),
              h(
                FDialog,
                {
                  button: {
                    size: 'small',
                    type: 'error',
                    text: 'Remove'
                  },
                  dialog: {
                    type: 'error',
                    title: 'title',
                    content: 'content',
                    positiveText: 'positiveText',
                    negativeText: 'negativeText',
                    successText: 'successText',
                    errorText: 'errorText'
                  }
                }
              )
            ]
          }
        },
        {
          type: 'selection',
          options: [
            'all',
            'none',
            {
              label: 'Select first 2 rows',
              key: 'f2',
              onSelect: (pageData) => {
                checkedRowKeysRef.value = pageData
                  .map((row) => row.key)
                  .slice(0, 2)
              }
            }
          ],
          disabled (row, index) {
            return row.name === 'Edward King 3'
          }
        },
        {
          title: 'id',
          key: 'id',
          width: 100
        },
        {
          title: 'title',
          key: 'title',
          width: 100
        },
        {
          title: 'image',
          key: 'image',
          width: 100
        },
        {
          title: 'parent_id',
          key: 'parent_id',
          width: 100
        },
        {
          title: 'sphere_id',
          key: 'sphere_id',
          width: 100
        },
        {
          title: 'type',
          key: 'type',
          width: 100
        },
        {
          title: 'url',
          key: 'url',
          width: 100
        },
        {
          title: 'description',
          key: 'description',
          width: 400
        },
        {
          title: 'meta_desc',
          key: 'meta_desc',
          width: 400
        },
        {
          title: 'meta_title',
          key: 'meta_title',
          width: 400
        },
        {
          title: 'created_at',
          key: 'created_at',
          width: 100
        },
        {
          title: 'updated_at',
          key: 'updated_at',
          width: 100
        }
      ],
      pageCount1: 100,
      pageSize1: 10,
      page1: ref(2),
      pagination: {
        page: 1,
        pageSize: 10,
        showSizePicker: true,
        pageSizes: [10, 20, 30, 40, 50],
        pageCount: 100,
        itemCount: 100,
        endIndex: 100
      }
    }
  }
})
</script>

<style scoped>

</style>
