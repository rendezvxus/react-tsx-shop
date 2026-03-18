import { useEffect, useState } from "react";
import type { apiData, apiPayload } from "../../types/common";
import { constructUrl } from "../../utils/apiUtils";
import Item from "./Item";

export default function ItemsList() {

    const [productsData, setProductsData] = useState<apiData[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    
    const loadItems = (payload: apiPayload = {}) => {
        const url = constructUrl(payload)
        
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setProductsData(productsData.concat(data.products))
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        setLoading(true)
        loadItems()
    },[])

    if (loading) {return (<></>)}
    
    return (
        <div className="itemsList-wrapper">
            <div className="itemsList"> 
                {productsData.map(apiData => <Item key={apiData.id} data={apiData}/>)}
            </div>
            <button 
                className="show-more-btn" 
                type="button"
                onClick={() => loadItems( {limit: 6, skip: productsData.length} )}
                >
                    show more
                </button>
        </div>
    )
}
