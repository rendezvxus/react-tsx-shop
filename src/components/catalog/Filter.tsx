import { useEffect } from "react"
import { useFilterState } from "../../store/useStore"
import FilterButton from "./FilterButton"
import type { category } from "../../types/common"

export default function Filter() {

    const allCategories = useFilterState(state => state.allCategories)
    const setCategories = useFilterState(state => state.setCategories)
    
    const url = 'https://dummyjson.com/products/categories'

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(jsonData => setCategories(jsonData))
    })

    return (
        <div className="filter-container">
            <div className="filter-wrapper">
                {allCategories.map((c: category) => 
                    <FilterButton key={c.slug} category={c} />
                )}
            </div>
        </div>
    )
}