<template>
  <div class="login-page__content">
    <div class="nav-background md:nav-background--right">
      <div class="nav-background__img">
        <img
          src="https://ma-content.s3.amazonaws.com/backgrounds/login-page-bg.jpg"
        />
      </div>
    </div>
    <div class="gr pt-12">
      <div class="text-white text-center mt-2 sm:mt-10 sm:pt-1 mb-3 sm:mb-6">
        <h2 class="text-3xl sm:text-4xl sm:mb-2">Welcome back!</h2>
        <h3 class="text-lg sm:text-2xl">Log in to your account.</h3>
      </div>
      <div class="login-box sm:bg-ma-gray-0">
        <form
          method="POST"
          class="login-form p-3 sm:py-9 sm:px-0 text-ma-gray-3 sm:text-ma-black-1"
        >
          <ul>
            <li class="text-left mb-3">
              <label
                for="login-email"
                class="uppercase sm:text-ma-black-1 font-bold block mb-1"
                >Email</label
              >
              <input
                id="login-email"
                type="text"
                name="email"
                value
                class="w-full p-2 ma-black-1"
              />
            </li>
            <li class="text-left">
              <label
                for="login-password"
                class="uppercase sm:text-ma-black-1 font-bold block mb-1"
                >Password</label
              >
              <input
                id="login-password"
                type="password"
                name="password"
                value
                class="w-full p-2 ma-black-1"
              />
            </li>
            <li
              class="text-center sm:flex sm:items-stretch sm:text-sm sm:mt-4 sm:mb-6"
            >
              <div class="mt-3 mb-6 sm:text-left sm:my-0 text-sm sm:w-3/5">
                Forgot password?
                <a
                  href="/account/password/remind"
                  class="text-ma-blue-1 hover:text-ma-blue-0 font-semibold"
                  >Reset password</a
                >
              </div>
              <div class="keep-me-logged pt-1 sm:pt-0 sm:w-2/5">
                <label
                  :class="[
                    isKeepLoginMe ? 'ma-checkbox--checked' : '',
                    'uppercase font-semibold ma-checkbox justify-center sm:justify-end'
                  ]"
                >
                  <input
                    type="checkbox"
                    name="remember_me"
                    v-model="isKeepLoginMe"
                  />
                  <span class="ma-checkbox__toggle"></span>
                  <div class="ma-checkbox__label">Keep me logged in</div>
                </label>
              </div>
            </li>
            <li class="text-center">
              <button
                type="submit"
                class="ma-btn ma-btn--blue w-full sm:w-48 sm:mx-auto"
              >
                <div
                  class="animation-spin inline-block mr-2"
                  style="display: none"
                >
                  <i class="icon-spinner2"></i>
                </div>
                Log In
              </button>
            </li>
            <li class="text-center my-9 sm:mb-0 text-sm">
              Don’t have an account?
              <a
                href="/pricing"
                class="text-ma-blue-1 hover:text-ma-blue-0 font-semibold"
                >Sign up</a
              >
            </li>
          </ul>
        </form>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  name: 'Login',
  data() {
    return {
      isKeepLoginMe: false
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'login-page with--nav-background'
      }
    }
  }
}
</script>
<style lang="scss">
.ma-checkbox {
  display: flex;
  align-items: center;
  input {
    display: none;
  }
  .ma-checkbox__toggle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border: 1px solid #c9c9c9;
    background-color: #fff;
    cursor: pointer;
    font-family: motionarray-icons;
    font-size: 7px;
    color: #e5e5e5;
  }
  &.ma-checkbox--checked {
    .ma-checkbox__toggle {
      background-color: #b8e986;
      border-color: #b8e986;
      color: #fff;
      &::before {
        content: '\E913';
      }
    }
  }
  &:hover {
    .ma-checkbox__toggle {
      &::before {
        content: '\E913';
      }
    }
  }
  .ma-checkbox__label {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
  }
}

