<template>
  <div id="nav-account-dropdown" class="hidden lg:block relative">
    <button
      type="button"
      class="nav-menu__btn nav-menu__btn--cta"
      style="width: 70px"
      aria-label="nav-menu__btn"
    >
      <SvgIcon
        icon="account"
        class="text-white stroke-current"
        style="line-height: 0"
      />
      <SvgIcon
        icon="caret-down"
        class="ml-2 text-white fill-current"
        style="line-height: 0"
      />
    </button>

    <transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        ref="dropdown"
        class="hidden z-30 bg-white w-40 border border-ma-gray-1 transition-opacity duration-200 lg:block"
        style="box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05)"
      >
        <div>
          <div class="h-8 px-4 flex items-center leading-5">
            <span class="text-ma-gray-3 text-xs font-bold uppercase"
              >Group Name</span
            >
            <div
              class="ml-4 w-full"
              style="height: 1px; border-top-width: 1px"
            ></div>
          </div>

          <a
            class="h-8 px-4 flex items-center text-sm text-ma-black-1 font-medium hover:bg-ma-gray-0 hover:text-ma-black-1"
          >
            Link Name
            <span v-if="link.isNew" class="label-tag">NEW</span>
          </a>
        </div>

        <a
          href="/account/logout"
          class="mt-4 h-8 px-4 w-full flex items-center text-sm text-ma-black-1 font-medium hover:bg-ma-gray-0 hover:text-ma-black-1"
          >Log Out</a
        >
      </div>
    </transition>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon'
import omit from 'lodash/omit'

const links = {
  Platform: [
    {
      text: 'Downloads',
      link: '/account/downloads'
    },
    {
      text: 'Collections',
      link: '/account/collections'
    },
    {
      text: 'Portfolio',
      link: '/account/uploads/portfolio'
    },
    {
      text: 'Review',
      link: '/account/uploads/review'
    },
    {
      text: 'Uploads',
      link: '/account/uploads'
    },
    {
      text: 'Post.pro',
      link: '/post-pro',
      target: '_blank',
      isNew: true
    }
  ],
  Account: [
    {
      text: 'Profile',
      link: '/account/details'
    },
    {
      text: 'Manage Subscription',
      link: '/account/subscription'
    }
  ],
  Contributor: [
    {
      text: 'Submissions',
      link: '/account/submissions'
    },
    {
      text: 'Stats',
      link: '/account/seller-stats'
    },
    {
      text: 'Statements',
      link: '/account/statements'
    }
  ]
}

export default {
  props: {
    open: {
      type: Boolean,
      default: () => false
    }
  },

  components: {
    SvgIcon
  },

  data() {
    return {
      popper: null
    }
  },

  computed: {
    links() {
      const isContributor = this.$store.state.user.role === 3

      if (!isContributor) {
        return omit(links, 'Contributor')
      }

      return links
    }
  },

  mounted() {
    const closeHandler = (evt) => {
      if (this.$refs.dropdown.contains(evt.target)) {
        return
      }

      this.$emit('update:open', false)
    }

    this.$watch('open', (newVal, oldVal) => {
      this.$nextTick(() => {
        if (newVal) {
          document.body.addEventListener('click', closeHandler)
        } else {
          document.body.removeEventListener('click', closeHandler)
        }
      })
    })
  },

  methods: {
    toggle() {
      this.$emit('update:open', !this.open)
    },

    initializePopper() {
      this.popper = createPopper(this.$refs.trigger, this.$refs.dropdown, {
        placement: 'bottom-end',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10]
            }
          },
          {
            name: 'preventOverflow',
            options: {
              padding: 20
            }
          }
        ]
      })
    },

    destroyPopper() {
      if (this.popper === null) {
        return
      }

      this.popper.destroy()
    }
  }
}
</script>
<style type="scss" scoped>
@import '../../assets/shared/sass/objects/_tag.scss';
</style>
