import { useState } from "react";
//import arrayProductos from "../json/productos.json"
import { useEffect } from "react";
import ItemList from "./ItemList";
import Carrousel from './Carrousel'
import { useParams } from "react-router-dom";
import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import Loading from "./loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams ();

    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
    //         }, 2000);
    //     })
    //     promesa.then(data => {
    //         setItems(data);
    //         console.log(data);
    //     })
    // }, [id]);

    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");
    //     arrayProductos.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });
    //     console.log ('proceso realizado con exito')
    // },[])

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where('categoria', "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

    return (
        <>
            {id ? "" : <Carrousel />}
            {loading ? <Loading /> : <ItemList items={items} />};
        </>
    )
}

export default ItemListContainer;