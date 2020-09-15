<template>
  <!-- 底部导航 -->
  <footer class="footer_guide">
    <span class="guide_item" :class="{ on: $route.path === '/home' }" @click="goto('/home')">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <span class="guide_item" :class="{ on: $route.path === '/search' }" @click="goto('/search')">
      <span>
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide_item" :class="{ on: $route.path === '/order' }" @click="goto('/order')">
      <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide_item" :class="{ on: $route.path === '/profile' }" @click="goto('/profile')">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </span>
  </footer>
</template>

<script>
export default {
  methods: {
    goto(path) {
      if (path === this.$route.path) return
      this.$router.replace(path)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mixins.styl';

.footer_guide {
  top-border-1px(#e4e4e4);
  position: fixed;
  z-index: 300;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;

    &.on {
      color: #02a774;
    }

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;

      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>
