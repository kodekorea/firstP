import Navigation from "../components/Navigation"
import Link from "next/link"
async function getItems() {
    //await new Promise((res) => setTimeout(res, 5000))
    const response = await fetch('https://dummyjson.com/products')
    const json = await response.json()
    return json.products
}
export default async function Anything() {
    const items = await getItems()
    return (
    <div>
        <Navigation />
        {
            items.map( (item) =>
            <li>
                <Link href={`/items/${item.id}`}>{item.title}</Link>
            </li>)
        }
    </div>
    );
}