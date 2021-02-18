<template>
  <div>
    <Header />
    <BrowseBannerSection />
    <BrowseTabsSection />
    <BrowseSearchSection />
    <div class="filter-content-wrap">
      <div class="filter-content">
        <BrowseFilterSection />
        <Nuxt />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './_components/Header'
import Footer from './_components/Footer'
import BrowseBannerSection from './_components/BrowseBannerSection'
import BrowseTabsSection from './_components/BrowseTabsSection'
import BrowseSearchSection from './_components/BrowseSearchSection'
import BrowseFilterSection from './_components/BrowseFilterSection'

export default {
  components: {
    Header,
    BrowseBannerSection,
    BrowseTabsSection,
    BrowseSearchSection,
    BrowseFilterSection,
    Footer
  }
}
</script>

<style lang="scss">
.filter-content {
  @apply flex justify-between p-6 mx-auto;
  max-width: 1470px;
  &-wrap {
    background-color: #f7f7f7;
  }
}
</style>
