<template>
  <n-data-table :columns="columns" :data="response" :pagination="pagination" :scroll-x="2000"/>
</template>

<script>
import axios from 'axios'
import { defineComponent, h } from 'vue'
import FButton from '../../components/UI/FButton'

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
                FButton,
                {
                  size: 'small',
                  type: 'primary',
                  onClick: () => {
                    confirm('are you shure?')
                  }
                },
                { default: () => 'Edit' }
              ),
              h(
                FButton,
                {
                  size: 'small',
                  type: 'primary',
                  onClick: (e) => {
                    if (confirm('are you shure?')) {
                      this.removeRow(row, index)
                    }
                  }
                },
                {
                  default: () => 'Remove'
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
