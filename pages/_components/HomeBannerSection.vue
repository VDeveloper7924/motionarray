<template>
  <div
    class="section home-banner header-bg pt-20 px-6 pb-32 md:pt-24 md:pb-64 lg:pb-80 xl:pb-96"
  >
    <h1 class="text-center text-white text-2xl md:text-4xl lg:text-5xl">
      The all-in-one video & filmmakers platform
    </h1>
    <p
      class="text-center text-white text-lg md:max-w-screen-sm md:mx-auto md:text-xl"
    >
      Take projects from concept to completion with unlimited asset downloads,
      exclusive plugins, video collaboration and review tools, and a portfolio
      website builder...all in one membership.
    </p>
  </div>
</template>

<style lang="scss">
.home-banner {
  background-image: url('~assets/images/img/header-monitor-large.png'),
    linear-gradient(90deg, #2f2f2f 0%, #151515 100%);
  background-repeat: no-repeat;
  background-position: center bottom;
}

.header-bg {
  background-size: 315px, 100%;
}

@media (min-width: 768px) {
  .header-bg {
    background-size: 640px, 100%;
  }
}

@media (min-width: 1024px) {
  .header-bg {
    background-size: 768px, 100%;
  }
}

@media (min-width: 1440px) {
  .header-bg {
    background-size: 1024px, 100%;
  }
}
</style>
