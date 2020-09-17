<template>
  <div>
    <!-- 商家头部 -->
    <ShopHeader />
    <!-- 商家导航 -->
    <div class="tab">
      <div class="tab-item">
        <router-link
          :to="{name:'shopGoods'}"
          replace
        >点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link
          :to="{name:'shopRatings'}"
          replace
        >评价</router-link>
      </div>
      <div class="tab-item">
        <router-link
          :to="{name:'shopInfo'}"
          replace
        >商家</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    this.$store.dispatch('getShopGoods')
    this.$store.dispatch('getShopRatings')
    this.$store.dispatch('getShopInfo')
  },
  components: {
    ShopHeader
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mixins.styl';

// 导航
.tab {
  height: 40px;
  line-height: 40px;
  background: #fff;
  bottom-border-1px(rgba(7, 17, 27, 0.1));

  .tab-item {
    float: left;
    width: 33.33333%;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);

    a {
      display: block;
      position: relative;

      &.router-link-active {
        color: #02a774;

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 35px;
          height: 2px;
          transform: translateX(-50%);
          background: #02a774;
        }
      }
    }
  }
}
</style>