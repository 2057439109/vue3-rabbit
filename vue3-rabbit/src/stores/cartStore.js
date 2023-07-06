// 封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user.js'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '../apis/cart.js'
export const userCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 定义state-cartList
    const cartList = ref([])
    // 封装更新购物车
    const updataNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }

    // 定义action-addCart
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            // 执行登录后的逻辑
            // 加入购物车接口调用
            await insertCartAPI({ skuId, count })
            // 获取最新购物车列表
            // 使用最新购物车列表覆盖本地购物车列表
            updataNewList()
        } else {
            //添加购物车操作
            // 已添加过，count加一；没有添加过，直接push
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                // 找到了
                item.count++
            } else {
                // 没找到
                cartList.value.push(goods)
            }
        }
    }

    // 删除购物车
    const delCart = async (skuId) => {
        if (isLogin.value) {
            // 登录后删除购物车
            await delCartAPI([skuId])
            updataNewList()

        } else {
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }

    }
    // 清空购物车
    const clearCart = () => {
        cartList.value = []
    }



    //计算属性
    // 1计算总的数量
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    // 2计算总价格
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    // 单选功能
    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 全选功能
    const allCheck = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }
    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    // 已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 已选择价格
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

    return {

        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart,
        updataNewList
    }



}, {
    persist: true
}
)