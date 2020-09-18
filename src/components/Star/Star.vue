<template>
  <div
    class="star"
    :class="'star-'+size"
  >
    <span
      class="star-item on"
      v-for="(sc, index) in starClasses"
      :class="sc"
      :key="index"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    starClasses () {
      const { score } = this
      let classes = []
      let scoreInt = Math.floor(score)
      // 加几个on
      for (let index = 0; index < scoreInt; index++) {
        classes.push('on')
      }
      // 加1个或0个half
      if (score * 10 - scoreInt * 10 >= 5) {
        classes.push('half')
      }
      // 剩余的加off
      for (let index = 0; index < 5 - classes.length; index++) {
        classes.push('off')
      }
      return classes
    },
  },
}
</script>

<style lang="stylus">
@import '../../assets/css/mixins.styl';

// 星星的样式
.star { // 2x图 3x图
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star48_on');
      }

      &.half {
        bg-image('./images/stars/star48_half');
      }

      &.off {
        bg-image('./images/stars/star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star36_on');
      }

      &.half {
        bg-image('./images/stars/star36_half');
      }

      &.off {
        bg-image('./images/stars/star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./images/stars/star24_on');
      }

      &.half {
        bg-image('./images/stars/star24_half');
      }

      &.off {
        bg-image('./images/stars/star24_off');
      }
    }
  }
}
</style>
