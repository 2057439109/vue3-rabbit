/*
params: {
    orderState:0,
  page:1,
  pageSize:2
}
*/
//封装获取订单接口
import request from '@/utils/https'

export const getUserOrder = (params) => {
    return request({
        url: '/member/order',
        method: 'GET',
        params
    })
}