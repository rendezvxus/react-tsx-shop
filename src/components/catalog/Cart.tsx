interface CartProps {
    onCheckout: () => void;
}

export default function Cart(
    { onCheckout } : CartProps
) {
    return (
        <div className="cart">
            <div className="cart-header">
                <p>CART</p>
            </div>
            <div className="cart-body">

            </div>
            <div className="cart-footer">
                <p>Total: 0$</p>
                <button 
                    className="cart-checkout-btn" 
                    type="button"
                    onClick={onCheckout}
                >
                    CHECKOUT
                </button>
            </div>
        </div>
    )
}
