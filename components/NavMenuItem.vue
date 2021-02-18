<template>
  <div class="h-full">
    <button
      v-if="item.children"
      type="button"
      class="inline-flex items-center mx-2 h-full"
      @mouseover="onHoverMenuItem(item.id)"
      @mouseleave="onHoverMenuItem(null)"
      @click="onClickMenuItem(item.id)"
      @touchstart.prevent="onClickMenuItem(item.id)"
      aria-label="nav-menu-item__btn"
    >
      <span>{{ item.title }}</span>
      <SvgIcon icon="caret-down" class="ml-2 fill-current" />
    </button>

    <nuxt-link v-else :to="item.route" class="h-full inline-flex items-center">
      {{ item.title }}
    </nuxt-link>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon'

export default {
  props: {
    item: {}
  },
  components: {
    SvgIcon
  },
  methods: {
    onHoverMenuItem(menuId) {
      this.$emit('hoveredMenuItem', menuId)
    },
    onClickMenuItem(menuId) {
      this.$emit('clickedMenuItem', menuId)
    }
  }
}
</script>
