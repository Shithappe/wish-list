// import { useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";


export async function getWish(){
    const id = Cookies.get('id');

    let data = {};
    // const [data, setData] = useState({});

    return axios({
      method: 'get',
      url: "http://localhost:8000/api/wish/",
      headers: {
        "Authorization": Cookies.get('Authorization'),
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
        let mywishtemp = [];
        let otherwishtemp = [];
        response.data.forEach(element => {
            if (element.user_id == id) mywishtemp.push(element); 
            else otherwishtemp.push(element);
        });

        data = {
            myMwishes: mywishtemp,
            otherWishes: otherwishtemp
        }

        return data;
    })
    .catch(function (error) {
        console.log(error);
    });
    
    
}