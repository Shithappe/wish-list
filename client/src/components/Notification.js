import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";

export default function Notification() {

    const [username, setUsername] = useState([]);

    useEffect(() => {                   
        axios({
            method: 'get',
            url: "http://localhost:8000/api/wish/notification",
            headers: {
                "Authorization": Cookies.get('Authorization'),
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            setUsername(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);



    return (
        <div className='notificationBlock'>
            {username && username.map((user) => 
            
        <div className="notification" key={user.id}>
            <p><b>{user.username}</b>
                            <br/>
                            <span>{user.email}</span>
                            <br/>
                             gave you access to his list</p>
            <div className="formButtons">
            <button onClick={ () => 
                            axios({
                                method: 'patch',
                                url: "http://localhost:8000/api/wish/share",
                                data: {
                                    sender_id: user.id,
                                    accepted: 1
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
                            }>Accept
                        </button>
                <button>Cancel</button>
            </div>
        </div>
            )}
        </div>
        
    )
}