<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="title">
      <template v-slot:left>
        <span class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </span>
      </template>
      <template v-slot:right>
        <span
          class="header_login"
          slot="right"
          @click="$router.push(userId ? '/profile' : '/login')"
        >
          <span class="header_login_text" v-if="!userId">登录|注册</span>
          <span class="header_login_text" v-else>
            <i class="iconfont icon-person"></i>
          </span>
        </span>
      </template>

      <!-- <span class="header_search" v-slot:left>
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right" @click="$router.push(userId ? '/profile' : '/login')">
        <span class="header_login_text" v-if="!userId">登录|注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </span> -->
    </HeaderTop>
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <!--首页导航-->
        <HomeNav :categorys="categorys" v-if="categorys.length" />
        <img src="./images/msite_back.svg" alt="" v-else />
        <!--首页附近商家-->
        <ShopList :shops="shops" v-if="shops.length" />
        <template v-else>
          <img src="./images/shop_back.svg" alt="" v-for="(item, index) in 6" :key="index" />
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
    initBScroll() {
      this.wrapScroll = new BScroll('.miste-content-wrapper', { click: true })
    },
  },
  async mounted() {
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
  .miste-content-wrapper{
    position:fixed;
    top:45px;
    bottom:50px;
    width :100%;
    overflow:hidden;
  }
}
</style>
