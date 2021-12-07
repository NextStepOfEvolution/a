<template>
  <n-data-table
    :columns="columns"
    :data="response"
    :pagination="pagination"
    :scroll-x="2000"
  />
</template>

<script>
import axios from "axios";
import { defineComponent, h, ref } from "vue";
import FButton from "../../components/UI/FButton";
import Edit from "../../views/categories/Edit";

export default defineComponent({
  name: "CategoryIndex",
  methods: {
    async getCategories(limit) {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: 1,
            _limit: limit,
          },
        })
        .then((response) => {
          const data = [];
          for (let i = 0; i < response.data.length; i++) {
            data[i] = Object.assign({}, response.data[i], { key: i });
          }
          this.response = data;
          this.pageSize = limit;
        });
    },
  },
  mounted() {
    this.getCategories(10);
  },
  // provide: {
  //   postData: {
  //     id: 1,
  //     userId: 1,
  //     title: 1,
  //     body: 1,
  //   },
  // },
  data() {
    return {
      response: [],
      columns: [
        {
          title: "actions",
          key: "actions",
          width: 20,
          fixed: "left",
          render(row, index) {
            return [
              h(
                Edit,
                {
                  size: "small",
                  type: "warning",
                  style: "margin-right: 10px",
                  postData: row,
                },
                { default: () => "Edit" }
              ),
              h(
                FButton,
                {
                  size: "small",
                  type: "error",
                  onClick: (e) => {},
                },
                {
                  default: () => "Remove",
                }
              ),
            ];
          },
        },
        {
          title: "userId",
          key: "userId",
          width: 20,
        },
        {
          title: "id",
          key: "id",
          width: 20,
        },
        {
          title: "title",
          key: "title",
          width: 300,
        },
        {
          title: "body",
          key: "body",
          width: 500,
        },
      ],
      pagination: {
        pageSize: 10,
      },
    };
  },
});
</script>

<style scoped>
</style>
