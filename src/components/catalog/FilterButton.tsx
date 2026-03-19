import { useFilterState } from "../../store/useStore"
import type { category } from "../../types/common"

interface FilterButtonProps {
    key: string,
    category: category
}

export default function FilterButton(
    { category }: FilterButtonProps
) {
    
    const filter = useFilterState(state => state.currentFilter)
    const setFilter = useFilterState(state => state.setFilter)

    return (
        <>
            <label  className="category-button">
                {category.name}
                <input 
                    type="checkbox" 
                    className="switch" 
                    onChange={() => {
                        setFilter(category)
                    }}
                />
            </label>
        </>
    )
}