import React, { useState, useEffect } from 'react';
import Wish from '../components/Wish.js'
import OtherWish from '../components/OtherWish.js'
import Notification from '../components/Notification.js'
import ShareList from '../components/ShareList.js';
import AddItemForm from '../components/AddItemForm.js'

import axios from 'axios';
import Cookies from "js-cookie";

export default function Home() {
    if (!Cookies.get('id')) window.location.assign('http://localhost:3000/auth');

    const [switchShareWish, setSwitchShareWish] = useState(false); //switch for showing the form addWish
    const [wish, setWish] = useState(false); //switch for showing the form addWish
    const [data, setData] = useState([]);
    const [mywish, setMywish] = useState([]);
    const [otherwish, setOtherwish] = useState([]);
    const [id, setId] = useState(Cookies.get('id'));

    function getWish(){
        // useEffect(() => {
            axios({
              method: 'get',
              url: "http://localhost:8000/api/wish/",
              headers: {
                "Authorization": Cookies.get('Authorization'),
                'Content-Type': 'application/json'
              }
            })
            .then(function (response) {
                setData(response.data);
                let mywishtemp = [];
                let otherwishtemp = [];
                response.data.forEach(element => {
                    if (element.user_id != id) otherwishtemp.push(element);
                    else mywishtemp.push(element);
                });
                setMywish(mywishtemp)
                setOtherwish(otherwishtemp)
            })
            .catch(function (error) {
                console.log(error);
              });
        // }, [])
    }

    function addWish(item){
        // mywish.push(item);
        getWish();
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

    useEffect(() => {
        getWish();
    }, [])
    
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

            { mywish.map((mywish) =>  <Wish key={mywish.id} data={mywish}/>) }
            { otherwish[0] && <hr/>}
            { otherwish && otherwish.map((otherwish) => <OtherWish key={otherwish.id} data={otherwish}/>) }
        </div>
    )
}