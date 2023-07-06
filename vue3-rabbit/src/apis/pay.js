import request from '@/utils/https'

export const getOrderAPI = (id) => {
    return request({
        url: `/member/order/${id}`
    })
}