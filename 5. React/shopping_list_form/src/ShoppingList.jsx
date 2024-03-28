import { useState } from 'react';
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuid } from 'uuid';

export default function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), product: "Bananas", quantity: 8 },
        { id: uuid(), product: "Apples", quantity: 5 },
        { id: uuid(), product: "Eggs", quantity: 12 },
    ]);
    const addItem = (item) =>{
        setItems([...items, { id: uuid(), ...item }]);
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.product} - {item.quantity}</li>
                ))}
            </ul>
            <ShoppingListForm onSubmit={addItem} />
        </div>    
    )
}