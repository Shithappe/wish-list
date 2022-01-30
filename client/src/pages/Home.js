import React, { useState } from 'react';
import WishesBlock from '../components/WishesBlock.js';
import Notification from '../components/Notification.js'
import ShareList from '../components/ShareList.js';
import AddItemForm from '../components/AddItemForm.js'

import Cookies from "js-cookie";


export default function Home() {
    if (!Cookies.get('id')) window.location.assign('http://localhost:3000/auth');

    const [switchShareWish, setSwitchShareWish] = useState(false); //switch for showing the form addWish
    const [wish, setWish] = useState(false); //switch for showing the form addWish
    const [refreshWishes, setRefreshWishes] = useState(false); // signal for refresh wishes to WishesBlock



    function Nav(){
        return(
            <div className='nav'>
                <div className='title'>
                    <h1>Wish List<span>.react</span> </h1>
                    <button onClick={() => setWish(true)}>Add wish</button>
                </div>
                <div>
                    <button onClick={() => {setSwitchShareWish(!switchShareWish)}}>Share wish</button>
                    <button className='exitButton' onClick={() => {
                        Cookies.remove('id');
                        Cookies.remove('Authorization');
                        window.location.assign('http://localhost:3000/auth');
                        }}>Exit</button>
                </div>
            </div>
        )
    }
    
    return (
        <div className='main'>
            <Nav/>
            
            <Notification/>


            { wish && <AddItemForm 
                            handleWish={(value) => { setWish(value) }} 
                            setRefreshWishes={ (value) => { setRefreshWishes(value) }} 
                        /> 
            }

            { switchShareWish && <ShareList /> } 

            <WishesBlock 
                refresh={refreshWishes}
                setRefreshWishes={ () => { setRefreshWishes() }}
            />

        </div>
    )
}