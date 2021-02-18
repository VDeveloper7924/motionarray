<template>
  <form id="nav-search" class="nav-search" action="/browse">
    <transition
      enter-active-class="transition-transform duration-200"
      leave-active-class="transition-transform duration-200"
      enter-class="scale-x-0"
      enter-to-class="scale-x-100"
      leave-class="scale-x-100"
      leave-to-class="scale-x-0"
    >
      <input
        type="text"
        class="nav-search__input transform origin-right"
        placeholder="Search Marketplace"
        name="q"
      />
    </transition>
    <button class="nav-search__btn" type="button" aria-label="nav-search__btn">
      <SvgIcon icon="search" class="fill-current" />
    </button>
  </form>
</template>

<script>
import SvgIcon from './SvgIcon'
export default {
  props: {
    expand: {
      type: Boolean,
      default: () => false
    }
  },

  components: {
    SvgIcon
  },

  data() {
    return {
      query: null
    }
  },

  mounted() {
    const closeHandler = (evt) => {
      if (this.$el.contains(evt.target)) {
        return
      }

      this.query = null
      this.$emit('update:expand', false)
    }

    this.$watch('expand', (newVal, oldVal) => {
      this.$nextTick(() => {
        if (newVal) {
          this.$refs.input.focus()
          document.body.addEventListener('click', closeHandler)
        } else {
          document.body.removeEventListener('click', closeHandler)
        }
      })
    })
  }
}
</script>
