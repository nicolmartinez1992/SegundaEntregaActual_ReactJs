import React from "react"
import {useState} from "react"
import {useEffect} from "react"
import { getProductById } from "../../pages/products"
import ItemDetail from "../item-detail"

const ItemDetailContainer = () =>{
const [product, setProduct] = useState(0)

useEffect (() => {
    getProductById("1")
    .then(response => {
        setProduct(response)
    })
    .catch(error => {
        console.log(error)
    })
}, [])

return (
    <div>
        <ItemDetail {...product}/>
    </div>
)
}

export default ItemDetailContainer