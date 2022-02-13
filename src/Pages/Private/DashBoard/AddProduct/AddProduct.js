import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        
        axios.post('https://frozen-meadow-47661.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    console.log(data);
                    reset()
                }
            })
    };


    return (
        <div className="add-product">
            <h1>Add A Car</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder='Model No' />
                <textarea {...register("description")} placeholder='Description' />
                <input {...register("hints")} placeholder='Summery' />
                <input {...register("img")} placeholder='Image' />
                <input type="number" {...register("price")} placeholder='Price' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;