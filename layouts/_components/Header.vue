<template>
  <div
    id="nav-menu"
    :class="isOpenMobileMenu ? 'mobile-menu' : ''"
    v-on:resize="resizeEvent($e)"
  >
    <div
      ref="header"
      class="nav-menu__header h-10 px-6 flex items-center justify-between lg:h-12 lg:px-4 xl:h-16"
    >
      <div class="flex items-center space-x-8 h-full">
        <Logo />

        <div class="dropdown inline-block h-100">
          <span>Video Platform</span>
          <SvgIcon
            icon="caret-down"
            class="ml-2 fill-current"
            style="line-height: 0"
          />
          <NavMenuItem_1 />
        </div>
        <div class="dropdown inline-block h-100">
          <span>Learn</span>
          <SvgIcon
            icon="caret-down"
            class="ml-2 fill-current"
            style="line-height: 0"
          />
          <NavMenuItem_2 />
        </div>
        <a href="https://motionarray.com/pricing" class="nav-menu__link">
          <span>Pricing</span>
        </a>
      </div>

      <div class="sm:flex sm:space-x-3">
        <div class="lg:hidden">
          <button
            type="button"
            class="nav-menu__trigger"
            @click="
              isOpenMobileMenu = !isOpenMobileMenu
              $store.state.isOpenMobileMenu = isOpenMobileMenu
            "
            :style="{ display: isOpenMobileMenu ? 'none' : 'block' }"
            aria-label="nav-menu__trigger"
          >
            <div class="inline-block fill-current" style="line-height: 0">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="10">
                <path d="M6 0h19v2H6zM0 8h25v2H0z" />
              </svg>
            </div>
          </button>

          <button
            type="button"
            class="nav-menu__trigger"
            @click="
              isOpenMobileMenu = !isOpenMobileMenu
              $store.state.isOpenMobileMenu = isOpenMobileMenu
            "
            :style="{ display: !isOpenMobileMenu ? 'none' : 'block' }"
            aria-label="nav-menu__trigger"
          >
            <div class="inline-block fill-current">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="14.1421"
                  width="20"
                  height="2"
                  rx="1"
                  transform="rotate(-45 0 14.1421)"
                />
                <rect
                  y="1.41406"
                  width="2"
                  height="20"
                  rx="1"
                  transform="rotate(-45 0 1.41406)"
                />
              </svg>
            </div>
          </button>
        </div>

        <form
          id="nav-search"
          action="/browse"
          class="nav-search nav-search--expanded"
        >
          <input
            type="text"
            placeholder="Search Marketplace"
            name="q"
            class="nav-search__input transform origin-right"
          />

          <button
            type="submit"
            class="nav-search__btn"
            aria-label="nav-search__btn"
          >
            <div class="inline-block fill-current">
              <img src="~assets/images/icons/search.svg" alt="search" />
            </div>
          </button>
        </form>

        <nuxt-link to="/account/login" class="hidden nav-menu__btn"
          >Log In</nuxt-link
        >
        <a href="/pricing" class="hidden nav-menu__btn nav-menu__btn--cta"
          >Join Free</a
        >
      </div>
    </div>

    <MobileMenu />
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import NavMenuItem_1 from './NavMenuItem_1.vue'
import NavMenuItem_2 from './NavMenuItem_2.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    Logo,
    NavMenuItem_1,
    NavMenuItem_2,
    MobileMenu
  },
  data() {
    return {
      isOpenMobileMenu: false
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.isOpenMobileMenu ? 'open-mobile-menu' : ''
      }
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  .dropdown-menu {
    overflow: hidden;
    max-height: 0px;
    display: block;
    visibility: hidden;
    transition: all ease-in-out 0.3s;
  }

  &:hover {
    .dropdown-menu {
      max-height: 100%;
      visibility: visible;
      transition: all ease-in-out 0.3s;
    }
  }
}
</style>
