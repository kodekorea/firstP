import { Suspense } from "react"
import GetItem from "../../components/Get-Item"
import GetNextItem from "../../components/Get-Next-Item"
export default async function Items({params: {id}}
    : { params: { id: string } }){
    return (
        <div>
            <h1>소울이 상점</h1>
            <Suspense fallback={<h1>Loading 1</h1>}>
                <GetItem id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading 2</h1>}>
                <GetNextItem id={id} />
            </Suspense>
            
        </div>
    )
}
// { params: { id: '2020' }, searchParams: {} }
// root/items/5?lang=kr