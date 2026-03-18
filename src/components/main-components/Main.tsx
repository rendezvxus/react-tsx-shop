import { ItemsList, Cart, Filter } from "../catalog/index.ts"

export default function Main() {

    return (
        <main>
            <Filter />
            <ItemsList />
            <Cart />
        </main>
    )    
}