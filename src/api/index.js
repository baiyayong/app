/**
 * Created by Administrator on 2017/11/11 0011.
 */
import axios from 'axios'
export const RESULT_OK = 0
export function reqSeller() {//返回的是promise对象
  return axios.get('/api2/seller')
}
export function reqGoods() {//返回的是promise对象
  return axios.get('/api2/goods')
}
export function reqRatings() {//返回的是promise对象
  return axios.get('/api2/ratings')
}
