<template>
  <nav class="msite_nav">
    <swiper :options="swiperOptions" v-if="categorys.length">
      <swiper-slide v-for="(categorys, index) in categorysList" :key="index">
        <div class="link_to_food" v-for="category in categorys" :key="category.id">
          <div class="food_container">
            <img :src="image_url + category.image_url" />
          </div>
          <span>{{ category.title }}</span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </nav>
</template>

<script>
// 引入vue-awesome-swiper以组件的方式创建Swiper
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// swiper@5.4.5
import 'swiper/css/swiper.css'

import { chunk } from 'lodash-es'

export default {
  props: {
    categorys: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      swiperOptions: {
        bulletActiveClass: 'my-bullet-active',
        pagination: {
          el: '.swiper-pagination',
        },
        // loop: false,
        // observer: true,
        // observeParents: true,
      },
      image_url: 'https://fuss10.elemecdn.com/',
    }
  },
  computed: {
    categorysList() {
      return chunk(this.categorys, 8)
    },
  },
  async mounted() {},
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mixins.styl';


.my-bullet-active{
  background: #000;
}

.msite_nav {
  bottom-border-1px(#e4e4e4);
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
