<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">
            {{seller.description}}/{{seller.deliveryTime}}分钟到达</span>
        </div>
        <div class="description">
         {{seller.description}}
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="supportClasses[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports_count" v-if="seller.supports" @click="toggleShow">
        <span class="count">{{seller.supports.length}}</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <span class="bulletin-title"></span>
    </div>
    <div class="bulletin-wrapper" @click="toggleShow">
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="">
    </div>
    <transition name="fade">
      <div class="detail" v-if="isShow">
        <div class="detail-wrapper">
          <div class="name">{{seller.name}}</div>
          <div class="star-wrapper">
            <star :score='seller.score' :size="48"/>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="support" v-for="(support,index) in seller.supports" :key="index">
              <span class="icon" :class="supportClasses[support.type]"></span>
              <span class="text">{{support.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p>{{seller.bulletin}}</p>
          </div>
        </div>
        <div class="detail-close" @click="toggleShow">
          <span class="icon-close"></span>
        </div>
      </div>
    </transition>


  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import star from '../star/star.vue'
  export default {
    data(){
      return{
        supportClasses:['decrease','discount','guarantee','invoice','special'],
        isShow:false
      }
    },
    computed: mapState(['seller']),
    components:{
      star
    },
    methods:{
      toggleShow(){
        this.isShow=!this.isShow
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .header
    position relative
    background-color rgba(7,17,27,0.5)
    .content-wrapper
      position relative
      padding  24px 12px 18px 24px;
      display flex
      .avatar
        width 64px
        height 64px
        &>img
          width 100%
          height 100%
          boder-radius 2px
      .content
        margin-left 16px
        padding 2px 0
        .title
          display flex
          .brand
            width 30px
            height 18px
            bg-image(brand)
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            color rgb(255,255,255)
            font-weight bolder
            line-height 18px
        .description
          margin-top 8px
          margin-bottom 10px
          font-size 12px
          color rgb(255,255,255)
          font-weight 200
          line-height 12px
        .support
          display flex
          .icon
            width 12px
            height 12px
            background-size 12px 12px
            background-repeat no-repeat
          .decrease
            bg-image(decrease_1)
          .discount
            bg-image(discount_1)
          .guarantee
            bg-image(guarantee_1)
          .invoice
            bg-image(invoice_1)
          .special
            bg-image(special_1)
          .text
            margin-left 4px
            font-size 10px
            color rgb(255,255,255)
            font-weight 200
            line-height 12px
      .supports_count
        position absolute
        right 12px
        bottom 18px
        height 24px
        padding 2px 8px
        background-color rgba(0,0,0,0.2)
        box-sizing border-box
        border-radius 8px
        line-height 23px
        font-size 10px
        color rgb(255,255,255)
        font-weight 200
    .bulletin-wrapper
      position relative
      padding 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      height 28px
      background-color rgba(7,17,27,0.2)
      .bulletin-title
        display inline-block
        vertical-align middle
        width 22px
        height 12px
        background-size 22px 12px
        background-repeat no-repeat
        bg-image(bulletin)
      .bulletin-text
        margin 0 4px
        font-size 10px
        color rgb(255,255,255)
        font-weight 200
        line-height 28px
      & > .icon-keyboard_arrow_right
        position absolute
        top: 6px
        right 5px
        color rgb(255,255,255)
    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      &>img
        width 100%
        height 100%
        filter blur(10px)
    .detail
      position fixed
      top: 0
      left 0
      z-index 100
      width 100%
      height 100%
      background-color rgba(7,17,27,0.8)
      &.fade-enter-active, &.fade-live-active
        transition opacity 0.3s
      &.fade-enter, &.fade-leave-to
        opacity 0
      .detail-wrapper
        min-height 100%
        padding 64px 36px 32px
        .name
          font-size 16px
          font-weight 700
          color rgb(255,255,255)
          line-height 16px
          text-align center
          margin-bottom 16px
        .star-wrapper
          display flex
          height 36px
          margin-bottom 28px
          justify-content space-around

        .title
          margin-bottom 36px
          display flex
          justify-content space-between
          align-items center
          .line
            width 112px
            height 2px
            background-color rgba(255,255,255,0.2)
          .text
            font-size 14px
            font-weight 700
            line-height 14px
            color rgb(255,255,255)
        .supports
          padding 0 12px
          margin-bottom 28px
          .support
            margin-bottom 12px
            display flex
            .icon
              width 16px
              height 16px
              background-size 16px 16px
              background-repeat no-repeat
            .decrease
              bg-image(decrease_2)
            .discount
              bg-image(discount_2)
            .guarantee
              bg-image(guarantee_2)
            .invoice
              bg-image(invoice_2)
            .special
              bg-image(special_2)
          .text
            margin-left 6px
            font-size 12px
            font-weight 200
            color rgb(255,255,255)
            line-height 12px
        .content
          font-size 12px
          font-weight 200
          color rgb(255,255,255)
          line-height 36px
    .detail-close
        font-size 32px
        color rgba(255,255,255,0.5)
        margin-top -160px
        text-align center
</style>
