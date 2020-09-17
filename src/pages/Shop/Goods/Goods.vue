<template>
  <div class="goods">
    <div
      class="menu-wrapper"
      ref="menuWrapper"
    >
      <ul>
        <li class="menu-item current">
          <span class="text bottom-border-1px">
            <img
              class="icon"
              src="https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png"
            >
            折扣
          </span>
        </li>
        <li class="menu-item">
          <span class="text bottom-border-1px">
            <img
              class="icon"
              src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png"
            >
            优惠
          </span>
        </li>
      </ul>
    </div>
    <div
      class="foods-wrapper"
      ref="foodsWrapper"
    >
      <ul>
        <li class="food-list-hook">
          <h1 class="title">折扣</h1>
          <ul>
            <li class="food-item bottom-border-1px">
              <div class="icon">
                <img
                  width="57"
                  height="57"
                  src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114"
                >
              </div>
              <div class="content">
                <h2 class="name">南瓜粥</h2>
                <p class="desc">甜粥</p>
                <div class="extra">
                  <span class="count">月售 91 份</span>
                  <span>好评率 100%</span>
                </div>
                <div class="price">
                  <span class="now">￥9</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <div class="iconfont icon-remove_circle_outline"></div>
                    <div class="cart-count">1</div>
                    <div class="iconfont icon-add_circle"></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="food-item bottom-border-1px">
              <div class="icon">
                <img
                  width="57"
                  height="57"
                  src="http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114"
                >
              </div>
              <div class="content">
                <h2 class="name">红豆薏米美肤粥</h2>
                <p class="desc">甜粥</p>
                <div class="extra">
                  <span class="count">月售 86 份</span>
                  <span>好评率 100%</span>
                </div>
                <div class="price">
                  <span class="now">￥12</span>
                </div>
                <div class="cartcontrol-wrapper">
                  CartControl
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li class="food-list food-list-hook">
          <h1 class="title">香浓甜粥</h1>
          <ul>
            <li class="food-item bottom-border-1px">
              <div class="icon">
                <img
                  width="57"
                  height="57"
                  src="http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114"
                >
              </div>
              <div class="content">
                <h2 class="name">红枣山药粥</h2>
                <p class="desc">红枣山药糙米粥,素材包</p>
                <div class="extra">
                  <span class="count">月售 17 份</span>
                  <span>好评率 100%</span>
                </div>
                <div class="price">
                  <span class="now">￥29</span>
                  <span class="old">￥36</span>
                </div>
                <div class="cartcontrol-wrapper">
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 购物车 -->
    <div>
      <div class="shopcart">
        <div class="content">
          <div class="content-left">
            <div class="logo-wrapper">
              <div class="logo highlight">
                <i class="iconfont icon-shopping_cart highlight"></i>
              </div>
              <div class="num">1</div>
            </div>
            <div class="price highlight">￥10</div>
            <div class="desc">另需配送费￥4 元</div>
          </div>
          <div class="content-right">
            <div class="pay not-enough">
              还差￥10 元起送
            </div>
          </div>
          <!-- <div class="content-right">
            <div class="pay not-enough">
              ￥20元起送
            </div>
            <div class="pay not-enough">
              还差￥10 元起送
            </div>
            <div class="pay enough">
              去结算
            </div>
          </div> -->
        </div>
        <div
          class="shopcart-list"
          style="display: none;"
        >
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food">
                <span class="name">红枣山药糙米粥</span>
                <div class="price"><span>￥10</span></div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <div class="iconfont icon-remove_circle_outline"></div>
                    <div class="cart-count">1</div>
                    <div class="iconfont icon-add_circle"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="list-mask"
        style="display: none;"
      ></div>
    </div>
    <!-- food弹出框 -->
    <div
      class="food"
      style="display:none"
    >
      <div class="food-content">
        <div class="image-header">
          <img src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750">
          <p class="foodpanel-desc">主、辅料:水、大米、南瓜、冰糖等</p>
          <div class="back">
            <i class="iconfont icon-arrow_left"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">南瓜粥</h1>
          <div class="detail">
            <span class="sell-count">月售 91 份</span>
            <span class="rating">好评率 100%</span>
          </div>
          <div class="price">
            <span class="now">￥9</span>
            <span
              class="old"
              style="display: none;"
            >￥</span>
          </div>
          <div class="cartcontrol-wrapper">
            cartcontrol 组件
          </div>
        </div>
      </div>
      <div class="food-cover"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopGoods',
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/mixins.styl';

