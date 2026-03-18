import { useEffect, useState } from "react";
import type { apiData } from "../../types/common";
import { constructUrl } from "../utils/apiUtils";
import Item from "./Item";

export default function ItemsList() {

    const [productsData, setProductsData] = useState<apiData[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(() => {

        setLoading(true)

        const url = constructUrl()
        
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setProductsData(data.products)
            })
            .finally(() => setLoading(false))
    },[])

    if (loading) {
        return (
            <>

            </>
        )
    }
    
    console.log("i got here really")
    console.log(productsData)
    return (
        <div className="itemsList-wrapper">
            <div className="itemsList"> 
                {
                    productsData.map(
                        apiData => {
                            console.log("rendering item " + apiData.id)
                            return <Item id={apiData.id} data={apiData}/>
                        }
                    )
                }
            </div>
            <button className="show-more-btn" type="button">show more</button>
        </div>
    )
}