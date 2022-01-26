import React, { useState, useEffect } from 'react';
import { getUserList, shareWish } from '../services/services';


export default function ShareList() {

    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        const users = await getUserList();
        setUsers(users);
        usernames = users;
    }
    
    useEffect(() => {
        fetchUsers();
    }, [])


    const [searchTerm, setSearchTerm] = useState("");
    
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
                            shareWish(user.id)
                            
                            }>Share
                        </button>
                    </div>
                )}
            </form>
        </div>
    )
}