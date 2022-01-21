import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";

let usernames = [];

export default function ShareList() {

    const [users, setUsers] = useState([]);


    useEffect(() => {                   
        // async function fetchMyAPI() {   // some shit
        // let response = await
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
        // }
        // fetchMyAPI()
    }, []);


    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    
    const handleChange = event => {
       setSearchTerm(event.target.value);
    };


    var usernames = users.filter(function (el) {
        return el.username.toLowerCase().includes(searchTerm.toLowerCase()) || el.email.toLowerCase().includes(searchTerm.toLowerCase()); 
    });

    // useEffect(() => {
        // const results = usernames.filter(person =>
        //   person.toLowerCase().includes(searchTerm.toLowerCase())
        // );
        // const results = users.filter(function (el) {
        //      return el.username.toLowerCase().includes(searchTerm.toLowerCase()) || el.email.toLowerCase().includes(searchTerm.toLowerCase()); 
        //   });
        // setSearchResults(results);
    // }, [searchTerm]);

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
                                .then(function (response) {
                                    console.log(response);
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