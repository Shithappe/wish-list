import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { fetchWishes } from "../store/wishSlice";
import { changeAddItemFrom } from '../store/switchSlice';
import { addWish } from '../services';

export default function AddItemForm() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const dispatch = useDispatch();

    return (
        <form className="centeringForm styleForm" onSubmit={handleSubmit((data) => {
                addWish(data);
                dispatch(fetchWishes());
                dispatch(changeAddItemFrom())
                })}>
            <h2>Add Wish</h2>
            <input {...register('name', {required: "This is required"})} type='text' placeholder="Name"/>
            {errors.name?.message && <p className="tipForWrongInput">{errors.name?.message}</p>}
            <input {...register('link', {required: "This is required"})} type='text' placeholder="Link"/>
            <input {...register('price', {required: "This is required"})} type='text' placeholder="Price"/>
            <br/>

            <div className="formButtons">
                <input type='submit' value='Create'/>
                <input onClick={() => dispatch(changeAddItemFrom())} type='button' value='Cancel'/>
            </div>
        </form>
    )
}