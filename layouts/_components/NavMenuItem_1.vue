<template>
  <div
    class="navmenu-item z-30 pt-5 px-6 lg:p-4 dropdown-menu absolute hidden text-gray-700 pt-1"
  >
    <div class="lg:justify-between lg:flex">
      <div id="nav-create" class="flex-1 lg:flex-none lg:w-4/6">
        <div class="flex items-center leading-5">
          <span class="text-ma-gray-3 text-xs font-bold uppercase">Create</span>
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
                    src="~assets/images/icons/nav_menu/nav_menu_market_place.svg"
                    alt="marketplace"
                  />
                </div>
                <nuxt-link to="/browse" class="ml-3 text-ma-black-1 font-medium"
                  >Unlimited Marketplace</nuxt-link
                >
              </div>
              <div class="text-ma-gray-3 text-xs font-medium">
                Over 13974 files added in the last 30 days
              </div>
            </div>
            <div class="lg:mt-5">
              <div class="subnav" style>
                <div class="pt-5 pb-10 lg:py-0">
                  <div class="mt-3 lg:mt-0 lg:flex">
                    <div class="space-y-4 flex-1">
                      <div
                        class="lg:space-y-2"
                        v-for="(menuItem, index) in menuItems_1"
                        :key="index"
                      >
                        <a :href="menuItem.link" class="group__title">
                          {{ menuItem.name }}
                        </a>
                        <a
                          :href="submenuItem.link"
                          class="group__link"
                          v-for="(submenuItem, index) in menuItem.subMenus"
                          :key="index"
                          >{{ submenuItem.name }}</a
                        >
                      </div>
                    </div>
                    <div class="space-y-4 flex-1">
                      <div
                        class="lg:space-y-2"
                        v-for="(menuItem, index) in menuItems_2"
                        :key="index"
                      >
                        <a :href="menuItem.link" class="group__title">
                          {{ menuItem.name }}
                        </a>
                        <a
                          :href="submenuItem.link"
                          class="group__link"
                          v-for="(submenuItem, index) in menuItem.subMenus"
                          :key="index"
                          >{{ submenuItem.name }}</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 px-6 lg:mt-3 lg:px-0">
                    <div
                      class="pt-3 flex items-center justify-center border-t border-ma-gray-1 lg:justify-start"
                    >
                      <div class="font-bold uppercase" style="font-size: 10px">
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
          </div>
          <div class="lg:flex-1">
            <div class="py-1">
              <div>
                <div class="flex items-center">
                  <div class="inline-block">
                    <img src="~assets/images/icons/plugins.svg" alt="plugin" />
                  </div>
                  <a
                    href="/plugins/premiere-pro"
                    class="ml-3 text-ma-black-1 font-medium"
                    >Plugins</a
                  >
                  <a
                    href="/plugins/premiere-pro"
                    class="hidden ml-auto text-xs text-ma-blue-1 font-bold lg:block"
                    >Explore Plugins</a
                  >
                </div>
                <div class="text-ma-gray-3 text-xs font-medium">
                  Included with your paid membership
                </div>
              </div>
              <div class="hidden lg:flex lg:mt-5">
                <div class="flex-shrink-0 w-20">
                  <img
                    src="~assets/images/img/nav_menu/nav_menu_plugin.png"
                    alt="The Best Premiere Pro Plugins"
                  />
                </div>
                <div class="ml-3">
                  <div class="image-title">The Best Premiere Pro Plugins</div>
                  <div class="text-xs text-ma-gray-3 font-medium">
                    Quickly &amp; easily enhance your videos with unique
                    transitions and effects.
                  </div>
                </div>
              </div>
            </div>
            <div class="py-1" style="margin-top: 57.3594px">
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
                  <a
                    href="/integrations/adobe"
                    class="hidden ml-auto text-xs text-ma-blue-1 font-bold lg:block"
                    >Explore Integrations</a
                  >
                </div>
                <div class="text-ma-gray-3 text-xs font-medium">
                  Included with your paid membership
                </div>
              </div>
              <div class="hidden lg:flex lg:mt-5">
                <div class="flex">
                  <div class="flex-shrink-0 w-20">
                    <img
                      src="~assets/images/img/nav_menu/nav_menu_integration.png"
                      alt="Marketplace Extension for Adobe"
                    />
                  </div>
                  <div class="ml-3">
                    <div class="image-title">
                      Marketplace Extension for Adobe
                    </div>
                    <div class="text-xs text-ma-gray-3 font-medium">
                      Download and import every asset you need right inside of
                      your Adobe applications.
                    </div>
                  </div>
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
                    <img src="~assets/images/icons/review.svg" alt="review" />
                  </div>
                  <a href="/review" class="ml-3 text-ma-black-1 font-medium"
                    >Video Collaboration</a
                  >
                  <a
                    href="/review"
                    class="hidden ml-auto text-xs text-ma-blue-1 font-bold lg:block"
                    >Start Collaborating</a
                  >
                </div>
                <div class="text-ma-gray-3 text-xs font-medium">
                  Included with your paid membership
                </div>
              </div>
              <div class="hidden lg:flex lg:mt-5">
                <div class="flex-shrink-0 w-20">
                  <img
                    src="~assets/images/img/nav_menu/nav_menu_video_collaboration.png"
                    alt="Personalized Video Review &amp; Collaboration"
                  />
                </div>
                <div class="ml-3">
                  <div class="image-title">
                    Personalized Video Review &amp; Collaboration
                  </div>
                  <div class="text-xs text-ma-gray-3 font-medium">
                    Collaborate in realtime and get approvals in no time!
                    Includes 250GB of storage.
                  </div>
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
                    <img src="~assets/images/icons/portfolio.svg" />
                  </div>
                  <a href="/portfolio" class="ml-3 text-ma-black-1 font-medium"
                    >Portfolio Builder</a
                  >
                  <a
                    href="/portfolio"
                    class="hidden ml-auto text-xs text-ma-blue-1 font-bold lg:block"
                    >Start Building</a
                  >
                </div>
                <div class="text-ma-gray-3 text-xs font-medium">
                  Included with your paid membership
                </div>
              </div>
              <div class="hidden lg:flex lg:mt-5">
                <div class="flex-shrink-0 w-20">
                  <img
                    src="~assets/images/img/nav_menu/nav_menu_portfolio.png"
                    alt="Build A Portfolio Website"
                  />
                </div>
                <div class="ml-3">
                  <div class="image-title">Build A Portfolio Website</div>
                  <div class="text-xs text-ma-gray-3 font-medium">
                    Create a professional video website in minutes - with your
                    branding and domain.
                  </div>
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
                  <a href="/post-pro" class="ml-3 text-ma-black-1 font-medium"
                    >Post.pro Video Community</a
                  >
                  <a
                    href="/post-pro"
                    target="_blank"
                    class="hidden ml-auto text-xs text-ma-blue-1 font-bold lg:block"
                    >Start Uploading</a
                  >
                </div>
                <div class="text-ma-gray-3 text-xs font-medium">
                  Included with your paid membership
                </div>
              </div>
              <div class="hidden lg:flex lg:mt-5">
                <div class="flex-shrink-0 w-20">
                  <img
                    src="~assets/images/img/nav_menu/nav_menu_item_post.jpg"
                    alt="Start Uploading"
                  />
                </div>
                <div class="ml-3">
                  <div class="image-title">
                    UPLOAD, SHARE AND EMBED YOUR VIDEOS
                  </div>
                  <div class="text-xs text-ma-gray-3 font-medium">
                    Join a community of the best animators, motion designers,
                    editors and filmmakers to get exposure and earn more
                    business.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems_1: [
        {
          name: 'Adobe after effects',
          link:
            '/browse?categories=after-effects-templates,after-effects-presets',
          subMenus: [
            {
              name: 'After Effects Template',
              link: '/browse/after-effects-templates'
            },
            {
              name: 'After Effects Presets',
              link: '/browse/after-effects-presets'
            }
          ]
        },
        {
          name: 'Adobe premiere pro',
          link:
            '/browse?categories=premiere-pro-templates,premiere-pro-presets,motion-graphics-templates',
          subMenus: [
            {
              name: 'Premiere pro template',
              link: '/browse/premiere-pro-templates'
            },
            {
              name: 'Premiere pro presets',
              link: '/browse/premiere-pro-presets'
            },
            {
              name: 'Motion Graphics tempalte',
              link: '/browse/motion-graphics-templates'
            }
          ]
        },
        {
          name: 'Adobe premiere rush',
          link: '/browse?categories=premiere-rush-templates',
          subMenus: [
            {
              name: 'premiere rush Template',
              link: '/browse/premiere-rush-templates'
            }
          ]
        },
        {
          name: 'davinci resolve',
          link:
            '/browse?categories=davinci-resolve-templates,davinci-resolve-macros',
          subMenus: [
            {
              name: 'DaVinci Resolve Templates',
              link: '/browse/davinci-resolve-templates'
            },
            {
              name: 'DaVinci Resolve Macros',
              link: '/browse/davinci-resolve-macros'
            }
          ]
        }
      ],
      menuItems_2: [
        {
          name: 'final cut pro',
          link: '/browse?categories=final-cut-pro-templates',
          subMenus: [
            {
              name: 'final cut pro templates',
              link: '/browse/final-cut-pro-templates'
            }
          ]
        },
        {
          name: 'images',
          link: '/browse?categories=stock-photos',
          subMenus: [
            {
              name: 'stock photos',
              link: '/browse/stock-photos'
            }
          ]
        },
        {
          name: 'stock audio',
          link: '/browse?categories=royalty-free-music,sound-effects',
          subMenus: [
            {
              name: 'royalty free music',
              link: '/browse/royalty-free-music'
            },
            {
              name: 'sound effects',
              link: '/browse/sound-effects'
            }
          ]
        },
        {
          name: 'stock video',
          link: '/browse?categories=stock-video,stock-motion-graphics',
          subMenus: [
            {
              name: 'Stock video',
              link: '/browse/stock-video'
            },
            {
              name: 'Stock Motion Graphics',
              link: '/browse/stock-motion-graphics'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss"></style>
