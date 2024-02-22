import { useState } from "react";
import arrayProductos from "../json/productos.json"
import { useEffect } from "react";
import ItemList from "./ItemList";
import Carrousel from './Carrousel'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams ();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
            console.log(data);
        })
    }, [id]);

    return (
        <>
            {id ? "" : <Carrousel />}
            <ItemList items={items} />;
        </>
    )
}

export default ItemListContainer;