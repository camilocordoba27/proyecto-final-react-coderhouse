import { useContext } from 'react';
import ItemCount from './ItemCount'
import { CartContext } from './context/CartContext';

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const onAdd = (quantity) =>{
        addItem(item, quantity);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} alt={item.title} className="img-gluid" width={400}/>
                </div>
                <div className="col-md-5">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p><b>${item.price}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}


export default ItemDetail;