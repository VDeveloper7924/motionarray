<template>
  <!-- Footer works -->
  <footer class="site-footer c-footer">
    <div class="gr">
      <div class="company-info">
        <div class="site-footer__logo site-footer__logo--beta">
          <a href="/">Motion Array</a>
        </div>
        <p class="copyright">
          Copyright © 2013 - 2020 Motion Array.
          <br />All&nbsp;Rights&nbsp;Reserved.
        </p>
        <p class="disclaimer">
          Adobe® After Effects® and Premiere Pro® is a trademark of Adobe
          Systems Incorporated.
        </p>
      </div>

      <nav
        class="nav nav--secondary"
        v-for="(navMenu, index) in navMenuList"
        :key="index"
      >
        <h2 class="nav__title">{{ navMenu.name }}</h2>
        <ul class="nav__items">
          <li
            :class="['nav__item', menuItem.subMenus ? 'has-children' : '']"
            :ref="'parent-' + getRefs(menuItem.name)"
            v-for="(menuItem, index_1) in navMenu.menuList"
            :key="index_1"
          >
            <span
              :class="['slidetoggle-arrow', menuItem.isopen ? 'open' : '']"
              v-if="menuItem.subMenus && !menuItem.toggle"
              @click="menuItem.isopen = !menuItem.isopen"
            ></span>
            <a :href="menuItem.link">{{ menuItem.name }}</a>
            <template v-if="menuItem.subMenus">
              <ul
                class="nav__items"
                :style="{
                  display: 'block',
                  overflow: 'hidden',
                  'max-height': menuItem.isopen ? '100px' : '0px'
                }"
                :ref="'sub-' + getRefs(menuItem.name)"
              >
                <li
                  class="nav__item"
                  v-for="(subMenuItem, index_sub) in menuItem.subMenus"
                  :key="index_sub"
                >
                  <a :href="subMenuItem.link">{{ subMenuItem.name }}</a>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      navMenuList: [
        {
          name: 'navigation',
          menuList: [
            {
              name: 'Home',
              link: '/'
            },
            {
              name: 'Marketplace',
              link: '/browse'
            },
            {
              name: 'Premiere Pro Plugins',
              link: '/plugins/premiere-pro',
              isopen: false,
              subMenus: [
                {
                  name: 'Premiere Pro Transitions',
                  link: '/plugins/premiere-pro/transitions'
                },
                {
                  name: 'Premiere Pro Effects',
                  link: '/plugins/premiere-pro/effects'
                }
              ]
            },
            {
              name: 'Integrations',
              link: '/integrations/adobe',
              isopen: false,
              subMenus: [
                {
                  name: 'Adobe Extension',
                  link: '/integrations/adobe'
                }
              ]
            },
            {
              name: 'Video Collaboration',
              link: '/review'
            },
            {
              name: 'Portfolio Builder',
              link: '/portfolio'
            },
            {
              name: 'Requests',
              link: '/requests'
            },
            {
              name: 'Pricing',
              link: '/pricing'
            }
          ]
        },
        {
          name: 'MARKETPLACE CATEGORIES',
          menuList: [
            {
              name: 'Adobe After Effects',
              link:
                '/browse?categories=after-effects-templates,after-effects-presets',
              isopen: false,
              subMenus: [
                {
                  name: 'Adobe After Effects Templates',
                  link: '/browse/after-effects-templates'
                },
                {
                  name: 'Adobe After Effects Presets',
                  link: '/browse/after-effects-presets'
                }
              ]
            },
            {
              name: 'Adobe Premiere Pro',
              link:
                '/browse?categories=premiere-pro-templates,premiere-pro-presets,motion-graphics-templates',
              isopen: false,
              subMenus: [
                {
                  name: 'Adobe Premiere Pro Templates',
                  link: '/browse/premiere-pro-templates'
                },
                {
                  name: 'Adobe Premiere Pro Presets',
                  link: '/browse/premiere-pro-presets'
                },
                {
                  name: 'MOGRTs',
                  link: '/browse/motion-graphics-templates'
                }
              ]
            },
            {
              name: 'Adobe Premiere Rush',
              link: '/browse?categories=premiere-rush-templates',
              isopen: false,
              subMenus: [
                {
                  name: 'Adobe Premiere Rush Templates',
                  link: '/browse/premiere-rush-templates'
                }
              ]
            },
            {
              name: 'DaVinci Resolve',
              link:
                '/browse?categories=davinci-resolve-templates,davinci-resolve-macros',
              isopen: false,
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
            },
            {
              name: 'Final Cut Pro',
              link: '/browse?categories=final-cut-pro-templates',
              isopen: false,
              subMenus: [
                {
                  name: 'Final Cut Pro Templates',
                  link: '/browse/final-cut-pro-templates'
                }
              ]
            },
            {
              name: 'Images',
              link: '/browse?categories=stock-photos',
              isopen: false,
              subMenus: [
                {
                  name: 'Stock Photos',
                  link: '/browse/stock-photos'
                }
              ]
            },
            {
              name: 'Stock Audio',
              link: '/browse?categories=royalty-free-music,sound-effects',
              isopen: false,
              subMenus: [
                {
                  name: 'Royalti Free Music',
                  link: '/browse/stock-music'
                },
                {
                  name: 'Sounds Effect',
                  link: '/browse/sound-effects'
                }
              ]
            },
            {
              name: 'Stock Video',
              link: '/browse?categories=stock-video,stock-motion-graphics',
              isopen: false,
              subMenus: [
                {
                  name: 'Stock Video Footage',
                  link: '/browse/stock-video'
                },
                {
                  name: 'Motion Graphics',
                  link: '/browse/stock-motion-graphics'
                }
              ]
            },
            {
              name: 'Free Assets',
              link: '/browse/free'
            }
          ]
        },
        {
          name: 'Learn',
          menuList: [
            {
              name: 'Motion Array',
              link: '/learn/motion-array/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/motion-array/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/motion-array/resources/'
                },
                {
                  name: 'News',
                  link: '/learn/motion-array/news/'
                }
              ]
            },
            {
              name: 'After Effects',
              link: '/learn/after-effects/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/after-effects/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/after-effects/resources/'
                },
                {
                  name: 'News',
                  link: '/learn/after-effects/news/'
                },
                {
                  name: 'Troubleshooting',
                  link: '/learn/after-effects/troubleshooting/'
                }
              ]
            },
            {
              name: 'Premiere Pro',
              link: '/learn/premiere-pro/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/premiere-pro/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/premiere-pro/resources/'
                },
                {
                  name: 'News',
                  link: '/learn/premiere-pro/news/'
                },
                {
                  name: 'TroubleShooting',
                  link: '/learn/premiere-pro/troubleshooting/'
                }
              ]
            },
            {
              name: 'DaVinci Resolve',
              link: '/learn/davinci-resolve/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/davinci-resolve/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/davinci-resolve/resources/'
                },
                {
                  name: 'News',
                  link: '/learn/davinci-resolve/news/'
                },
                {
                  name: 'TroubleShooting',
                  link: '/learn/davinci-resolve/troubleshooting/'
                }
              ]
            },
            {
              name: 'Final Cut Pro',
              link: '/learn/final-cut-pro/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/final-cut-pro/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/final-cut-pro/resources/'
                },
                {
                  name: 'News',
                  link: '/learn/final-cut-pro/news/'
                },
                {
                  name: 'TroubleShooting',
                  link: '/learn/final-cut-pro/troubleshooting/'
                }
              ]
            },
            {
              name: 'Filmmaking',
              link: '/learn/filmmaking/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/filmmaking/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/filmmaking/resources/'
                },
                {
                  name: 'News',
                  link: '/learn/filmmaking/news/'
                }
              ]
            },
            {
              name: 'Motion Design',
              link: '/learn/motion-design/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/motion-design/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/motion-design/resources/'
                },
                {
                  name: 'News',
                  link: '/learn/motion-design/news/'
                }
              ]
            },
            {
              name: 'Post Production',
              link: '/learn/post-production/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/post-production/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/post-production/resources/'
                },
                {
                  name: 'News',
                  link: '/learn/post-production/news/'
                }
              ]
            },
            {
              name: 'Business',
              link: '/learn/business/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/business/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/business/resources/'
                },
                {
                  name: 'News',
                  link: '/learn/business/news/'
                }
              ]
            },
            {
              name: 'Music',
              link: '/learn/royalty-free-music/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/royalty-free-music/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/royalty-free-music/resources/'
                }
              ]
            },
            {
              name: 'Video Effects',
              link: '/learn/video-effects/',
              isopen: false,
              subMenus: [
                {
                  name: 'Tutorials',
                  link: '/learn/video-effects/tutorials/'
                },
                {
                  name: 'Resources',
                  link: '/learn/video-effects/resources/'
                }
              ]
            }
          ]
        },
        {
          name: 'support & contact',
          menuList: [
            {
              name: 'Help Center',
              link: 'https://help.motionarray.com'
            },
            {
              name: 'Contact Us',
              link: '/contact/'
            },
            {
              name: 'Earn Money',
              link: '/become-a-producer/'
            },
            {
              name: 'Become an Affiliate',
              link:
                'https://motionarraypartners.tapfiliate.com/publisher/signup/motion-array-partners/'
            },
            {
              name: 'Terms of Service',
              link: '/terms-of-service/'
            },
            {
              name: 'Privacy Policy',
              link: '/privacy-policy/'
            },
            {
              name: 'Social',
              link: '#',
              isopen: true,
              toggle: 'off',
              subMenus: [
                {
                  name: 'Youtube',
                  link: 'https://www.youtube.com/c/MotionArrayTutorials'
                },
                {
                  name: 'Facebook',
                  link: 'https://www.facebook.com/motionarray'
                },
                {
                  name: 'Twitter',
                  link: 'https://twitter.com/MotionArray'
                },
                {
                  name: 'Instagram',
                  link: 'https://www.instagram.com/motionarray'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    getRefs(name) {
      name = name.toLowerCase()
      return name.replace(' ', '-')
    },
    openSubmenu(name, submenus) {}
  }
}
</script>

<style lang="scss">
.nav--secondary .nav__title,
.site-footer {
  font-size: 18px;
  font-size: 0.77778rem;
  line-height: 24px;
  line-height: 1.33333rem;
}

.nav--secondary .nav__title,
.nav--secondary > .nav__items > .nav__item > a {
  font-size: 15px;
}

.site-footer {
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: white;
  }
  background-color: #151515;
  color: #999;
  padding: 84px 0 84px;
  .gr {
    margin: 0 auto;
    padding: 0 30px;
    position: relative;
    max-width: 1470px;
    .nav--secondary {
      width: 17.02128%;
      &:last-of-type {
        width: 10.6383%;
      }
      &:first-of-type {
        margin-left: 12.76596%;
      }
    }
    .company-info {
      width: 17.02128%;
      .site-footer__logo {
        margin-bottom: 18px;
        background: url(~assets/images/img/logo--inverted@2x.png) center
          no-repeat;
        background-size: 220px auto;
        display: block;
        height: 42px;
        text-indent: -9999px;
        width: 220px;
      }
      .copyright {
        margin-bottom: 36px;
        font-size: 0.77778rem;
      }
      .disclaimer {
        margin-bottom: 36px;
        font-size: 0.66667rem;
      }
    }
  }
}

.gr:after,
.nav:after {
  content: '';
  display: table;
  clear: both;
}

.c,
.g1,
.nav--secondary:last-of-type,
.nav--secondary,
.company-info {
  float: left;
  margin-right: 2.12766%;
}

.gr .c:last-child,
.gr .g1:last-child,
.gr .nav--secondary:last-child,
.gr .company-info:last-child {
  margin-right: 0px;
}

.nav__items {
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all ease-in-out 0.3s;
}
.site-footer a:hover,
.nav--secondary > .nav__items > .nav__item > a:hover {
  color: #fff;
}
.nav--secondary {
  .nav__title {
    font-family: 'freight-sans-pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  > .nav__items {
    > .nav__item {
      margin-bottom: 15px;
      > a {
        color: #ddd;
      }
      &.has-children {
        position: relative;
        span.slidetoggle-arrow {
          position: absolute;
          left: -15px;
          top: 8px;
          transition: all ease-in-out 0.3s;
          cursor: pointer;
          position: absolute;
          width: 0;
          height: 0;
          z-index: 1;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #fff;
          transform: rotateZ(-90deg);
          &.open {
            transform: rotateZ(0deg);
          }
        }
        > a {
          margin-bottom: 5px;
        }
      }
    }
  }
}
@media only screen and (max-width: 780px) {
  .site-footer {
    padding: 42px 0 30px;
    .gr {
      .company-info {
        width: 100%;
      }
      .nav--secondary {
        display: none;
      }
    }
  }
}
</style>
