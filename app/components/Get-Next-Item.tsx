async function getNextItem(id: string){
    await new Promise((res) => setTimeout(res, 5000))
    const nextId: number = parseInt(id, 10) + 1 
    const response = await fetch(`https://dummyjson.com/products/${nextId.toString()}`)
    return response.json()
}

export default async function GetNextItem({id}: {id:string}){
    const item = await getNextItem(id)
    return <h6>{JSON.stringify(item.title)}</h6>
}