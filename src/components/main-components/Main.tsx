import { ItemsList, Cart, Filter } from "../catalog/index.ts"

export default function Main() {
    
    const handleCheckout = () => {
        alert("Checkout is clicked")
    }

    return (
        <main>
            <Filter />
            <ItemsList />
            <Cart onCheckout={handleCheckout}/>
        </main>
    )    
}