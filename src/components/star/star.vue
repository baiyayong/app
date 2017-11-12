<template>
  <div class="star">
    <span v-for="sc in starClasses" :class="sc"></span>
   <!-- <span class="star36 on"></span>
    <span class="star36 on"></span>
    <span class="star36 on"></span>
    <span class="star36 half"></span>
    <span class="star36 off"></span>-->
  </div>
</template>

<script>
  export default {
     props:{
       score:Number,
       size:Number
     },
    computed:{
      starClasses(){
        const {score, size}=this
        const scs=[]
        //取整
        const scoreInteger=Math.floor(score)
        //向数组中添加`star${size} on`
        for (let i = 0; i < scoreInteger; i++) {
          scs.push(`star${size} on`)
        }
        //向数组中添加`star${size} half`
        if(score-scoreInteger>=0.5){
          scs.push(`star${size} half`)
        }
        //向数组中添加`star${size} off`
       while(scs.length<5){
         scs.push(`star${size} off`)
       }
        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .star
    display flex
    .star36
      width 20px
      height 20px
      margin-left 20px
      background-size 20px 20px
      background-repeat no-repeat
      &.on
        bg-star(star36_on)
      &.half
        bg-star(star36_half)
      &.off
        bg-star(star36_off)
    .star24
      width 15px
      height 15px
      margin-left 20px
      background-size 15px 15px
      background-repeat no-repeat
      &.on
        bg-star(star24_on)
      &.half
        bg-star(star24_half)
      &.off
        bg-star(star24_off)
    .star48
      width 30px
      height 30px
      margin-left 20px
      background-size 30px 30px
      background-repeat no-repeat
      &.on
        bg-star(star48_on)
      &.half
        bg-star(star48_half)
      &.off
        bg-star(star48_off)
</style>
