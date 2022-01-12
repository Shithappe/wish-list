import React, { useState } from 'react';
import Wish from '../components/Wish.js'
import Notification from '../components/Notification.js'
import AddItemForm from '../components/AddItemForm.js'
// import ShareList from './ShareList.js'

import data from '../customData.json'

export default function Home() {

    const [wish, setWish] = useState(false); //switch for showing the form addWish

    console.log(data);

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

            { wish && <AddItemForm handleWish={(value) => { setWish(value) }}/> }
            { data.map((data) =>  <Wish key={data.id} data={data}/>) }
        </div>
    )
}