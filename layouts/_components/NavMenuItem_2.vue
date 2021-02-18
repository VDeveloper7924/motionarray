<template>
  <div
    class="navmenu-item z-30 pt-5 px-6 lg:p-4 dropdown-menu absolute hidden text-gray-700 pt-1"
  >
    <div class="py-1 flex lg:py-0 lg:block">
      <div class="flex-1">
        <div class="flex items-center">
          <div class="inline-block">
            <img src="~assets/images/icons/learn.svg" alt="learn" />
          </div>
          <a href="/learn" class="ml-3 text-ma-black-1 font-medium">Learn</a>
        </div>
        <div class="text-ma-gray-3 text-xs font-medium">
          Learn how to make amazing videos &amp; films
        </div>
      </div>
      <div class="subnav subnav--open" style>
        <div
          class="pt-5 pb-10 lg:pb-0 lg:flex lg:flex-wrap lg:-mt-5 xxl:flex-no-wrap xxl:mt-0 xxl:justify-between"
        >
          <div
            class="lg:w-1/4 lg:mt-5 lg:space-y-2 xxl:w-auto xxl:mt-0"
            v-for="(menuItem, index) in menuItems_1"
            :key="index"
          >
            <a href="/learn/after-effects" class="group__title">
              <div class="inline-block">
                <img v-bind:src="getImgUrl(menuItem.iconName)" alt="group" />
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
  </div>
</template>

<script>
export default {
  name: 'NavMenuItem_2',
  data() {
    const submenus = [
      {
        name: 'Tutorial',
        link: '/learn/after-effects/tutorials'
      },
      {
        name: 'Resources',
        link: '/learn/after-effects/resources'
      },
      {
        name: 'News',
        link: '/learn/after-effects/news'
      },
      {
        name: 'Troubleshooting',
        link: '/learn/after-effects/troubleshooting'
      }
    ]
    return {
      iconName: 'after-effects',
      menuItems_1: [
        {
          name: 'After effects',
          iconName: 'after-effects',
          link: 'http://www.w3.org/2000/svg',
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
  methods: {
    getImgUrl(icon) {
      var images = require.context(
        '../../assets/images/icons/',
        false,
        /\.svg$/
      )
      return images('./' + icon + '.svg')
    }
  }
}
</script>
<style lang="scss"></style>
