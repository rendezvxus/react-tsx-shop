import { useCartStore } from "../../store/useStore";
import type { itemData } from "../../types/common";

interface CartItemProps {
    key: string,
    item: itemData
}

export default function CartItem(
    { item }: CartItemProps
) {
    const removeItem = useCartStore(state => state.removeItem)
    
    return (
        <div className="cart-item">
            <img className="cart-item-image" src={item.images[0]}/>
            <div className="cart-item-info">
                <p>{item.title}</p>
                <h3>{item.price}$ x {item.amount}</h3>
            </div>
            <button 
                onClick={() => removeItem(item)}
            >
                <img src="/Cross.svg" alt="X" className="cart-item-image" />
            </button>
        </div>
    )
}