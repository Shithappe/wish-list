import { useForm } from "react-hook-form";
import axios from 'axios';
import Cookies from "js-cookie";

export default function EditItemForm(props) {
    const { register, handleSubmit, formState: {errors} } = useForm();


    console.log(props);

    return (
        <div className="centeringFrom styleFrom">
            <form onSubmit={handleSubmit((data) => {
                    console.log(data);
                    

                    // addWish(data);
                    props.handlEdit(false);
                    })}>
                <h2>Add Wish</h2>
                <input {...register('name', {required: "This is required"})} type='text' placeholder="Name"/>
                {errors.name?.message && <p className="tipInForm">{errors.name?.message}</p>}
                <input {...register('link', {required: "This is required"})} type='text' placeholder="Link"/>
                <input {...register('price', {required: "This is required"})} type='text' placeholder="Price"/>
                <br/>

                <div className="formButtons">
                    <input type='submit' value='Update'/>
                    <input onClick={() => props.handlEdit(false)} type='button' value='Cancel'/>
                </div>
                <button className="deleteButton" onClick={() =>
                   axios({
                    method: 'delete',
                    url: "http://localhost:8000/api/wish/",
                    data: {
                        id: props.data.id
                    },
                    headers: {
                        "Authorization": Cookies.get('Authorization'),
                        'Content-Type': 'application/json'
                    }
                    })
                    .then(function (response) {
                       console.log(response);
                       props.handlEdit(false);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    }>Delete this wish</button>
            </form>
        </div>
    )
}