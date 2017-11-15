//自定义filter 模块 格式化时间
import Vue from 'vue'
import moment from 'moment'

//注册全局过滤器
Vue.filter('date-string',function (value,format) {
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})
