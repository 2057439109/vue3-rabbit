<script setup>
import LayoutNav from './components/layoutNav.vue'
import LayoutHeader from './components/layoutHeader.vue'
import LayoutFooter from './components/layoutFooter.vue'
import layoutFixed from './components/layoutFixed.vue'

// 触发获取列表的action
import { usecategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
const categoryStore = usecategoryStore()
onMounted(() => {
    categoryStore.getCategory()
})

</script>

<template>
    <layoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
</template>@/stores/categoryStore@/stores/categoryStore@/stores/categoryStore