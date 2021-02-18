<template>
  <transition name="modal">
    <div class="modal" @keyup="handleKeypress">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>

        <div class="modal-body">
          <slot></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
      <div class="modal-mask"></div>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('keyup', this.handleKeypress)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handleKeypress)
  },

  methods: {
    handleKeypress(event) {
      if (event.key === 'Escape') {
        this.$emit('close')
      }
    }
  }
}
</script>
