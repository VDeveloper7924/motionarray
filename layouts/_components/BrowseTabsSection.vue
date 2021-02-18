<template>
  <div class="uppercase flex justify-center text-center">
    <BrowseTabItem
      v-for="(item, index) in categories"
      :key="`category-${index}`"
      v-bind:category="item"
    />
  </div>
</template>

<script>
import { productCategoryList } from '@/constants'
import BrowseTabItem from './BrowseTabItem'

export default {
  data: () => {
    return {
      categories: [...productCategoryList]
    }
  },
  components: {
    BrowseTabItem
  },
  computed: {
    result: function () {}
  }
}
</script>
