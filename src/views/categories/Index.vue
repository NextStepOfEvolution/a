<template>
    <n-data-table :columns="columns" :data="response" :pagination="pagination" :scroll-x="2000"/>
</template>

<script>
import axios from 'axios'
import { defineComponent, h } from 'vue'
import FDialog from '../../components/UI/FDialog'

export default defineComponent({
  name: 'CategoryIndex',
  methods: {
    async getCategories (limit) {
      await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: 1,
          _limit: limit
        }
      }).then((response) => {
        const data = []
        for (let i = 0; i < response.data.length; i++) {
          data[i] = Object.assign({}, response.data[i], { key: i })
        }
        this.response = data
        this.pageSize = limit
      })
    }
  },
  mounted () {
    this.getCategories(10)
  },
  data () {
    return {
      response: [],
      columns: [
        {
          title: 'actions',
          key: 'actions',
          width: 20,
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
          title: 'userId',
          key: 'userId',
          width: 20
        },
        {
          title: 'id',
          key: 'id',
          width: 20
        },
        {
          title: 'title',
          key: 'title',
          width: 300
        },
        {
          title: 'body',
          key: 'body',
          width: 500
        }
      ],
      pagination: {
        pageSize: 10
      }
    }
  }
})
</script>

<style scoped>

</style>
