<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
    <FooterGuide v-show="$route.meta.hasFooterGuide" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide,
  },
  mounted () {
    this.$store.dispatch('autoLogin')
    this.$store.dispatch('getAddress')
  },
}
</script>
<style lang="stylus" scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.move-enter-active {
  transition: transform 0.3s;
}

.move-enter {
  transform: translateX(100%);
}

.move-leave-to {
  transform: translateX(-100%);
}
</style>
