<template>
  <div class="dropdown__btn dropdown__btn--audio">
    <div>{{ category['title'] }}</div>

    <div class="dropdown-section dropdown-section--audio">
      <div
        v-for="(childCategory, i) in category.children"
        :key="`category-${i}`"
        class="dropdown-item"
      >
        <div>{{ childCategory.title }}</div>

        <ul class="dropdown-section__sub">
          <li
            v-for="(grandChildCategory, j) in childCategory.children"
            :key="`sub-category-${i}-${j}`"
          >
            <a href="#">{{ grandChildCategory.title }}</a>
          </li>
        </ul>
      </div>

      <div class="nav-arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category']
}
</script>

<style lang="scss" scoped>
.dropdown {
  &__btn {
    @apply relative block flex items-center justify-center uppercase font-bold;

    height: 66px;
    width: 15%;
    padding: 26px 32px;
    line-height: 1;
    font-size: 14px;
    color: #999;

    &:hover {
      color: #1c1c1c;
    }

    &:hover .dropdown-section {
      @apply block absolute;
      top: 100%;
      width: 100%;
      background-color: #333;
      color: white;
      height: auto;
    }
  }

  &-section {
    $listpadding: 12px;

    @apply capitalize;

    display: none;
    z-index: 1000;
    padding-top: $listpadding;
    padding-bottom: $listpadding;
    .dropdown-item {
      div {
        @apply relative w-full py-1 px-4;
        line-height: 2;
        font-size: 16px;
        font-weight: 400;
        font-family: freight-sans-pro, sans-serif;
        &::after {
          border-width: 16px 0 16px 12px;
          border-style: solid;
          border-color: transparent transparent transparent #1c1c1c;

          display: block;
          height: 0;
          position: absolute;
          right: -12px;
          top: 0;
          width: 0;
          z-index: 10000;
          border-left-color: #4c4c4c;
        }
      }

      &:hover div:after {
        content: '';
      }
    }

    &__sub {
      background-color: #333;
      color: white;
      width: 80%;
      display: none;
      z-index: 1000;
      padding-top: $listpadding;
      padding-bottom: $listpadding;
      li {
        @apply py-1 px-1;
        line-height: 2;
        font-size: 16px;
        font-weight: 400;
        font-family: freight-sans-pro, sans-serif;
        &:hover {
          color: #67c7d8;
        }
      }
    }

    .nav-arrow {
      content: '';
      display: block;
      border: 13px inset transparent;
      border-top-width: 10px;
      border-bottom-width: 10px;
      border-bottom-color: #333;
      border-bottom-style: solid;
      left: 50%;
      margin-left: -13px;
      position: absolute;
      top: -20px;
      z-index: 100;
    }

    .dropdown-item {
      &:hover ul {
        @apply block absolute;

        left: 100%;
        top: 0px;
        border-left: 1px solid #4c4c4c;
      }

      &:hover {
        color: #67c7d8;
      }
    }
  }
}
</style>
