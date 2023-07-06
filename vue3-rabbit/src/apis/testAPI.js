import httpInstance from "@/utils/https";


export function getCategory(){
   return httpInstance({
        url:"home/category/head"
    })
}