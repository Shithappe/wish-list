import React, { useState } from 'react';
import Wish from '../components/Wish.js'
// import Notification from '../components/Notification.js'
import AddItemForm from '../components/AddItemForm.js'
// import ShareList from './ShareList.js'

import axios from 'axios';
// import data from '../customData.json'

export default function Home() {

    const [wish, setWish] = useState(false); //switch for showing the form addWish

let data;

    axios.get('http://localhost:8000')
  .then(function (response) {
    console.log(response);
    data = response.data;
  })
  .catch((error) => {
    console.log(error);
  })

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
            {/* <Notification name='awd'/> */}
            {/* <ShareList /> */}

            { wish && <AddItemForm 
                            // fucn={
                            //     handleWish: (value) => { setWish(value) },
                            //     addWish: (item) => { addWish(item) }
                            // }

                            handleWish={(value) => { setWish(value) }} 
                            addWish={ (item) => { addWish(item) }} 
                        /> 
            }

            {/* { data.map((data) =>  <Wish key={data.id} data={data}/>) } */}
        </div>
    )
}