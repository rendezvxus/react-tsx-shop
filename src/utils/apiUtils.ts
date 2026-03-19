import type { apiData, apiPayload } from "../types/common"

export function constructUrl(
    payload: apiPayload = {}
): string {

    const { limit = 6, skip = 0, category = '' } = payload
    
    const url = 'https://dummyjson.com/products'
    + (category ? '/category/' + category : '')
    + '?limit=' + limit
    + (skip ? '&skip=' + skip : '')
    + '&select=title,description,price,images,category'

    return url
}

export async function getAllProducts(): Promise<apiData[]> {
    const payload: apiPayload = { limit: 6, skip: 0, category: '' }
    const url = constructUrl(payload)
    const response = await fetch(url)
    const data = await response.json()
    return data.products
}