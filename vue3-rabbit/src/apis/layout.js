
import httpInstance from "@/utils/https";
export function getCategoryAPI(){
    return httpInstance({
        url:'/home/category/head'
    })
}