import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Cookies from "js-cookie";


export default function ShareList() {

    const { register, handleSubmit } = useForm();

    const [users, setUsers] = useState([]);


    useEffect(() => {                   // some shit
        async function fetchMyAPI() {
        let response = await axios({
            method: 'get',
            url: "http://localhost:8000/api/wish/users",
            headers: {
                "Authorization": Cookies.get('Authorization'),
                'Content-Type': 'application/json'
            }
            })
            .then(function (response) {
                let awd = response.data;
                console.log(awd);
                setUsers(awd);
                
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    
        fetchMyAPI()
    }, [])

    console.log("users:");console.log(users);
      
      var newArray1 = users.filter(function (el) {
          return el.id >= 2; 
        });
        console.log(newArray1);


    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };


    useEffect(() => {
        // const results = usernames.filter(person =>
        //   person.toLowerCase().includes(searchTerm.toLowerCase())
        // );
        console.log(users);
        const results = users.filter(function (el) {
            return el.id >= 2; // Changed this so a home would match
          });
        console.log("res:");        console.log(results);
        setSearchResults(results);
    }, [searchTerm]);

    // не получаю список юзеров...
    // получить список всех юзеров, отфильтровать по части слова, и отрендерить по onChange
    // никакая форма не нужна

console.log(searchResults);



    return(
        <div className="styleFrom shareList">

            <form onSubmit={
                handleSubmit((data) => {
                console.log(data);
            })}>
                <input {...register("Search", {required: "true"})} type='text' placeholder="Search user" />

                { users.map((user) =>  
                    <div className='userList' key={user.id}>
                        <div>
                            <b>{user.username}</b>
                            <br/>
                            <span>{user.email}</span>
                        </div>
                        <button onClick={ () => 
                            axios({
                                method: 'post',
                                url: "http://localhost:8000/api/wish/share",
                                data: {
                                    recipient_id: user.id
                                },
                                headers: {
                                    "Authorization": Cookies.get('Authorization'),
                                    'Content-Type': 'application/json'
                                }
                                })
                                .then(function (response) {
                                    console.log(response);
                                })
                                .catch(function (error) {console.log(error)})
                            }>Share
                        </button>
                    </div>
                )}


                {/* example */}
                    <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
                    <ul>
                        {searchResults.map(item => (
                        <li>{item}</li>
                        ))}
                    </ul>
                {/* end */}

            </form>
            <br/>
        </div>
    )
}