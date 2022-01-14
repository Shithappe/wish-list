import { useForm } from "react-hook-form";

export default function AddItemForm(handleWish) {
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <div className="addItemForm">
            <form onSubmit={handleSubmit((data) => {
                    handleWish.addWish(data);
                    handleWish.handleWish(false);
                    })}>
                <h2>Add Wish</h2>
                <input {...register('name', {required: "This is required"})} type='text' placeholder="Name"/>
                {errors.name?.message && <p className="tipInForm">{errors.name?.message}</p>}
                <input {...register('link', {required: "This is required"})} type='text' placeholder="Link"/>
                <input {...register('price', {required: "This is required"})} type='text' placeholder="Price"/>
                <br/>

                <div className="formButtons">
                    <input type='submit' value='Create'/>
                    <input onClick={() => handleWish.handleWish(false)} type='button' value='Cancel'/>
                </div>
            </form>
        </div>
    )
}