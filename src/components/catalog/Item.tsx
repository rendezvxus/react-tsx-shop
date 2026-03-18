import type { apiData } from "../../types/common";

interface ItemProps {
    id: string,
    data: apiData
}

export default function Item({ data }: ItemProps) {
    return (
        <div className="item">
            <img className="item-img" src={data.images[0]} />
            <div className="item-name-container">
                <h1>{data.title}</h1>
            </div>
            <div className="item-desc-container">
                <p>{data.description}</p>
            </div>
            <div className="item-footer">
                <h2>{data.price} $</h2>
                <button className="item-add-to-cart" type="button">
                    <img className="cart-img" src="/Cart.svg"/>
                </button>
            </div>
        </div>
    )
}