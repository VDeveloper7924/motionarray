<template>
  <div :class="classes" class="p-2 text-base">
    <div class="text-white text-center" v-html="message"></div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },

    level: {
      type: String,
      required: false,
      default: () => 'error',
      validator: (prop) => ['error', 'success', 'info'].includes(prop)
    }
  },

  computed: {
    classes() {
      return {
        'bg-ma-red-1': this.level == 'error',
        'bg-ma-blue-1': this.level == 'info',
        'bg-ma-green-2': this.level == 'success'
      }
    }
  }
}
</script>
