import React, { useState, useEffect } from 'react';
import { getNotification, acceptShare } from '../services/services';

export default function Notification() {

    const [users, setUsers] = useState([]);

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
                <button onClick={ () => acceptShare(user.id) }>Accept</button>
                <button>Cancel</button>
            </div>
        </div>
            )}
        </div>
        
    )
}