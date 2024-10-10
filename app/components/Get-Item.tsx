async function getItem(id: string){
    await new Promise((res) => setTimeout(res, 3000))
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    return response.json()
}

export default async function GetItem({id}: {id:string}){
    const item = await getItem(id)
    return <h6>{JSON.stringify(item.description)}</h6>
}