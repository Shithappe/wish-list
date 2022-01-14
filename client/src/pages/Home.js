import React, { useState, useEffect } from 'react';
import Wish from '../components/Wish.js'
// import Notification from '../components/Notification.js'
// import ShareList from './ShareList.js'
import AddItemForm from '../components/AddItemForm.js'

import axios from 'axios';
// import data from '../customData.json'

export default function Home() {

    const [wish, setWish] = useState(false); //switch for showing the form addWish
    const [data, setData] = useState([]);

      useEffect(() => {
        axios({
          method: 'get',
          url: "http://localhost:8000"
        })
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
          });
    }, [])

  console.log(data);

    function addWish(item){
        data.push(item);
        console.log(data);
    }

    function Nav(){
        return(
            <div className='nav'>
                <div className='title'>
                    <h1>Wish List<span>.react</span> </h1>
                    <button onClick={() => setWish(true)}>Add wish</button>
                </div>
                <button>Share wish</button>
            </div>
        )
    }

    
    
    
    return (
        <div className='main'>
            <Nav/>

            { wish && <AddItemForm 
                            handleWish={(value) => { setWish(value) }} 
                            addWish={ (item) => { addWish(item) }} 
                        /> 
            }

            { data.map((data) =>  <Wish key={data.id} data={data}/>) }
        </div>
    )
}