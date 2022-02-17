import React, { useState } from 'react';
import WishesBlock from '../components/WishesBlock.js';
import Notification from '../components/Notification.js'
import ShareList from '../components/ShareList.js';
import AddItemForm from '../components/AddItemForm.js'
import { useSelector, useDispatch } from 'react-redux';
import { changeAddItemFrom, changeShareList } from '../store/switchSlice';
import Cookies from "js-cookie";


export default function Home() {
    if (!Cookies.get('id')) window.location.assign(process.env.REACT_APP_CLIENT_HOST + '/auth');

    const dispatch = useDispatch();

    const switches = {
        add: useSelector(state => state.switches.add),
        edit: useSelector(state => state.switches.EditItemForm),
        share: useSelector(state => state.switches.ShareList)
    }


    function Nav(){
        return(
            <div className='nav'>
                <div className='title'>
                    <h1>Wish List<span>.react</span> </h1>
                    <button onClick={() => dispatch(changeAddItemFrom())}>Add wish</button>
                </div>
                <div>
                    <button onClick={() => {dispatch(changeShareList())}}>Share wish</button>
                    <button className='exitButton' onClick={() => {
                        Cookies.remove('id');
                        Cookies.remove('Authorization');
                        window.location.assign(process.env.REACT_APP_CLIENT_HOST + '/auth');
                    }}>Exit</button>
                </div>
            </div>
        )
    }
    
    return (
        <div className='main'>
            <Nav/>
            
            <Notification/> {/* сюда нужно положить обновление всех вишек */}

            { switches.add && <AddItemForm /> } {/* сюда нужно положить добавление вишки в store */}

            { switches.share && <ShareList /> } 

            <WishesBlock/>

        </div>
    )
}