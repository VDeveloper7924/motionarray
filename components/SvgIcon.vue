<template>
  <div class="inline-block">
    <img :src="resolveImageUrl(icon)" alt="svg icon" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
      type: String
    }
  },

  methods: {
    resolveImageUrl: (icon) => require(`assets/images/icons/${icon}.svg`)
  }
}
</script>
