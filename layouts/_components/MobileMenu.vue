<template>
  <div class="nav-menu__dropdown nav-menu__dropdown--active" style>
    <div class="nav-dropdown__content xl:mx-auto">
      <div class="relative z-30 bg-ma-gray-0 px-6 py-2 lg:hidden">
        <form action="/browse" class="bg-white h-8 flex items-center">
          <input
            type="text"
            placeholder="Search Marketplace"
            name="q"
            class="h-full w-full pl-4 outline-none"
            style="box-shadow: none; border: 0"
          />
          <button
            type="submit"
            class="h-full w-8 flex-shrink-0 flex items-center justify-center"
            aria-label="nav-search__btn"
          >
            <div class="inline-block fill-current">
              <img src="~assets/images/icons/search.svg" alt="search" />
            </div>
          </button>
        </form>
      </div>
      <div class="relative z-30 pt-5 px-6 lg:p-4 xl:py-8 xl:px-0">
        <div class="lg:justify-between lg:hidden">
          <div id="nav-create" class="flex-1 lg:flex-none lg:w-4/6">
            <div class="flex items-center leading-5">
              <span class="text-ma-gray-3 text-xs font-bold uppercase"
                >Create</span
              >
              <div
                class="ml-4 w-full"
                style="height: 1px; border-top-width: 1px"
              ></div>
            </div>
            <div class="pt-2 pb-6 lg:pb-0 lg:flex lg:space-x-5">
              <div class="py-1 flex lg:block lg:flex-1">
                <div class="flex-1">
                  <div class="flex items-center">
                    <div class="inline-block">
                      <img
                        src="~assets/images/icons/marketplace.svg"
                        alt="marketplace"
                      />
                    </div>
                    <nuxt-link
                      to="/browse"
                      class="ml-3 text-ma-black-1 font-medium"
                    >
                      Unlimited Marketplace
                    </nuxt-link>
                  </div>
                  <div class="text-ma-gray-3 text-xs font-medium">
                    Over 14096 files added in the last 30 days
                  </div>
                </div>
                <div
                  :class="[
                    'lg:mt-5 marketplace-submenu',
                    isOpen ? 'open-menu' : ''
                  ]"
                >
                  <div class="subnav">
                    <div class="py-1 bg-ma-gray-0 flex relative lg:hidden">
                      <button
                        type="button"
                        class="ma-btn h-full absolute top-0 bottom-0"
                        style="left: 10px"
                        @click="openSubMarketPlaceMenu()"
                        aria-label="nav-submarket__btn"
                      >
                        <div class="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="12"
                            fill="none"
                          >
                            <path
                              stroke="#A4A4A4"
                              stroke-width="2"
                              d="M7 1L2 6l5 5"
                            />
                          </svg>
                        </div>
                      </button>
                      <div class="mx-auto">
                        <div class="flex items-center justify-center">
                          <div class="inline-block">
                            <img
                              src="~assets/images/icons/marketplace.svg"
                              alt="marketplace"
                            />
                          </div>
                          <nuxt-link
                            to="/browse"
                            class="ml-2 text-ma-black-1 font-medium"
                          >
                            Unlimited Marketplace
                          </nuxt-link>
                        </div>
                        <div class="text-xs text-ma-gray-3 font-medium">
                          Over 14096 files added in the last 30 days
                        </div>
                      </div>
                    </div>
                    <div class="pt-5 pb-10 lg:py-0">
                      <div class="mt-3 lg:mt-0 lg:flex">
                        <div class="space-y-4 flex-1">
                          <div
                            class="lg:space-y-2"
                            v-for="(menuItem, index) in menuItems_1"
                            :key="index"
                          >
                            <a :href="menuItem.link" class="group__title">{{
                              menuItem.name
                            }}</a>
                            <template
                              v-for="(subMenuItem,
                              subIndex) in menuItem.subMenus"
                            >
                              <a
                                class="group__link"
                                :href="subMenuItem.link"
                                :key="subIndex"
                                >{{ subMenuItem.name }}</a
                              >
                            </template>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 px-6 lg:mt-3 lg:px-0">
                        <div
                          class="pt-3 flex items-center justify-center border-t border-ma-gray-1 lg:justify-start"
                        >
                          <div
                            class="font-bold uppercase"
                            style="font-size: 10px"
                          >
                            <div class="inline-block text-ma-gray-3">
                              Can't find what you need?
                            </div>
                            <div class="inline-flex items-center">
                              <a
                                href="/requests"
                                class="inline-block text-ma-black-0"
                                >Request an asset</a
                              >
                              <div class="inline-block ml-1">
                                <img
                                  src="~assets/images/icons/request-alt.svg"
                                  alt="request"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="lg:hidden"
                  @click="openSubMarketPlaceMenu()"
                  aria-label="nav-submarket__btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    fill="none"
                  >
                    <path stroke="#A4A4A4" stroke-width="2" d="M1 1l5 5-5 5" />
                  </svg>
                </button>
              </div>
              <div class="lg:flex-1">
                <div class="py-1">
                  <div>
                    <div class="flex items-center">
                      <div class="inline-block">
                        <img
                          src="~assets/images/icons/plugins.svg"
                          alt="plus"
                        />
                      </div>
                      <a
                        href="/plugins/premiere-pro"
                        class="ml-3 text-ma-black-1 font-medium"
                        >Plugins</a
                      >
                    </div>
                    <div class="text-ma-gray-3 text-xs font-medium">
                      Included with your paid membership
                    </div>
                  </div>
                </div>
                <div class="py-1" style>
                  <div>
                    <div class="flex items-center">
                      <div class="inline-block">
                        <img
                          src="~assets/images/icons/integrations.svg"
                          alt="integrations"
                        />
                      </div>
                      <a
                        href="/integrations/adobe"
                        class="ml-3 text-ma-black-1 font-medium"
                        >Integrations</a
                      >
                    </div>
                    <div class="text-ma-gray-3 text-xs font-medium">
                      Included with your paid membership
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:ml-5">
            <div id="nav-collaborate">
              <div class="flex items-center leading-5">
                <span class="text-ma-gray-3 text-xs font-bold uppercase"
                  >Collaborate</span
                >
                <div
                  class="ml-4 w-full"
                  style="height: 1px; border-top-width: 1px"
                ></div>
              </div>
              <div class="pt-2 pb-6">
                <div class="py-1">
                  <div>
                    <div class="flex items-center">
                      <div class="inline-block">
                        <img
                          src="~assets/images/icons/review.svg"
                          alt="review"
                        />
                      </div>
                      <a href="/review" class="ml-3 text-ma-black-1 font-medium"
                        >Video Collaboration</a
                      >
                    </div>
                    <div class="text-ma-gray-3 text-xs font-medium">
                      Included with your paid membership
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="nav-share">
              <div class="flex items-center leading-5">
                <span class="text-ma-gray-3 text-xs font-bold uppercase"
                  >Share</span
                >
                <div
                  class="ml-4 w-full"
                  style="height: 1px; border-top-width: 1px"
                ></div>
              </div>
              <div class="pt-2 pb-4">
                <div class="py-1">
                  <div>
                    <div class="flex items-center">
                      <div class="inline-block">
                        <img
                          src="~assets/images/icons/portfolio.svg"
                          alt="portfolio"
                        />
                      </div>
                      <a
                        href="/portfolio"
                        class="ml-3 text-ma-black-1 font-medium"
                        >Portfolio Builder</a
                      >
                    </div>
                    <div class="text-ma-gray-3 text-xs font-medium">
                      Included with your paid membership
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-2 pb-4">
                <div class="py-1">
                  <div>
                    <div class="flex items-center">
                      <div class="inline-block">
                        <img
                          src="~assets/images/icons/post-play.svg"
                          alt="post-play"
                        />
                      </div>
                      <a
                        href="/post-pro"
                        class="ml-3 text-ma-black-1 font-medium"
                        >Post.pro Video Community</a
                      >
                    </div>
                    <div class="text-ma-gray-3 text-xs font-medium">
                      Included with your paid membership
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-1 flex lg:py-0 lg:hidden">
          <div class="flex-1">
            <div class="flex items-center">
              <div class="inline-block">
                <img src="~assets/images/icons/learn.svg" alt="learn" />
              </div>
              <a href="/learn" class="ml-3 text-ma-black-1 font-medium"
                >Learn</a
              >
            </div>
            <div class="text-ma-gray-3 text-xs font-medium">
              Learn how to make amazing videos &amp; films
            </div>
          </div>
          <button type="button" class="lg:hidden" @click="openLearnSubMenu()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              fill="none"
              aria-label="nav-learn-menu__btn"
            >
              <path stroke="#A4A4A4" stroke-width="2" d="M1 1l5 5-5 5" />
            </svg>
          </button>
          <div
            :class="[
              'subnav learn-mobile-menu',
              isOpenLearn ? 'open-menu' : ''
            ]"
          >
            <div class="py-1 bg-ma-gray-0 flex relative lg:hidden">
              <button
                type="button"
                class="ma-btn h-full absolute top-0 bottom-0"
                style="left: 10px"
                @click="openLearnSubMenu()"
                aria-label="nav-learn-menu__btn"
              >
                <div class="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    fill="none"
                  >
                    <path stroke="#A4A4A4" stroke-width="2" d="M7 1L2 6l5 5" />
                  </svg>
                </div>
              </button>
              <div class="mx-auto">
                <div class="flex items-center justify-center">
                  <div class="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path
                        stroke="#67C7D8"
                        stroke-width="2"
                        d="M7.55 1.9l.45.22.45-.23L10.24 1H15v13H1V1h4.76l1.8.9z"
                      />
                      <path fill="#67C7D8" d="M7 2h2v14H7z" />
                    </svg>
                  </div>
                  <div class="ml-2 text-ma-black-1 font-medium">Learn</div>
                </div>
                <div class="text-xs text-ma-gray-3 font-medium">
                  Learn how to make amazing videos &amp; films
                </div>
              </div>
            </div>
            <div
              class="pt-5 pb-10 lg:pb-0 lg:flex lg:flex-wrap lg:-mt-5 xxl:flex-no-wrap xxl:mt-0 xxl:justify-between"
            >
              <div
                class="lg:w-1/4 lg:mt-5 lg:space-y-2 xxl:w-auto xxl:mt-0"
                v-for="(menuItem, index) in menuItems_2"
                :key="index"
              >
                <a href="/learn/after-effects" class="group__title">
                  <div class="inline-block">
                    <img
                      v-bind:src="getImgUrl(menuItem.iconName)"
                      alt="group"
                    />
                  </div>
                  <div class="ml-2">{{ menuItem.name }}</div>
                </a>
                <a
                  :href="submenuItem.link"
                  v-for="(submenuItem, index) in menuItem.subMenus"
                  :key="index"
                  class="group__link"
                  >{{ submenuItem.name }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="py-1 flex lg:hidden">
          <div class="flex-1">
            <div class="flex items-center">
              <div class="inline-block">
                <img src="~assets/images/icons/pricing.svg" alt="pricing" />
              </div>
              <span class="ml-3 text-ma-black-1 font-medium">Pricing</span>
            </div>
            <div class="text-ma-gray-3 text-xs font-medium">
              Everything starts with a good plan
            </div>
          </div>
        </div>
        <div class="pt-8 pb-6 lg:hidden">
          <div class="flex space-x-4">
            <a
              href="/account/login"
              class="flex-1 nav-menu__btn"
              style="display: flex"
              >Log In</a
            >
            <a
              href="/pricing"
              class="flex-1 nav-menu__btn nav-menu__btn--cta"
              style="display: flex"
              >Join Free</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  data() {
    const submenus = [
      {
        name: 'Tutorial',
        link: '#'
      },
      {
        name: 'Resources',
        link: '#'
      },
      {
        name: 'News',
        link: '#'
      },
      {
        name: 'Troubleshooting',
        link: '#'
      }
    ]
    return {
      isOpen: false,
      isOpenLearn: false,
      menuItems_1: [
        {
          name: 'Adobe after effects',
          link: '#',
          subMenus: [
            {
              name: 'After Effects Template',
              link: '#'
            },
            {
              name: 'After Effects Presets',
              link: '#'
            }
          ]
        },
        {
          name: 'Adobe premiere pro',
          link: '#',
          subMenus: [
            {
              name: 'Premiere pro template',
              link: '#'
            },
            {
              name: 'Premiere pro presets',
              link: '#'
            },
            {
              name: 'Motion Graphics tempalte',
              link: '#'
            }
          ]
        },
        {
          name: 'Adobe premiere rush',
          link: '#',
          subMenus: [
            {
              name: 'premiere rush Template',
              link: '#'
            }
          ]
        },
        {
          name: 'davinci resolve',
          link: '#',
          subMenus: [
            {
              name: 'DaVinci Resolve Templates',
              link: '#'
            },
            {
              name: 'DaVinci Resolve Macros',
              link: '#'
            }
          ]
        },
        {
          name: 'final cut pro',
          link: '#',
          subMenus: [
            {
              name: 'final cut pro templates',
              link: '#'
            }
          ]
        },
        {
          name: 'images',
          link: '#',
          subMenus: [
            {
              name: 'stock photos',
              link: '#'
            }
          ]
        },
        {
          name: 'stock audio',
          link: '#',
          subMenus: [
            {
              name: 'royalty free music',
              link: '#'
            },
            {
              name: 'sound effects',
              link: '#'
            }
          ]
        },
        {
          name: 'stock video',
          link: '#',
          subMenus: [
            {
              name: 'Stock video',
              link: '#'
            },
            {
              name: 'Stock Motion Graphics',
              link: '#'
            }
          ]
        }
      ],
      menuItems_2: [
        {
          name: 'After effects',
          iconName: 'after-effects',
          link: '#',
          subMenus: submenus
        },
        {
          name: 'Premiere pro',
          iconName: 'premiere-pro',
          link: '#',
          subMenus: submenus
        },
        {
          name: 'davinci resolve',
          iconName: 'resolve',
          link: '#',
          subMenus: submenus
        },
        {
          name: 'Final cut pro',
          iconName: 'final-cut-pro',
          link: '#',
          subMenus: submenus
        },
        {
          name: 'motion array',
          iconName: 'motionarray',
          link: '#',
          subMenus: submenus
        },
        {
          name: 'filmmaking',
          iconName: 'filmmaking',
          link: '#',
          subMenus: submenus
        },
        {
          name: 'motion design',
          iconName: 'motion-design',
          link: '#',
          subMenus: submenus
        },
        {
          name: 'post production',
          iconName: 'post-production',
          link: '#',
          subMenus: submenus
        },
        {
          name: 'business',
          iconName: 'business',
          link: '#',
          subMenus: submenus
        }
      ]
    }
  },
  computed: {
    mobileMenuStatus() {
      return this.$store.state.isOpenMobileMenu
    }
  },
  methods: {
    getImgUrl(icon) {
      var images = require.context(
        '../../assets/images/icons/',
        false,
        /\.svg$/
      )
      return images('./' + icon + '.svg')
    },
    openSubMarketPlaceMenu() {
      this.isOpen = !this.isOpen
    },
    openLearnSubMenu() {
      this.isOpen = false
      this.isOpenLearn = !this.isOpenLearn
    }
  },
  watch: {
    mobileMenuStatus: function (val) {
      if (!val) {
        this.isOpen = false
        this.isOpenLearn = false
      }
    }
  }
}
</script>
<style lang="scss">
#nav-menu .nav-menu__dropdown {
  position: fixed;
  width: 100%;
  z-index: 20;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100% - 50px);
  overscroll-behavior-y: none;
  transform: translateX(100%);
  transition: transform 150ms ease-in;
  background: #fff;
}

#nav-menu .learn-mobile-menu,
#nav-menu .marketplace-submenu {
  position: fixed;
  width: 100%;
  z-index: 20;
  top: 0px;
  left: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  overscroll-behavior-y: none;
  transform: translateX(100%);
  transition: transform 150ms ease-in;
  background: #fff;
}
</style>
