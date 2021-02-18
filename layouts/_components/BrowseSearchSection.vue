<template>
  <div class="browse-filter-wraper">
    <div>
      <div class="filter">
        <span></span>
        <div class="filter-wrap">
          <div class="res"></div>
          <div
            v-for="(filterSelect, i) in filterNavList"
            :key="`filter-${i}`"
            v-bind:class="`${filterSelect.className}`"
            v-on:click="
              () => {
                filterSelect.active = !filterSelect.active
              }
            "
          >
            <div
              v-bind:class="`${filterSelect.titleContent[0].labelClassName}`"
              v-bind:for="`${filterSelect.inputId}`"
            >
              <span
                v-bind:class="`${filterSelect.titleContent[0].titleClassName}`"
              >
                <i
                  v-bind:class="`${filterSelect.titleContent[0].markClassName}`"
                ></i>
                {{ filterSelect.titleContent[0].title }}
                <div>&nbsp;&nbsp;</div>
              </span>
              <div class="sortby-dropdown__title">
                {{
                  filterSelect.listContent[0].children[
                    filterSelect.listContent[0].activeNumber
                  ].title
                }}
              </div>
              <div class="fa fa-sort-down"></div>
            </div>

            <div
              v-bind:class="{ active: filterSelect.active }"
              class="dropdown__list"
            >
              <div
                v-for="(list, j) in filterSelect.listContent[0].children"
                :key="`filter-list-${i}-${j}`"
                v-on:click="
                  (event) => {
                    filterSelect.listContent[0].activeNumber = j
                  }
                "
                v-bind:class="{ active: list.activeState }"
                class="item"
              >
                {{ list.title }}
              </div>
            </div>
          </div>
          <div class="filter-wrap-condition">
            <div class="pick">
              <label for="filter-pick" class="checkbox">
                <input type="checkbox" name="pick" id="filter-pick" />
                <span class="checkbox-icon"></span>
                <span class="checkbox-label">
                  <i class="kick_ass_icon icon--star"></i>
                  Curator's Pick
                </span>
              </label>
            </div>
            <div class="sep"></div>
            <div class="request">
              <label for="filter-request" class="checkbox">
                <input type="checkbox" name="request" id="filter-request" />
                <span class="checkbox-icon"></span>
                <span class="checkbox-label">
                  <i class="icon--megaphone-fill"></i>
                  requests
                </span>
              </label>
            </div>
            <div class="sep"></div>
            <div class="free">
              <label for="filter-free" class="checkbox">
                <input type="checkbox" name="free" id="filter-free" />
                <span class="checkbox-icon"></span>
                <span class="checkbox-label">free</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="search">
        <div class="search-wrap">
          <input
            type="text"
            name="product"
            id
            class="search-product"
            placeholder="Search for products"
          />
          <i class="icon--search"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BrowseSearchSection',
  data() {
    return {
      filterNavList: [
        {
          className: 'filter-wrap-by nav-tab',
          active: false,
          inputId: 'sortby-drpdown',
          titleContent: [
            {
              labelClassName: 'sortby-drpdown nav-title',
              titleClassName: 'sortby-dropdown__label',
              markClassName: 'icon--sort',
              title: 'sortby:  ',
              title1: 'newest'
            }
          ],
          listContent: [
            {
              className: 'dropdown__list dropdown__list--sortby',
              activeNumber: 0,
              children: [
                {
                  title: 'Newest'
                },
                {
                  title: 'Most Popular'
                },
                {
                  title: 'Recently Viewed'
                },
                {
                  title: 'Most Popular'
                }
              ]
            }
          ]
        },
        {
          className: 'filter-wrap-added nav-tab',
          active: false,
          inputId: 'added-dropdown',
          titleContent: [
            {
              labelClassName: 'added-dropdown nav-title',
              titleClassName: 'added-dropdown__label',
              markClassName: 'icon--calendar2',
              title: 'added:  '
            }
          ],
          listContent: [
            {
              className: 'dropdown__list dropdown__list--added',
              activeNumber: 0,
              children: [
                {
                  title: 'Newest'
                },
                {
                  title: 'Most Popular'
                },
                {
                  title: 'Recently Viewed'
                },
                {
                  title: 'Most Popular'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {},
  watch: {
    isListActive: function () {}
  },
  mounted() {}
}
</script>
<style lang="scss" scope>
$max-width: 1470px;
.sep {
  @apply mx-6;
  border-left: 1px solid #d8d8d8;
}
.browse-filter-wraper {
  background-color: #ededed;
  color: #4a4a4a;

  input {
    outline: none;
  }
  input:active {
    outline: none;
  }
  & > div {
    @apply flex justify-between px-6 m-auto;
    max-width: 1470px;
  }
}
.filter {
  @apply flex items-center;

  height: 70px;
  max-width: $max-width;
  &-wrap {
    @apply flex uppercase font-bold;
    font-size: 14px;

    cursor: pointer;
    .nav-tab {
      @apply pr-6 mr-6 relative;
      border-right: 1px solid #d8d8d8;
      span {
        @apply flex items-center;
      }
      .fa-sort-down {
        position: relative;
        &::before {
          content: '';
          pointer-events: none;
          position: absolute;
          top: 50%;
          transform: translate(48%, -27%);
          border-color: #4a4a4a transparent transparent;
          border-width: 5px;
          border-style: solid;
          cursor: pointer;
        }
      }
    }
    .nav-title {
      @apply flex;
    }
    div {
      @apply uppercase;
    }
    span > i {
      @apply mr-2;
      font-size: 20px;
    }
    .dropdown__list {
      @apply bg-white font-semibold absolute;
      position: absolute;
      display: none;
      visibility: visible;
      border: 1px solid #e6e6e6;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
      z-index: 99;
      top: 100%;
      transition: opacity 0.3s, visibility 0.3s linear 0.3s;
      .item {
        cursor: pointer;
        padding: 7px 30px;
        font-size: 14px;
        white-space: nowrap;
        text-transform: none;
        color: #333;
        line-height: 1.7;
        &.active,
        &:hover {
          background-color: #f2f2f2;
        }
      }
      &.active {
        display: block;
      }
    }
    &-condition {
      @apply flex;
      span > i {
        @apply mr-1;
        font-size: 12px;
      }

      .checkbox {
        @apply flex items-center;
        input {
          display: none;
        }
        &-icon {
          overflow: visible;
          margin-right: 10px;
          color: #e5e5e5;
          border: 2px solid #e5e5e5;
          text-align: center;
          cursor: pointer;

          width: 20px;
          height: 20px;
          font-size: 9px;
          line-height: 1;
          white-space: pre;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0;
          border-color: #4a4a4a;
          background: transparent;
          text-indent: 0;

          &::before {
            position: relative;
            top: 0.5px;
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
            border-color: #c9c9c9;
            color: #aaa;
            font-size: 14px;
          }
        }
        &:hover {
          cursor: pointer;
          .checkbox-icon::before {
            content: '✓';
          }
        }
      }
      .sep-filter-right {
        @apply mx-10;
      }
    }
  }
}
.search {
  @apply flex items-center;
  &-wrap {
    @apply bg-white relative;
    input {
      font-size: 15px;
      width: 360px;
      padding: 3px 20px 4px;
      border: none;
      line-height: 2em;
      box-shadow: none;
      box-sizing: border-box;
      border-radius: 0;
      -webkit-border-radius: 0;
      -webkit-appearance: none;
    }
    .icon--search {
      position: absolute;
      right: 12px;
      top: 12px;
      color: #999;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
