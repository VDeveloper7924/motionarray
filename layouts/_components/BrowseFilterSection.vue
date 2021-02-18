<template>
  <div class="filter-section-wrap">
    <div id="tags" class="facet">
      <div id="search-tags__title" class="clearfix">
        <h5>Search Tags</h5>
        <!---->
      </div>
      <div id="search-tags"></div>
    </div>
    <ul>
      <h5>Filter results</h5>
      <BrowseFilterItem
        v-for="(item, index) in conditions"
        :key="`condition-${index}`"
        v-bind:condition="item"
        v-bind:index="`category-${index}`"
      />
    </ul>
    <ul class="request">
      <li>
        <div class="request-content">
          <span style="text-transform: none" class="request-content__top">
            <strong>Can't find what you need?</strong>
            <br />
          </span>
          <span class="request-content__bottom">
            <a
              href="/requests?utm_source=website&amp;utm_medium=bottom-filters&amp;utm_campaign=Requests"
            >
              <strong>
                Request An Asset
                <i
                  class="icon--megaphone-fill"
                  style="color: rgb(224, 105, 105)"
                ></i>
              </strong>
            </a>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { filterConditionList } from '@/constants'
import BrowseFilterItem from './BrowseFilterItem'

export default {
  data: () => {
    return {
      conditions: [...filterConditionList]
    }
  },
  components: {
    BrowseFilterItem
  },
  computed: {}
}
</script>

<style lang="scss" scope>
*:before,
*:after {
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
  outline: none;
}
.filter-section-wrap {
  @apply w-4/12 mr-auto;
  max-width: 330px;
  font-family: freight-sans-pro, sans-serif;
  input {
    outline: none;
    display: none;
  }
  input:active {
    outline: none;
  }
  .facet {
    @apply mb-6;
  }
  h5 {
    @apply mb-3 py-1 font-bold uppercase;
    font-size: 15px;
    color: #4a4a4a;
  }
}
.request {
  &-content {
    @apply mt-2 text-center font-bold;
    padding: 8px 0px 18px;
    border-bottom: 1px solid #e4e4e4;
    font-family: freight-sans-pro, sans-serif;
    font-style: normal;
    font-size: 16px;

    &__top {
      color: #7d7d7d;
    }
    &__bottom {
      color: #4a4a4a;
      cursor: pointer;
      &:hover {
        color: #67c7d8;
      }
      & strong {
        @apply uppercase;
      }
    }
  }
}
</style>
