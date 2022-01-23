import React, { useState, useEffect } from 'react';
import Wish from '../components/Wish.js'
import Notification from '../components/Notification.js'
import ShareList from '../components/ShareList.js';
import AddItemForm from '../components/AddItemForm.js'

import axios from 'axios';
import Cookies from "js-cookie";

export default function Home() {

    const [switchShareWish, setSwitchShareWish] = useState(false); //switch for showing the form addWish
    const [wish, setWish] = useState(false); //switch for showing the form addWish
    const [data, setData] = useState([]);

      useEffect(() => {
        axios({
          method: 'get',
          url: "http://localhost:8000/api/wish/",
          headers: {
            "Authorization": Cookies.get('Authorization'),
            'Content-Type': 'application/json'
          }
        })
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
          });
    }, [])


    function addWish(item){
        data.push(item);
    }

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
                            addWish={ (item) => { addWish(item) }} 
                        /> 
            }

            { switchShareWish && <ShareList /> }

            { data.map((data) =>  <Wish key={data.id} data={data}/>) }
        </div>
    )
}