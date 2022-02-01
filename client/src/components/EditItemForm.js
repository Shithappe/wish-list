import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { updateWish, deleteWish } from "../services/services";

export default function EditItemForm({ data, handlEdit, update}) {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const [name, setName] = useState(data.name);
    const [link, setLink] = useState(data.link);
    const [price, setPrice] = useState(data.price);

    return (
        <form className="centeringForm styleForm" onSubmit={handleSubmit((dataForm) => {

                updateWish(data.id, dataForm);
                handlEdit(false);
                update();  // don't update link...
                // document.location.reload();
                
                })}>
            <h2>Update Wish</h2>
            <input {...register('name', {required: "This is required"})} value={name} onChange={(event) => {setName(event.target.value)}} type='text' placeholder="Name"/>
            {errors.name?.message && <p className="tipForWrongInput">{errors.name?.message}</p>}
            <input {...register('link', {required: "This is required"})} value={link} onChange={(event) => {setLink(event.target.value)}} type='text' placeholder="Link"/>
            <input {...register('price', {required: "This is required"})} value={price} onChange={(event) => {setPrice(event.target.value)}} type='text' placeholder="Price"/>
            <br/>

            <div className="formButtons">
                <input type='submit' value='Update'/>
                <input onClick={() => handlEdit(false)} type='button' value='Cancel'/>
            </div>
            <button className="deleteButton" onClick={() => {
                deleteWish(data.id);
                handlEdit(false);
                update();
            }}>Delete this wish</button>
        </form>
    )
}