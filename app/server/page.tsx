async function getItems() {
    await new Promise((res) => setTimeout(res, 5000))
    const response = await fetch('https://dummyjson.com/products')
    const json = await response.json()
    return json
}

export default async function Item2() {
    const items = await getItems()
    return (
        <div>{JSON.stringify(items)}</div>
    )
}