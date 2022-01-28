import { useForm } from "react-hook-form";
import { addWish } from '../services/services';

export default function AddItemForm({handleWish, refreshWishes}) {
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <form className="centeringForm styleFrom" onSubmit={handleSubmit((data) => {
                addWish(data);
                handleWish(false);
                refreshWishes();
                })}>
            <h2>Add Wish</h2>
            <input {...register('name', {required: "This is required"})} type='text' placeholder="Name"/>
            {errors.name?.message && <p className="tipForWrongInput">{errors.name?.message}</p>}
            <input {...register('link', {required: "This is required"})} type='text' placeholder="Link"/>
            <input {...register('price', {required: "This is required"})} type='text' placeholder="Price"/>
            <br/>

            <div className="formButtons">
                <input type='submit' value='Create'/>
                <input onClick={() => handleWish(false)} type='button' value='Cancel'/>
            </div>
        </form>
    )
}