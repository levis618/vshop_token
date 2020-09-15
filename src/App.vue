<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.hasFooterGuide" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {} from '../../'
export default {
  components: {
    FooterGuide,
  },
  mounted() {
    this.$store.dispatch('autoLogin')
    this.$store.dispatch('getAddress')
  },
}
</script>
<style></style>
