<template>
  <section id="share" class="bg-ma-black-0 py-16 px-6 xl:pb-24">
    <header
      class="text-center text-xs text-ma-black-1 font-bold uppercase"
      style="letter-spacing: 10px"
    >
      Share
    </header>
    <section id="pesonalized-video-collaboration">
      <header class="mt-3 text-center text-white text-2xl lg:hidden">
        Build A Portfolio Website
      </header>
      <header class="hidden mt-5 text-center text-white text-4xl lg:block">
        Build A Professional Portfolio Website
      </header>
      <p
        class="mt-2 text-center text-ma-gray-3 text-lg font-medium lg:w-120 lg:mx-auto"
      >
        You make videos, not websites. Showcase your work with ease and win more
        clients, without touching a single line of code.
      </p>
      <div class="mt-4 flex space-x-4 justify-center lg:mt-6">
        <a
          href="/portfolio"
          class="w-1/2 ma-btn ma-btn--blue px-0 text-sm md:w-32"
          >Get Started Now</a
        >
        <button
          type="button"
          class="w-1/2 ma-btn ma-btn--o px-0 border-ma-gray-3 text-ma-gray-3 text-sm bg-ma-gray-3 hover:text-ma-black-0 md:w-32"
          aria-label="watch-video__btn"
        >
          Watch The Video
        </button>
      </div>
      <img
        src="~assets/images/img/portfolio.png"
        class="mt-10 mx-auto sm:max-w-screen-lg lg:hidden"
        alt="portolio"
      />
      <img
        src="~assets/images/img/portfolio-large.png"
        class="hidden mt-16 mx-auto max-w-screen-md lg:block xl:max-w-screen-lg"
        alt="portfolio"
      />
    </section>
  </section>
</template>
