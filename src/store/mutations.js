/**
 * Created by Administrator on 2017/11/11 0011.
 */
import {RECEIVE_SELLER,RECEIVE_GOODS,RECEIVE_RATINGS} from './type'
export default {
   [RECEIVE_SELLER] (state,{seller}){
     state.seller=seller
   },
  [RECEIVE_GOODS] (state,{goods}){
    state.goods=goods
  },
  [RECEIVE_RATINGS] (state,{ratings}){
    state.ratings=ratings
  }
}
