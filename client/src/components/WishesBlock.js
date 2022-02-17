import React, { useState, useEffect } from 'react';
import Wish from './Wish.js';
import OtherWish from './OtherWish.js'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/counterSlice';


export default function WishesBlock({refresh, setRefreshWishes}) {



    const [wishes, setWishes] = useState({});

    const counter = useSelector(state => state.counter);
    const WishList = useSelector(state => state.wishList.wishes);
    const dispatch = useDispatch();
    
    async function fetchData() {
        // const wishes = await getWish();
        // setWishes(wishes);

        setRefreshWishes(true);
    }

    useEffect(() => {
        fetchData();
        WishList.then((res) => {
            setWishes(res);
        })
    }, [])

    if (refresh) fetchData();

    function formatName(name) {
        if (name.length < 35) return name;
        else return name.slice(0, 33) + '...';
    }

    function formatLink(link) {
        let formatedLink = link;

        if (formatedLink.indexOf('//') === -1) {
            return formatedLink;
        }

        formatedLink = formatedLink.substr(formatedLink.indexOf('//') + 2);

        if (formatedLink.indexOf('www.') > -1) {
            formatedLink = formatedLink.substr(formatedLink.indexOf('www.') + 4);
        }

        formatedLink = formatedLink.substr(0, formatedLink.indexOf('/'));
        
        return formatedLink;
    }

    function formatData(data) {
        data.name = formatName(data.name);
        data.formatedLink = formatLink(data.link);
        return data;
    }



    return (
        <div>
            <h2 onClick={() => {dispatch(increment(2))}}>My wishes : {counter.value}</h2>
            { wishes.myWishes && wishes.myWishes.map((item) =>  <Wish key={item.id} data={formatData(item)} update={() => fetchData()}/>) }
            
            { wishes.otherWishes && wishes.otherWishes.map((item) => 
               <div key={item.id}>
                   <div className='usernameTitle'>{item[0].username}</div>
                   { item && item.map((otherwish) => <OtherWish key={otherwish.id} data={formatData(otherwish)}/>) }
               </div> 
            ) }
            
        </div>
    )
}