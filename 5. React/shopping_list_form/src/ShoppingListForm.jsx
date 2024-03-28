import React from 'react';
import { useForm } from 'react-hook-form';

export default function ShoppingListForm({onSubmit}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmitForm = (data) => {
        onSubmit(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                <label htmlFor="product">Enter a product:</label>
                <input id="product" {...register('product', { required: true })} type="text" placeholder="Product Name" />
                {errors.product && <p>This field is required</p>}
            </div>

            <div>
                <label htmlFor="qty">Enter quantity:</label>
                <input id="qty" {...register('quantity', { required: true, valueAsNumber: true })} type="number" placeholder="Qty" />
                {errors.quantity && <p>This field is required</p>}
            </div>
            
            <button type="submit">Add Item</button>
        </form>
    )
}