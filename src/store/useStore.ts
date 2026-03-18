import { create } from 'zustand'
import type { itemData } from '../types/common'

interface CartState {
    items: Array<itemData>,
    addItem: (item: itemData) => void,
    removeItem: (item: itemData) => void
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