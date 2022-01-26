import { useForm } from "react-hook-form";
import axios from 'axios';
import Cookies from "js-cookie";

export default function AddItemForm({handleWish, addWish}) {
    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <div className="centeringFrom styleFrom">
            <form onSubmit={handleSubmit((data) => {
                    axios.post('http://localhost:8000/api/wish/add/', {
                        name: data.name,
                        link: data.link,
                        price: data.price
                      },
                      {
                          headers: {
                            "Authorization": Cookies.get('Authorization'),
                            'Content-Type': 'application/json'
                          }
                      })
                      .then(function () { handleWish(false); })
                      .catch(function (error) { console.log(error); });

                    addWish(data);
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