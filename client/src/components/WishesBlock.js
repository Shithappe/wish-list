import React, { useState, useEffect } from 'react';
import Wish from './Wish.js';
import OtherWish from './OtherWish.js'

import { getWish } from '../services/services';

export default function WishesBlock({refresh, setRefreshWishes}) {

    const [wishes, setWishes] = useState({});
    const [otherUsersWishes, setOtherUsersWishes] = useState([]);
    
    async function fetchData() {
        const wishes = await getWish();
        setWishes(wishes);
        
        const userIds = [...new Set(wishes.otherWishes.map(item => item.user_id))];
        
        let wishesByUserId = [];
        userIds.forEach(userId => {
            const userWishes = wishes.otherWishes.filter(wish => wish.user_id === userId);
            wishesByUserId.push(userWishes);
        });

        setOtherUsersWishes(wishesByUserId);

        setRefreshWishes(true);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (refresh) fetchData();

    function formatName(name) {
        if (name.length < 35) return name;
        else return name.slice(0, 33) + '...';
    }

    function formatLink(link) {
        if (link.indexOf('//') === -1) return link;
        link = link.substr(link.indexOf('//') + 2);
        if (link.indexOf('www.') > -1) link = link.substr(link.indexOf('www.') + 4);
        link = link.substr(0, link.indexOf('/'));
        return link;
    }

    function formatData(data) {
        data.name = formatName(data.name);
        data.link = formatLink(data.link);
        return data;
    }



    return (
        <div>
            <h2>My wishes</h2>
            { wishes.myWishes && wishes.myWishes.map((item) =>  <Wish key={item.id} data={formatData(item)} update={() => fetchData()}/>) }
            
            { otherUsersWishes && otherUsersWishes.map((item) => 
               <div key={item.id}>
                   <div className='usernameTitle'>{item[0].username}</div>
                   { item && item.map((otherwish) => <OtherWish key={otherwish.id} data={formatData(otherwish)}/>) }
               </div> 
            ) }
            
        </div>
    )
}