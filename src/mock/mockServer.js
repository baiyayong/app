/**
 * Created by Administrator on 2017/11/10 0010.
 */
//用mockjs模拟接口数据
import Mock from 'mockjs'
import data from './data.json'
//映射几个接口
Mock.mock('/api2/goods',{
  code:0,
  data:data.goods
})
Mock.mock('/api2/ratings',{
  code:0,
  data:data.ratings
})
Mock.mock('/api2/seller',{
  code:0,
  data:data.seller
})
