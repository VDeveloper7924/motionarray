<template>
  <section id="create" class="bg-ma-gray-0 pt-16 pb-20 lg:pb-32">
    <div class="container">
      <header
        class="text-center text-xs text-ma-gray-2 font-bold uppercase"
        style="letter-spacing: 10px"
      >
        Create
      </header>
      <section id="unlimited-marketplace">
        <header
          class="mt-3 text-center text-ma-black-1 text-2xl md:text-4xl lg:mt-4"
        >
          Unlimited Marketplace
        </header>
        <p
          class="mt-2 text-center text-ma-gray-3 text-lg font-medium md:max-w-screen-sm md:mx-auto"
        >
          Download every asset you need, when you need it, from video templates
          and stock footage, to photos, royalty-free music, and sound effects.
        </p>
        <div class="mt-4 flex space-x-4 justify-center md:mt-6">
          <a
            href="/browse"
            class="w-1/2 ma-btn ma-btn--blue px-0 text-sm md:w-32"
            >Explore Marketplace</a
          >
          <button
            type="button"
            class="w-1/2 ma-btn ma-btn--o px-0 border-ma-black-1 text-ma-black-1 text-sm hover:bg-ma-black-1 hover:text-ma-gray-0 md:w-32"
            aria-label="watch-video__btn"
          >
            Watch The Video
          </button>
        </div>
        <img
          src="~assets/images/img/marketplace.png"
          class="mt-10 mx-auto lg:hidden"
          alt="marketplace"
        />
        <img
          src="~assets/images/img/marketplace-large.png"
          class="hidden mt-16 mx-auto max-w-screen-md lg:block"
          alt="marketplace"
        />
        <ul
          class="mt-6 mx-auto sm:flex sm:items-center sm:justify-center lg:mt-8"
        >
          <li class="py-2 px-4 flex items-center justify-center sm:border-r">
            <img
              src="~assets/images/img/aep-colored.svg"
              alt="adobe exchange partner"
            />
            <span class="ml-2 text-sm font-medium">Adobe Exchange Partner</span>
          </li>
          <li class="py-2 px-4 flex items-center justify-center sm:border-r">
            <img
              src="~assets/images/img/resolve-colored.svg"
              alt="resolve-colored"
            />
            <span class="ml-2 text-sm font-medium">DaVinci Resolve</span>
          </li>
          <li class="py-2 px-4 flex items-center justify-center">
            <img src="~assets/images/img/fcp-colored.svg" alt="final cut pro" />
            <span class="ml-2 text-sm font-medium">Final Cut Pro</span>
          </li>
        </ul>
      </section>
      <div class="mt-10 lg:mt-16 lg:flex lg:space-x-8">
        <section
          id="best-premiere-pro-plugins"
          class="bg-white pt-6 px-6 lg:flex lg:flex-col lg:w-1/2 xl:pt-8"
        >
          <header class="text-center text-ma-black-1 text-2xl lg:text-3xl">
            The Best Premiere Pro Plugins
          </header>
          <p
            class="mt-2 text-center text-ma-gray-3 font-medium lg:w-76 lg:mx-auto"
          >
            Add unique touches to your videos with native drag &amp; drop
            plugins built exclusively for our members.
          </p>
          <div class="mt-2 text-center xl:mt-6">
            <a
              href="/plugins/premiere-pro"
              class="inline-flex items-center text-ma-blue-1 text-sm font-bold"
            >
              <span>Learn More</span>
              <div class="inline-block ml-2 fill-current">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12">
                  <path d="M.499 7.274V5.268h13.047v2.006H.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M15.814 6.27l-6.11 5.475-1.335-1.49 4.448-3.984-4.448-3.984L9.704.797l6.11 5.474z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </div>
          <img
            src="~assets/images/img/plugins.png"
            class="mt-10 w-full lg:mt-16 lg:mx-auto lg:w-76"
            alt="plugins"
          />
        </section>
        <section
          id="time-saving-integrations"
          class="mt-4 bg-white pt-6 px-6 lg:mt-0 lg:flex lg:flex-col lg:w-1/2 xl:pt-8"
        >
          <header class="text-center text-ma-black-1 text-2xl lg:text-3xl">
            Time Saving Integrations
          </header>
          <p
            class="mt-2 text-center text-ma-gray-3 font-medium lg:w-76 lg:mx-auto"
          >
            Browse, download, and import everything you need
            <br class="hidden xl:inline" />without leaving your favorite
            applications.
          </p>
          <div class="mt-2 text-center xl:mt-6">
            <a
              href="/integrations/adobe"
              class="inline-flex items-center text-ma-blue-1 text-sm font-bold"
            >
              <span>Learn More</span>
              <div class="inline-block ml-2 fill-current">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12">
                  <path d="M.499 7.274V5.268h13.047v2.006H.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M15.814 6.27l-6.11 5.475-1.335-1.49 4.448-3.984-4.448-3.984L9.704.797l6.11 5.474z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </div>
          <img
            src="~assets/images/img/integrations.png"
            class="mt-10 w-full lg:mt-16 lg:mx-auto lg:w-76"
            alt="integrations"
          />
        </section>
      </div>
    </div>
  </section>
</template>
