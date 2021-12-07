<template>
  <n-breadcrumb>
    <n-breadcrumb-item href="#">
      <n-icon>
        <book-outline/>
      </n-icon>
      Home
    </n-breadcrumb-item>
    <n-breadcrumb-item href="#">
      <n-icon>
        <book-outline/>
      </n-icon>
      Account
    </n-breadcrumb-item>
    <n-breadcrumb-item href="#">
      <n-icon>
        <book-outline/>
      </n-icon>
      Category
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script>
import { defineComponent } from 'vue'
import { BookOutline } from '@vicons/ionicons5'

export default defineComponent({
  name: 'FBreadCrumb',
  components: {
    BookOutline
  }
})
</script>
