import type { apiPayload } from "../types/common"

export function constructUrl(
    payload: apiPayload = {}
): string {

    const { limit = 6, skip = 0, category } = payload
    
    const url = 'https://dummyjson.com/products'
    + (category ? '/category/' + category.slug : '')
    + '?limit=' + limit
    + (skip ? '&skip=' + skip : '')
    + '&select=title,description,price,images,category'

    return url
}