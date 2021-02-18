<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from './_components/Header.vue'
import Footer from './_components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
