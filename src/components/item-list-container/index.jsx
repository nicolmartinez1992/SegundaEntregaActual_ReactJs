import React from "react";
import {useState, useEffect} from "react"
import {getProducts} from "../../pages/products"
import ItemList from "../item-list";
import Title from "../title";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <Title greeting= "Bienvenidos a TRACTO!" />
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;