@media (min-width: 1261px) {
  .with--nav-background .site-header {
    background-color: transparent;
  }
}
.with--nav-background {
  .nav-background {
    position: relative;
    width: 100%;
    right: 0;
    overflow: hidden;
  }
  .nav-background__img {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .nav-background__img {
    &::before {
      content: ' ';
      position: absolute;
      display: block;
      height: 100%;
      width: 100%;
    }
    img {
      height: 100%;
      width: 100%;
      max-width: none;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
}

@media (min-width: 768px) {
  .with--nav-background
    .nav-background.md\:nav-background--right
    .nav-background__img {
    right: 0;
    width: auto;
  }

  .with--nav-background
    .nav-background.md\:nav-background--right
    .nav-background__img
    img {
    width: auto;
    height: 100%;
  }
}

@media (min-width: 768px) {
  .with--nav-background
    .nav-background.md\:nav-background--right
    .nav-background__img {
    height: 300px;
  }
}

@media (min-width: 1024px) {
  .with--nav-background
    .nav-background.md\:nav-background--right
    .nav-background__img {
    height: 400px;
  }
}

@media (min-width: 1261px) {
  .with--nav-background .nav-background.md\:nav-background--right {
    height: 400px;
  }
}

@media (min-width: 1261px) {
  .with--nav-background .content {
    padding-top: 0;
  }

  .with--nav-background .nav-background .gr {
    padding-top: 80px;
  }

  .with--nav-background .site-header__logo {
    background: url(/assets/images/shared/logo--inverted@2x.png) 50% no-repeat;
    background-size: 220px auto;
  }

  .with--nav-background .site-header .nav--primary .nav__item > a {
    color: #fff;
  }

  .with--nav-background .site-header .nav--primary .nav__item:hover > a {
    color: hsla(0, 0%, 100%, 0.8);
  }
}

.login-page {
  position: relative;
  background-color: #000;
  padding-top: 0;
  .login-page__content {
    min-height: 340px;
  }
}

@media (min-width: 640px) {
  .login-page {
    .login-page__content {
      height: 873px !important;
      overflow: hidden;
      .nav-background__img {
        right: 0;
        height: 873px !important;
        width: 1045px !important;
      }
    }
  }
}

.login-page {
  .site-header {
    background-color: transparent;
  }
  .site-header__logo {
    background-image: url(/assets/images/shared/logo--inverted@2x.png);
  }
}

@media (max-width: 640px) {
  .login-page {
    .site-header__logo {
      margin-left: 14px;
      margin-top: 14px;
      background-size: 110px auto;
      width: 110px;
      a {
        width: 100%;
      }
    }
  }
}

.login-page form label {
  font-size: 13px;
}

@media (max-width: 640px) {
  .login-page form input[type='password'],
  .login-page form input[type='text'] {
    border: none;
    box-shadow: none;
  }

  .login-page form .keep-me-logged {
    margin-bottom: 150px;
  }
}

.login-page .nav-background {
  position: absolute;
  top: 80px;
  height: 100% !important;
}

.login-page .nav-background .nav-background__img {
  height: auto;
  top: -38px;
}

.login-page .nav-background .nav-background__img:before {
  background: linear-gradient(180deg, transparent, #000);
}

.login-page .nav-background .nav-background__img img {
  height: auto;
}

@media (min-width: 640px) {
  .login-page .nav-background .nav-background__img {
    top: 0;
    margin-right: -140px;
  }

  .login-page .nav-background .nav-background__img:before {
    background: linear-gradient(-90deg, transparent, #000);
  }

  .login-page .nav-background .nav-background__img img {
    height: 100%;
  }
}

.login-page .ma-checkbox {
  cursor: pointer;
}

.login-page .ma-checkbox .ma-checkbox__toggle {
  width: 20px;
  height: 20px;
  font-size: 9px;
  border-width: 2px;
  --border-opacity: 1;
  border-color: #999;
  border-color: rgba(153, 153, 153, var(--border-opacity));
  background-color: transparent;
  color: transparent;
}

@media (min-width: 640px) {
  .login-page .ma-checkbox:hover .ma-checkbox__toggle {
    --text-opacity: 1;
    color: #999;
    color: rgba(153, 153, 153, var(--text-opacity));
  }
}

.login-page .ma-checkbox.ma-checkbox--checked .ma-checkbox__toggle {
  border-width: 0;
  --bg-opacity: 1;
  background-color: #b8e986;
  background-color: rgba(184, 233, 134, var(--bg-opacity));
  --text-opacity: 1;
  color: #fff;
  color: rgba(255, 255, 255, var(--text-opacity));
}

@media (min-width: 640px) {
  .login-page .login-box {
    max-width: 690px;
    margin: auto auto 200px;
  }

  .login-page .login-box form {
    max-width: 450px;
    margin: auto;
  }

  .login-page .login-box input {
    padding: 7px 10px;
  }
}
</style>
