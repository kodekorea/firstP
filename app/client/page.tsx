"use client";
import {useState, useEffect} from "react"
export default function Item() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getItems = async () => {
        let data = await fetch('https://dummyjson.com/products')
        let json = await data.json()
        setItems(json)
        setIsLoading(false)
    }
    useEffect( () => {
        getItems()
    }, [])
    return (
        <div>{isLoading ? "Loading" : JSON.stringify(items)}</div>
    )
}
