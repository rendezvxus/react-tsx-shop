import { useCartStore } from "../../store/useStore";
import CartItem from "./CartItem";

const handleCheckout = () => {
    alert("Checkout is clicked")
}

export default function Cart() {

    const items = useCartStore(state => state.items)
    
    const totalPrice = items.reduce((sum, item) => sum + (item.amount * item.price), 0).toFixed(2)

    return (
        <div className="cart">
            <div className="cart-header">
                <p>CART</p>
            </div>
            <div className="cart-body">
                {items.map(item => 
                    <CartItem key={item.id} item={item} />
                )}
            </div>
            <div className="cart-footer">
                <p>Total: {totalPrice}$</p>
                <button 
                    className="cart-checkout-btn" 
                    type="button"
                    onClick={handleCheckout}
                >
                    CHECKOUT
                </button>
            </div>
        </div>
    )
}
