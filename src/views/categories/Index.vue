<template>
  <n-data-table :columns="columns" :data="response" :pagination="pagination" :scroll-x="500"/>
</template>

<script>
import { defineComponent, h, reactive, ref } from 'vue'
import FDialog from '../../components/UI/FDialog'
import IndexApi from '../../services/indexes'
import { useMessage } from 'naive-ui'
import CategoriesEdit from './Edit'

export default defineComponent({
  name: 'CategoryIndex',
  methods: {},
  setup () {
    const message = useMessage()
    const data = reactive([])
    const checkedRowKeysRef = ref([])
    const paginationReactive = ref({})
    IndexApi.index('http://127.0.0.1:8000/api/categories', 1).then((categories) => {
      for (let i = 0; i < categories.data.length; i++) {
        data[i] = Object.assign({}, categories.data[i], { key: i })
      }
      paginationReactive.value = {
        page: categories.current_page,
        pageSize: categories.per_page,
        pageCount: categories.total,
        onChange: (page) => {
          paginationReactive.value.page = page
        }
      }
    })
    return {
      response: data,
      checkedRowKeys: checkedRowKeysRef,
      columns: [
        {
          title: 'actions',
          key: 'actions',
          width: 200,
          fixed: 'left',
          render: function (row, index) {
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
                    title: 'Изменить ' + row.title,
                    content: h(
                      CategoriesEdit,
                      {
                        row
                      }
                    )
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
                    title: 'Удалить',
                    content: 'Вы уверены что хотите удалить "' + row.title + '" ?',
                    positiveText: 'Да',
                    errorText: 'errorText',
                    onPositiveClick: function () {
                      IndexApi.remove('http://127.0.0.1:8000/api/categories/' + row.id).then(() => {
                        message.info('Категория ' + row.title + ' удалена')
                        data.splice(row, 1)
                      }, () => {
                        message.info('Не удалось удалить категорию ' + row.title)
                      })
                    }
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
      pagination: paginationReactive
    }
  }
})
</script>

<style scoped>

</style>
