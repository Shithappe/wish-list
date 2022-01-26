import React, { useState, useEffect } from 'react';
import Wish from '../components/Wish.js'
import OtherWish from '../components/OtherWish.js'
import Notification from '../components/Notification.js'
import ShareList from '../components/ShareList.js';
import AddItemForm from '../components/AddItemForm.js'

import { getWish } from '../services/services';
import Cookies from "js-cookie";


export default function Home() {
    if (!Cookies.get('id')) window.location.assign('http://localhost:3000/auth');

    const [switchShareWish, setSwitchShareWish] = useState(false); //switch for showing the form addWish
    const [wish, setWish] = useState(false); //switch for showing the form addWish
    const [data, setData] = useState({});

    async function fetchData() {
        const wishes = await getWish();
        setData(wishes);
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    function Nav(){
        return(
            <div className='nav'>
                <div className='title'>
                    <h1>Wish List<span>.react</span> </h1>
                    <button onClick={() => setWish(true)}>Add wish</button>
                </div>
                <button onClick={() => {setSwitchShareWish(!switchShareWish)}}>Share wish</button>
            </div>
        )
    }
    
    return (
        <div className='main'>
            <Nav/>
            
            <Notification/>


            { wish && <AddItemForm 
                            handleWish={(value) => { setWish(value) }} 
                            addWish={ () => { fetchData() }} 
                        /> 
            }

            { switchShareWish && <ShareList /> } 

            { data.myMwishes && data.myMwishes.map((item) =>  <Wish key={item.id} data={item} update={() => fetchData()}/>) }
            { data.otherWishes && <hr/>}
            { data.otherWishes && data.otherWishes.map((otherwish) => <OtherWish key={otherwish.id} data={otherwish}/>) }
        </div>
    )
}