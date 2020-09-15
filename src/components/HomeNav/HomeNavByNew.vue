<template>
  <nav class="msite_nav">
    <div class="swiper-container" v-if="categorysList.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(categorys, index) in categorysList" :key="index">
          <div class="link_to_food" v-for="category in categorys" :key="category.id">
            <div class="food_container">
              <img :src="baseImagesURL + category.image_url" />
            </div>
            <span>{{ category.title }}</span>
          </div>
        </div>
        <!-- <div class="swiper-slide">
          <div class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/9.jpg" />
            </div>
            <span>甜品饮品</span>
          </div>
          <div class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/10.jpg" />
            </div>
            <span>商超便利</span>
          </div>
          <div class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/11.jpg" />
            </div>
            <span>美食</span>
          </div>
          <div class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/12.jpg" />
            </div>
            <span>简餐</span>
          </div>
          <div class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/13.jpg" />
            </div>
            <span>新店特惠</span>
          </div>
          <div class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/14.jpg" />
            </div>
            <span>准时达</span>
          </div>
          <div class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/1.jpg" />
            </div>
            <span>预订早餐</span>
          </div>
          <div class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/2.jpg" />
            </div>
            <span>土豪推荐</span>
          </div>
        </div> -->
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </nav>
</template>
</template>

<script>
// 以new的方式创建Swiper
import Swiper from 'swiper'
// swiper@5.4.5
import 'swiper/css/swiper.css'

import { chunk } from 'lodash-es'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      baseImagesURL: 'https://fuss10.elemecdn.com',
    }
  },
  computed: {
    ...mapState({
      categorys: (state) => state.home.categorys,
    }),
    categorysList() {
      return chunk(this.categorys, 8)
    },
  },
  methods: {
    initSwiper() {
      this.navSwiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
  },
  async mounted() {
    this.categorys.length || (await this.$store.dispatch('getCategorys'))

    this.initSwiper()
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mixins.styl';

.msite_nav {
  bottom-border-1px(#e4e4e4);
  margin-top: 45px;
  height: 200px;
  background: #fff;

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      width: 100%;
      height: 100%;

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;

        .link_to_food {
          width: 25%;

          .food_container {
            display: block;
            width: 100%;
            text-align: center;
            padding-bottom: 10px;
            font-size: 0;

            img {
              display: inline-block;
              width: 50px;
              height: 50px;
            }
          }

          span {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 13px;
            color: #666;
          }
        }
      }
    }

    .swiper-pagination {
      >span.swiper-pagination-bullet-active {
        background: #02a774;
      }
    }
  }
}
</style>