.cartcontrol {
  font-size: 0;

  .cart-decrease {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .icon-remove_circle_outline {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .icon-add_circle {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;
  }
}

.food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 48px;
  z-index: 101;
  width: 100%;

  &.fade-enter-active, &.fade-leave-active {
    transition: opacity 0.5s;
  }

  &.fade-enter, &.fade-leave-to {
    opacity: 0;
  }

  .food-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 65%;
    z-index: 66;
    background: #fff;
    border-radius: 5px;

    .image-header {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .foodpanel-desc {
        font-size: 10px;
        color: #ddd;
        letter-spacing: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0 10px 10px;
      }

      .back {
        position: absolute;
        top: 10px;
        left: 0;

        .icon-arrow_left {
          display: block;
          padding: 10px;
          font-size: 20px;
          color: #fff;
        }
      }
    }

    .content {
      position: relative;
      padding: 18px;

      .title {
        line-height: 14px;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        color: rgb(7, 17, 27);
      }

      .detail {
        margin-bottom: 18px;
        line-height: 10px;
        height: 10px;
        font-size: 0;

        .sell-count, .rating {
          font-size: 10px;
          color: rgb(147, 153, 159);
        }

        .sell-count {
          margin-right: 12px;
        }
      }

      .price {
        font-weight: 700;
        line-height: 24px;

        .now {
          margin-right: 8px;
          font-size: 14px;
          color: rgb(240, 20, 20);
        }

        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }

      .cartcontrol-wrapper {
        position: absolute;
        right: 12px;
        bottom: 12px;
      }

      .buy {
        position: absolute;
        right: 18px;
        bottom: 18px;
        z-index: 10;
        height: 24px;
        line-height: 24px;
        padding: 0 12px;
        box-sizing: border-box;
        border-radius: 12px;
        font-size: 10px;
        color: #fff;
        background: rgb(0, 160, 220);

        &.fade-transition {
          transition: all 0.2s;
          opacity: 1;
        }

        &.fade-enter, &.fade-leave {
          opacity: 0;
        }
      }
    }
  }

  .food-cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: -48px;
    left: 0;
    z-index: 55;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.goods {
  display: flex;
  position: absolute;
  top: 195px;
  bottom: 46px;
  width: 100%;
  background: #fff;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;

    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      padding: 0 12px;
      line-height: 14px;

      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        color: $green;
        font-weight: 700;

        .text {
          border-none();
        }
      }

      .icon {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
      }

      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        bottom-border-1px(rgba(7, 17, 27, 0.1));
        font-size: 12px;
      }
    }
  }

  .foods-wrapper {
    flex: 1;

    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }

    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      bottom-border-1px(rgba(7, 17, 27, 0.1));

      &:last-child {
        border-none();
        margin-bottom: 0;
      }

      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }

      .content {
        flex: 1;

        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .desc, .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }

        .desc {
          line-height: 12px;
          margin-bottom: 8px;
        }

        .extra {
          .count {
            margin-right: 12px;
          }
        }

        .price {
          font-weight: 700;
          line-height: 24px;

          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }

          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}

.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;

  .content {
    display: flex;
    background: #141d27;
    font-size: 0;
    color: rgba(255, 255, 255, 0.4);

    .content-left {
      flex: 1;

      .logo-wrapper {
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        border-radius: 50%;
        background: #141d27;

        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          text-align: center;
          background: #2b343c;

          &.highlight {
            background: $green;
          }

          .icon-shopping_cart {
            line-height: 44px;
            font-size: 24px;
            color: #80858a;

            &.highlight {
              color: #fff;
            }
          }
        }

        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: 9px;
          font-weight: 700;
          color: #ffffff;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
      }

      .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 5px;
        line-height: 24px;
        padding-right: 12px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 700;
        color: #fff;

        &.highlight {
          color: #fff;
        }
      }

      .desc {
        display: inline-block;
        vertical-align: bottom;
        margin-bottom: 15px;
        margin-left: -45px;
        font-size: 10px;
      }
    }

    .content-right {
      flex: 0 0 105px;
      width: 105px;

      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        color: #fff;

        &.not-enough {
          background: #2b333b;
        }

        &.enough {
          background: #00b43c;
          color: #fff;
        }
      }
    }
  }

  .ball-container {
    .ball {
      position: fixed;
      left: 32px;
      bottom: 22px;
      z-index: 200;
      transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);

      .inner {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: $green;
        transition: all 0.4s linear;
      }
    }
  }

  .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    transform: translateY(-100%);

    &.move-enter-active, &.move-leave-active {
      transition: transform 0.3s;
    }

    &.move-enter, &.move-leave-to {
      transform: translateY(0);
    }

    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);

      .title {
        float: left;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }

      .empty {
        float: right;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }

    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;

      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        bottom-border-1px(rgba(7, 17, 27, 0.1));

        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
}

.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  backdrop-filter: blur(10px);
  opacity: 1;
  background: rgba(7, 17, 27, 0.6);

  &.fade-enter-active, &.fade-leave-active {
    transition: all 0.5s;
  }

  &.fade-enter, &.fade-leave-to {
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
}
</style>