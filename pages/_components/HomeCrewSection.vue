<template>
  <section
    id="section-crew"
    class="bg-ma-teal-0 pt-8 px-6 pb-10 lg:pt-16 lg:pb-20"
  >
    <div
      class="text-ma-black-1 text-4xl text-center font-semibold leading-tight"
    >
      Meet some of our crew members.
    </div>

    <div
      class="mt-16 mx-auto max-w-4xl flex-col items-center lg:flex lg:mt-20 xl:max-w-6xl"
    >
      <div
        class="logo-container w-full mx-auto flex flex-wrap items-center justify-center lg:justify-between"
      >
        <div id="warnermedia">
          <img
            src="~assets/images/icons/logo-container/warnermedia.svg"
            alt="warnermedia"
          />
        </div>

        <div id="netflix">
          <img
            src="~assets/images/icons/logo-container/netflix.svg"
            alt="netflix"
          />
        </div>

        <div id="adobe">
          <img
            src="~assets/images/icons/logo-container/adobe.svg"
            alt="adobe"
          />
        </div>

        <div id="abc">
          <img src="~assets/images/icons/logo-container/abc.svg" alt="abc" />
        </div>

        <div id="fox">
          <img src="~assets/images/icons/logo-container/fox.svg" alt="fox" />
        </div>
      </div>

      <div
        class="logo-container w-full mt-6 mx-auto flex flex-wrap items-center justify-center lg:w-4/5 lg:justify-between"
      >
        <div id="bbc">
          <img
            src="~assets/images/icons/logo-container/bbc-large.svg"
            alt="bbc"
          />
        </div>

        <div id="discovery">
          <img
            src="~assets/images/icons/logo-container/discovery.svg"
            alt="discovery"
          />
        </div>

        <div id="sony">
          <img src="~assets/images/icons/logo-container/sony.svg" alt="sony" />
        </div>

        <div id="disney">
          <img
            src="~assets/images/icons/logo-container/disney.svg"
            alt="disney"
          />
        </div>
      </div>
    </div>

    <div
      class="max-w-screen-md mt-16 mx-auto relative overflow-hidden lg:mt-20"
    >
      <div id="app-testimonials">
        <VueSlickCarousel v-bind="settings">
          <div class="w-full">
            <img
              src="~assets/images/icons/logo-container/quote.svg"
              alt="quote"
            />
            <p class="mt-4 text-xl">
              Motion Array has everything. Tons of great assets. Smart review
              tools and fast customer service. Perfection!
            </p>
            <div class="mt-3 flex items-center">
              <div class="rounded-full w-8 h-8 overflow-hidden">
                <img
                  src="~assets/images/img/brian-caiazza.jpg"
                  alt="Brian Caiazza"
                  style="width: inherit; height: inherit; object-fit: cover"
                />
              </div>
              <div class="ml-4">
                <div class="text-ma-black-1 font-bold">Brian Caiazza</div>
                <div class="font-medium">truestudios.biz</div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <img
              src="~assets/images/icons/logo-container/quote.svg"
              alt="quote"
            />
            <p class="mt-4 text-xl">
              Motion Array’s services are something I didn’t think I could find
              in my career as a freelance filmmaker. Motion Array is a one of a
              kind platform for content creators!
            </p>
            <div class="mt-3 flex items-center">
              <div class="rounded-full w-8 h-8 overflow-hidden">
                <img
                  src="~assets/images/img/ryan-khan.jpg"
                  alt="Ryan Khan"
                  style="width: inherit; height: inherit; object-fit: cover"
                />
              </div>
              <div class="ml-4">
                <div class="text-ma-black-1 font-bold">Ryan Khan</div>
                <div class="font-medium">ryanckhanfilms.com</div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <img
              src="~assets/images/icons/logo-container/quote.svg"
              alt="quote"
            />
            <p class="mt-4 text-xl">
              Motion Array is one of the lifelines for my business. They've
              leveled the playing field for the little guy, and if I could give
              them 100 stars I would.
            </p>
            <div class="mt-3 flex items-center">
              <div class="rounded-full w-8 h-8 overflow-hidden">
                <img
                  src="~assets/images/img/william-beebe.jpg"
                  alt="William Beebe"
                  style="width: inherit; height: inherit; object-fit: cover"
                />
              </div>
              <div class="ml-4">
                <div class="text-ma-black-1 font-bold">William Beebe</div>
                <div class="font-medium">Cinematic Videographers, LLC</div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        slidesToShow: 1,
        arrowsClass: 'arrows',
        touchMove: true,
        accessibility: true,
        dots: true
      }
    }
  }
}
</script>

<style lang="scss">
.logo-container img {
  margin-left: auto;
  margin-right: auto;
}

#bbc,
#discovery,
#sony,
#disney,
#warnermedia,
#netflix {
  width: 50%;
}
#adobe,
#abc,
#fox {
  width: 33.333333%;
  margin-top: 30px;
}

#sony,
#disney {
  margin-top: 30px;
}

#warnermedia img {
  width: 107px;
}
#netflix img {
  width: 72px;
}
#adobe img {
  width: 100px;
}
#abc img {
  width: 45px;
}
#fox img {
  width: 55px;
}
#bbc img {
  width: 93px;
}
#discovery img {
  width: 118px;
}
#sony img {
  width: 83px;
}
#disney img {
  width: 98px;
}

.slick-dots {
  bottom: 0px;
  display: flex !important;
  justify-content: flex-end;
  li {
    width: 10px;
    height: 10px;
    margin: 0px 3px;
    &.slick-active {
      button {
        background-color: rgb(74, 74, 74) !important;
      }
    }
    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(185, 205, 212, 1) !important;
      &::before {
        content: none !important;
      }
    }
  }
}

@media (min-width: 640px) {
  #warnermedia img {
    width: 189px;
  }
  #netflix img {
    width: 108px;
  }
  #adobe img {
    width: 140px;
  }
  #abc img {
    width: 70px;
  }
  #fox img {
    width: 78px;
  }
  #bbc img {
    width: 112px;
  }
  #discovery img {
    width: 167px;
  }
  #sony img {
    width: 139px;
  }
  #disney img {
    width: 160px;
  }
}
@media (min-width: 1024px) {
  #warnermedia,
  #netflix,
  #adobe,
  #abc,
  #fox,
  #bbc,
  #discovery,
  #sony,
  #disney {
    width: fit-content;
  }
  #adobe,
  #abc,
  #fox,
  #sony,
  #disney {
    margin-top: 0px;
  }
}
</style>
