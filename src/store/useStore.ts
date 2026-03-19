import { create } from 'zustand'
import type { apiData, category, itemData } from '../types/common'

interface CartState {
    items: Array<itemData>,
    addItem: (item: itemData) => void,
    removeItem: (item: itemData) => void
}

interface FilterState {
    allCategories: Array<category>,
    currentFilter: category,
    setCategories: (fArr: category[]) => void,
    setFilter: (f: category) => void
}

interface ItemState {
    products: apiData[],
    setProducts: (p: apiData[]) => void,
    addProducts: (p: apiData[]) => void
}

export const useCartStore = create<CartState>((set) => ({
    items: [],
    addItem: (item: itemData) => set(state => {
        const isIndexed = state.items.find(i => i.id === item.id)
        if (isIndexed) {
            return {
                items: state.items.map(i => {
                    if (i.id === item.id) {
                        return ({...i, amount: i.amount += 1})
                    }
                    return i
                })
            }
        }
        return {            
            items: [
                ...state.items,
                item
            ]
        }
    }),

    removeItem: (item: itemData) => set(state => (
        { items: state.items.filter(stateitem => stateitem.id !== item.id) }
    )),
}))

export const useFilterState = create<FilterState>((set) => ({
    allCategories: [],
    currentFilter: {} as category,

    setCategories: (fArr: Array<category>) => set({allCategories: [...fArr]}),
    setFilter: (f: category) => set({currentFilter: f})
}))

export const useProductState = create<ItemState>((set) => ({
    products: [],
    setProducts: (p: apiData[]) => set({ products: p }),
    addProducts: (p: apiData[]) => set((state) => {
        return {products: [...state.products, ...p]}
    })
}))