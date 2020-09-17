<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="title">
      <template #left="{user}">
        <span class="header_search">
          <i class="iconfont icon-sousuo"></i>
          {{user}}
        </span>
      </template>
      <template #right="{isLogin}">
        <span
          class="header_login"
          slot="right"
          @click="$router.push(userId ? '/profile' : '/login')"
        >
          <span
            class="header_login_text"
            v-if="!isLogin"
          >登录|注册</span>
          <span
            class="header_login_text"
            v-else
          >
            <i class="iconfont icon-person"></i>
          </span>
        </span>
      </template>
    </HeaderTop>
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <!--首页导航-->
        <HomeNav
          :categorys="categorys"
          v-if="categorys.length"
        />
        <img
          src="./images/msite_back.svg"
          alt=""
          v-else
        />
        <!--首页附近商家-->
        <ShopList
          :shops="shops"
          v-if="shops.length"
        />
        <template v-else>
          <img
            src="./images/shop_back.svg"
            alt=""
            v-for="(item, index) in 6"
            :key="index"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import HomeNav from '../../components/HomeNav/HomeNav.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  name: 'Home',
  computed: {
    ...mapState({
      userId: (state) => state.user.info._id,
      title: (state) => state.home.address.name,
      categorys: (state) => state.home.categorys,
      shops: (state) => state.home.shops,
    }),
  },
  methods: {
    initBScroll () {
      if (!this.wrapScroll) {
        this.wrapScroll = new BScroll('.miste-content-wrapper', {
          click: true, //  是否显示滚动条
          scrollbar: {
            fade: true,
          },
          // 下拉加载更多
          pullDownRefresh: {
            threshold: 50,
          },
          // 上拉加载更多
          pullUpLoad: {
            threshold: -50, // 当上拉距离超过50px时触发 pullingUp 事件
          },
          // 开启 observe-dom 插件
          // observeDOM: true,
        })
      } else {
        this.wrapScroll.refresh()
      }
      // 监听下拉事件方法
      this.wrapScroll.on('pullingDown', async () => {
        console.log('触发了下拉事件')
        await this.$store.dispatch('getShops')
        this.wrapScroll.refresh()
        // 结束上拉事件
        this.wrapScroll.finishPullDown()
      })
      // 监听上拉事件方法
      this.wrapScroll.on('pullingUp', async () => {
        console.log('触发了上拉事件')
        await this.$store.dispatch('addShops')
        this.wrapScroll.refresh()
        // 结束下拉事件
        this.wrapScroll.finishPullUp()
      })
    },
  },
  async mounted () {
    this.categorys.length || (await this.$store.dispatch('getCategorys'))
    this.shops.length || (await this.$store.dispatch('getShops'))
    this.initBScroll()
  },
  components: { HeaderTop, HomeNav, ShopList },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mixins.styl';

.msite {
  width: 100%;

  .miste-content-wrapper {
    position: fixed;
    top: 45px;
    bottom: 50px;
    width: 100%;
    overflow: hidden;
  }
}
</style>
