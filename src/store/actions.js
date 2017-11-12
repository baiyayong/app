/**
 * Created by Administrator on 2017/11/11 0011.
 */
import {reqSeller,reqGoods,reqRatings,RESULT_OK} from '../api'
import {RECEIVE_SELLER,RECEIVE_GOODS,RECEIVE_RATINGS} from './type'
export default {
  //获取商家信息
  getSeller({commit}){
    //发送ajax请求，获取seller数据
    reqSeller().then(response =>{
      const result=response.data
      if(result.code===RESULT_OK){
        const seller=result.data
        //提交mutation请求
        commit(RECEIVE_SELLER,{seller})
      }
    })

  },
  getGoods({commit},cd){
    //发送ajax请求，获取goods数据
    reqGoods().then(response =>{
      const result=response.data
      if(result.code===RESULT_OK){
        const goods=result.data
        //提交mutation请求
        commit(RECEIVE_GOODS,{goods})
        //如果传递了回调函数，调用回调函数，通知调用者
        cd && cd()
      }
    })

  },
  getRatings({commit}){
    //发送ajax请求，获取ratings数据
    reqRatings().then(response =>{
      const result=response.data
      if(result.code===RESULT_OK){
        const ratings=result.data
        //提交mutation请求
        commit(RECEIVE_RATINGS,{ratings})
      }
    })
  }
}
