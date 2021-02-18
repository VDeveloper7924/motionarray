<template>
  <li class="filter-category">
    <input
      type="checkbox"
      class="filter-category__title-input"
      v-bind:id="`${index}`"
    />
    <label class="filter-category__title" v-bind:for="`${index}`">
      <label class="filter-checkbox">
        <input type="checkbox" />
        <div class="filter-checkbox-icon"></div>
        <span class="filter-checkbox-label">{{ condition['title'] }}</span>
      </label>
      <span class="al-list-expand"></span>
    </label>
    <div class="filter-category__specify accordion">
      <div
        v-for="(productTitle, i) in condition.product"
        :key="`product-${i}`"
        v-on:click="
          () => {
            productTitle.activeState = !productTitle.activeState
          }
        "
        class="wraper"
      >
        <div class="filter-select">
          <div
            class="filter-select__caption"
            v-bind:class="{ active: productTitle.activeState }"
          >
            {{ productTitle.children[productTitle.activeNumber].title }}
          </div>
          <div
            v-bind:class="{ active: productTitle.activeState }"
            class="filter-select__list"
          >
            <div
              v-for="(titleP, j) in productTitle.children"
              :key="`product-title-${i}-${j}`"
              class="filter-item"
              v-on:click="
                (event) => {
                  productTitle.activeNumber = j
                }
              "
            >
              {{ titleP.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion">
      <ul class="filter-category__list">
        <li v-for="(checkTitle, k) in condition.check" :key="`check-${k}`">
          <div class="list-item clearfix">
            <label class="list-item__checkbox checked switch">
              <input type="checkbox" />
              <div class="list-item__checkbox-icon"></div>
              <span class="list-item__checkbox-label">
                {{ checkTitle.title }}
              </span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    condition: Object,
    index: String
  },
  data() {
    return {
      isActive: [false, false]
    }
  },
  methods: {},
  watch: {
    isActive: function () {
      return this.isActive
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scope>
.accordion {
  display: none;
  transition: all 2s linear 1s;
}
.filter-category {
  @apply mt-2 uppercase;
  padding: 8px 0px;
  border-bottom: 1px solid #b6b5b6;
  &__title {
    @apply flex justify-between items-center my-1;
    .filter-checkbox {
      @apply flex justify-between items-center;
      cursor: pointer;
      &-icon {
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
        height: 21px;
        width: 21px;
        border-radius: 50%;
        padding: 1px;
        background: 0 0;
        position: static;
        overflow: visible;
        margin-right: 10px;
        color: #e5e5e5;
        border: 2px solid #e5e5e5;
        text-align: center;
        cursor: pointer;

        font-size: 8px;
        &::before {
          content: '✓';
          font-size: 11px;
          font-weight: 900;
          color: transparent;
        }
      }
      &:hover .filter-checkbox-icon::before {
        color: #c9c9c9;
      }
      input:checked ~ .filter-checkbox-icon {
        border-color: #b8e986;
        background-color: #b8e986;
        &::before {
          color: white;
        }
      }

      &-label {
        @apply font-bold;
        color: #7d7d7d;
        font-size: 13px;
      }
    }

    .al-list-expand {
      border-color: #000 transparent transparent;
      border-width: 5px;
      border-style: solid;
      margin-top: 7px;
      cursor: pointer;
    }
    &-input:checked {
      & ~ div.accordion {
        display: block;
      }
      & ~ .filter-category__title {
        @apply mb-2;
        & .filter-checkbox-label {
          color: #4a4a4a;
        }
        & .al-list-expand {
          border-color: transparent transparent #000;
          transform: translate(0%, -50%);
        }
      }
    }
  }
  &__specify {
    .wraper {
      z-index: 1000;
      .filter-select {
        @apply w-full bg-white;
        margin: 0px 0px 15px;
        font-size: 13px;

        & > div {
          cursor: pointer;
          border: none;
          border-radius: 0;
          background-color: white;
          /* Styling the select text color */
          color: #4a4a4a;
          box-shadow: #c9c9c9 0 0 0 1px inset;
          text-indent: 0.01px;
          line-height: 2.5;
          &:hover {
            box-shadow: #999 0 0 0 2px inset;
          }
        }
        &__caption {
          @apply w-full bg-white relative;

          padding: 12px 62px 12px 20px;
          outline: none;
          font-style: italic;
          text-overflow: ellipsis;

          &::after {
            content: '';
            pointer-events: none;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translate(0%, -30%);
            border-color: #7d7d7d transparent transparent;
            border-width: 6px;
            border-style: solid;
            cursor: pointer;
            z-index: 9999;
          }
          &.active::after {
            border-color: transparent transparent #7d7d7d;
            transform: translate(0%, -75%);
          }
        }
        &__list {
          @apply w-full bg-white;
          display: none;
          &.active {
            display: block;
          }
          .filter-item {
            padding: 6px 36px 6px 12px;
            &:hover {
              background-color: #67c7d8;
              color: #fff;
            }
          }
        }
      }
    }
  }
  &__list {
    li {
      margin-bottom: 3px;
      &:last-child .list-item {
        border-bottom-width: 0px;
      }
    }
    .list-item {
      @apply pl-6;
      padding: 8px 0px 8px 30px;
      border-bottom: 1px solid #b6b5b6;
      &__checkbox {
        @apply flex;
        &-icon {
          @apply mr-2;
          background-color: #e9e9e9;
          height: 20px;
          width: 36px;
          box-sizing: content-box;
          padding: 0;
          transition: background-color 2s, all 1s;
          position: relative;
          border: 1px solid #b6b5b6;
          font-style: normal;
          font-weight: 400;
          font-variant: normal;
          text-transform: none;
          -webkit-font-smoothing: antialiased;
          line-height: 2.26em;
          border-radius: 20px;
          text-indent: -0.1em;
          background: 0 0;
          overflow: visible;
          text-align: center;
          cursor: pointer;

          &:before {
            content: '✓';
            border-radius: 50px;
            background: #9b9b9b;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 0;
            transition: left 0.2s;
            color: transparent;
            font-size: 11px;
            font-weight: 900;
            line-height: 2;
            text-align: center;
          }
        }
        &-label {
          font-size: 13px;
          font-weight: 700;
          color: #b6b5b6;
          cursor: pointer;
        }
        input:checked + .list-item__checkbox-icon {
          &::before {
            background: #b8e986;
            left: 16px;
            color: white;
          }
          &:after {
          }
        }
      }
    }
  }
}
</style>
