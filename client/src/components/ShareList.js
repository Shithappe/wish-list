import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";

let usernames = [];

export default function ShareList() {

    const [users, setUsers] = useState([]);


    useEffect(() => {                   
        axios({
            method: 'get',
            url: "http://localhost:8000/api/wish/users",
            headers: {
                "Authorization": Cookies.get('Authorization'),
                'Content-Type': 'application/json'
            }
            })
            .then(function (response) {
                setUsers(response.data);
                usernames = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    
    const handleChange = event => {
       setSearchTerm(event.target.value);
    };


    let usernames = users.filter(function (el) {
        return el.username.toLowerCase().includes(searchTerm.toLowerCase()) || el.email.toLowerCase().includes(searchTerm.toLowerCase()); 
    });

    return(
        <div className="styleFrom shareList">

            <form>
                <input type='text' placeholder="Search user"  value={searchTerm} onChange={handleChange} />

                { usernames.map((user) =>  
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
                                .then(function () {
                                     // close block 
                                })
                                .catch(function (error) {console.log(error)})
                            }>Share
                        </button>
                    </div>
                )}
            </form>
        </div>
    )
}