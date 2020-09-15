<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop title="首页">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right" @click="$router.push(userId ? '/profile' : '/login')">
        <span class="header_login_text" v-if="!userId">登录|注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </span>
    </HeaderTop>
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <!--首页导航-->
        <HomeNav />
        <!--首页附近商家-->
        <ShopList />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import HomeNav from '../../components/HomeNav/HomeNav.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  name: 'Home',
  computed: {
    ...mapState({
      userId: (state) => state.user.info._id,
    }),
  },
  mounted() {},
  components: { HeaderTop, HomeNav, ShopList },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/mixins.styl';

.msite {
  width: 100%;
}
</style>
