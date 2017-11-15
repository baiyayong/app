/**
 * Created by Administrator on 2017/11/11 0011.
 */
import {RECEIVE_SELLER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  INRECEIVE_FOOD_COUNT,
  DERECEIVE_FOOD_COUNT,
  CLEAR_CART} from './type'
import Vue from 'vue'
export default {
   [RECEIVE_SELLER] (state,{seller}){
     state.seller=seller
   },
  [RECEIVE_GOODS] (state,{goods}){
    state.goods=goods
  },
  [RECEIVE_RATINGS] (state,{ratings}){
    state.ratings=ratings
  },
  [INRECEIVE_FOOD_COUNT](state,{food}){
    if (food.count) {
      food.count++
    } else {
      //food.count=1//给food添加count属性, 值为1    没有数据绑定, 界面不会更新
      Vue.set(food, 'count', 1) // 新加的属性就有了数据绑定, 界面就会更新
    }
  },
  [DERECEIVE_FOOD_COUNT](state,{food}){
     if(food.count){
       food.count--
     }
  },
  [CLEAR_CART](state,{foodList}){
    foodList.forEach((food)=>food.count=0)
  }
}
