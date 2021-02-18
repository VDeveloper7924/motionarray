<template>
  <div class="content-wraper">
    <div class="content">
      <div class="content-image">
        <img
          src="https://www.istockphoto.com/resources/images/PhotoFTLP/PetsAnimals-942206906.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div class="content-title">
        <div class="content-title__text">
          <div class="content-title__text--top">
            <a href="#">Sanitizing A School Hallway</a>
          </div>
          <div class="content-title__text--bottom">
            <span>STOCK VIDEO</span>
          </div>
        </div>
        <div class="content-title__option">
          <div class="product__badge">
            <span>new</span>
          </div>
          <div class="product__down">
            <a href="#"><span class="icon icon--download-1"></span> </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-image">
        <img
          src="https://www.istockphoto.com/resources/images/PhotoFTLP/PetsAnimals-942206906.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div class="content-title">
        <div class="content-title__text">
          <div class="content-title__text--top">
            <a href="#">Sanitizing A School Hallway</a>
          </div>
          <div class="content-title__text--bottom">
            <span>STOCK VIDEO</span>
          </div>
        </div>
        <div class="content-title__option">
          <div class="product__badge">
            <span>new</span>
          </div>
          <div class="product__down">
            <a href="#"><span class="icon icon--download-1"></span> </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-image">
        <img
          src="https://www.istockphoto.com/resources/images/PhotoFTLP/PetsAnimals-942206906.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div class="content-title">
        <div class="content-title__text">
          <div class="content-title__text--top">
            <a href="#">Sanitizing A School Hallway</a>
          </div>
          <div class="content-title__text--bottom">
            <span>STOCK VIDEO</span>
          </div>
        </div>
        <div class="content-title__option">
          <div class="product__badge">
            <span>new</span>
          </div>
          <div class="product__down">
            <a href="#"><span class="icon icon--download-1"></span> </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-image">
        <img
          src="https://www.istockphoto.com/resources/images/PhotoFTLP/PetsAnimals-942206906.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div class="content-title">
        <div class="content-title__text">
          <div class="content-title__text--top">
            <a href="#">Sanitizing A School Hallway</a>
          </div>
          <div class="content-title__text--bottom">
            <span>STOCK VIDEO</span>
          </div>
        </div>
        <div class="content-title__option">
          <div class="product__badge">
            <span>new</span>
          </div>
          <div class="product__down">
            <a href="#"><span class="icon icon--download-1"></span> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'BrowseLayout',
  components: {}
}
</script>

<style lang="scss" scope>
.content-wraper {
  @apply flex flex-wrap justify-between;
  width: auto;
  max-width: 1050px;
}

.content {
  width: 323px;
  height: 281px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  &-image {
    width: 100%;
    height: 182px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  &-title {
    @apply flex p-4 justify-between;
    &__text {
      &--top {
        a {
          @apply font-bold;
          font-size: 18px;
          color: #4a4a4a;
          &:hover {
            color: #e06969;
          }
        }
      }
      &--bottom {
        @apply font-bold;
        font-size: 12px;
        color: #a0a0a0;
      }
    }
    &__option {
      @apply flex;
      margin-top: 10px;
      .product {
        &__badge {
          @apply p-1 font-semibold;
          height: auto;
          font-size: 8px;
          line-height: 8px;
          height: 19px;
          background-color: #e06969;
          color: #fff;
          text-transform: uppercase;
          margin-left: 3px;
        }
        &__down {
          font-size: 20px;
          line-height: 18px;
          transition: color 0.25s ease;
          color: rgba(74, 74, 74, 0.5);
          margin-left: 10px;
          &:hover {
            color: #e06969;
          }
        }
      }
    }
  }
}
</style>
