import { useForm } from "react-hook-form";
import { updateWish, deleteWish } from "../services/services";

export default function EditItemForm({ data, handlEdit, update}) {
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <form className="centeringForm styleForm" onSubmit={handleSubmit((dataFrom) => {

                updateWish(data.id, dataFrom);
                handlEdit(false);
                update();
                
                })}>
            <h2>Update Wish</h2>
            <input {...register('name', {required: "This is required"})} type='text' placeholder="Name"/>
            {errors.name?.message && <p className="tipForWrongInput">{errors.name?.message}</p>}
            <input {...register('link', {required: "This is required"})} type='text' placeholder="Link"/>
            <input {...register('price', {required: "This is required"})} type='text' placeholder="Price"/>
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