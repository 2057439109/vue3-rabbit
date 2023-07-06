// 封装分类的业务的逻辑代码
import { onMounted, ref } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { getCategoryAPI } from '@/apis/category';

export function useCategory(){
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())
    // 解决路由缓存问题
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}