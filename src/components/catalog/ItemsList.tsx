import { useEffect } from "react";
import type { apiPayload } from "../../types/common";
import { constructUrl } from "../../utils/apiUtils";
import Item from "./Item";
import { useFilterState, useProductState } from "../../store/useStore";

const generateId = () => {
    return (Math.random() * 1000000).toFixed(0)
}

export default function ItemsList() {

    const { products, setProducts, addProducts } = useProductState()    
    const currentFilter = useFilterState(state => state.currentFilter)
    
    const loadItems = (
        payload: apiPayload = {},
        reset: boolean = false
    ) => {
        console.log("category: " + payload.category)
        const url = constructUrl(payload)
        
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                if (reset) {
                    setProducts(data.products)
                } else {
                    console.log(currentFilter)
                    addProducts(data.products)
                }
            })
    }

    useEffect(() => {
        loadItems({
            limit: currentFilter.slug ? 0 : 6, 
            skip: 0, 
            category: currentFilter.slug ? currentFilter.slug : undefined
        }, true)
    }, [currentFilter])
    
    const createLimits: (n : number) => number = (currentLength) => {
        const LIMIT = 6
        const unrendered = currentLength % LIMIT
        return unrendered ? LIMIT - unrendered + 3 : LIMIT
    }

    return (
        <div className="itemsList-wrapper">
            <div className="itemsList"> 
                { products.map(apiData => {
                    const id = generateId()
                    return <Item key={id} data={apiData}/>
                })}
            </div>
            <button 
                className="show-more-btn" 
                type="button"
                onClick={() => {
                    const limits = createLimits(products.length)
                    loadItems({limit: limits, skip: products.length}, false)
                }}
                >
                    show more
                </button>
        </div>
    )
}
