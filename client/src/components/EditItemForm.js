import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { updateWish, deleteWish } from "../services";

import { useSelector, useDispatch } from 'react-redux';
import { changeEditItemForm } from '../store/switchSlice';

export default function EditItemForm({ data }) {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const [name, setName] = useState(data.name);
    const [link, setLink] = useState(data.link);
    const [price, setPrice] = useState(data.price);

    const dispatch = useDispatch();
    const edit = useSelector(state => state.switches.edit);


    return (
        <form className="centeringForm styleForm" onSubmit={handleSubmit((dataForm) => {

                updateWish(data.id, dataForm);
                dispatch(changeEditItemForm());
                // сюда обновление вишек из стора 
                
                })}>
            <h2>Update Wish</h2>
            <input {...register('name', {required: "This is required"})} value={name} onChange={(event) => {setName(event.target.value)}} type='text' placeholder="Name"/>
            {errors.name?.message && <p className="tipForWrongInput">{errors.name?.message}</p>}
            <input {...register('link', {required: "This is required"})} value={link} onChange={(event) => {setLink(event.target.value)}} type='text' placeholder="Link"/>
            <input {...register('price', {required: "This is required"})} value={price} onChange={(event) => {setPrice(event.target.value)}} type='text' placeholder="Price"/>
            <br/>

            <div className="formButtons">
                <input type='submit' value='Update'/>
                <input onClick={() => dispatch(changeEditItemForm())} type='button' value='Cancel'/>
            </div>
            <button className="deleteButton" onClick={() => {
                deleteWish(data.id);
                dispatch(changeEditItemForm());
                // сюда обновление вишек из стора 
            }}>Delete this wish</button>
        </form>
    )
}