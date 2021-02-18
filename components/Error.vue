<template>
  <div class="bg-ma-red-1 p-2 mb-2 text-base" v-if="error">
    <div class="text-white text-center">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true
    }
  }
}
</script>
