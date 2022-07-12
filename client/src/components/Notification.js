import React, { useState, useEffect } from 'react';
import { getNotification, acceptShare, cancelShare } from '../services/services';

import Cookies from "js-cookie";

export default function Notification({setRefreshWishes}) {

    const [users, setUsers] = useState([]);
    const user_id = Cookies.get('id');

    async function fetchNotification() {
        const notification = await getNotification();
        setUsers(notification);
    }
    
    useEffect(() => {
        fetchNotification();
    }, [])


    return (
        <div className='notificationBlock'>
            {users && users.map((user) => 
            
        <div className="notification" key={user.id}>
            <p><b>{user.username}</b>
                            <br/>
                            <span>{user.email}</span>
                            <br/>
                             gave you access to his list</p>
            <div className="formButtons">
                <button onClick={ () => {
                    acceptShare(user_id, user.id);
                    setRefreshWishes(true);
                    fetchNotification();
                }}>Accept</button>

                <button onClick={ () => {
                    cancelShare(user.id)
                    fetchNotification();
                }}>Cancel</button>
            </div>
        </div>
            )}
        </div>
        
    )
}