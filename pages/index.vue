<template>
  <div>
    <HomeBannerSection />
    <HomeCreateSection />
    <HomeCollaborateSection />
    <HomeShareSection />
    <HomeCrewSection />
    <HomeFaqSection />
    <HomeJoinUsSection />
  </div>
</template>

<script>
import HomeBannerSection from './_components/HomeBannerSection.vue'
import HomeCreateSection from './_components/HomeCreateSection.vue'
import HomeCollaborateSection from './_components/HomeCollaborateSection.vue'
import HomeShareSection from './_components/HomeShareSection.vue'
import HomeCrewSection from './_components/HomeCrewSection.vue'
import HomeFaqSection from './_components/HomeFaqSection.vue'
import HomeJoinUsSection from './_components/HomeJoinUsSection.vue'

export default {
  layout: 'MainLayout',
  components: {
    HomeCreateSection,
    HomeBannerSection,
    HomeCollaborateSection,
    HomeShareSection,
    HomeCrewSection,
    HomeFaqSection,
    HomeJoinUsSection
  }
}
</script>
