import axios from 'axios';
import Cookies from "js-cookie";


export async function getWish(){
    const id = Cookies.get('id');
    let data = {};
    
    return axios({
        method: 'get',
        url: `${process.env.REACT_APP_SERVER_HOST}/wish/`,
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
        
        if (otherwishtemp.length) data = { myWishes: mywishtemp, otherWishes: otherwishtemp }
        else data = { myWishes: mywishtemp }

        return data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function addWish(data) {
    return axios.post(`${process.env.REACT_APP_SERVER_HOST}/wish/add/`, 
        {
            name: data.name,
            link: data.link,
            price: data.price
        },
        {
            headers: {
            "Authorization": Cookies.get('Authorization'),
            'Content-Type': 'application/json'
            }
        })
        .catch(function (error) { console.log(error); });
}

export function updateWish(id, data) {
    return axios({
        method: 'patch',
        url: `${process.env.REACT_APP_SERVER_HOST}/wish/`,
        data: {
            id: id,
            name: data.name,
            link: data.link,
            price: data.price
        },
        headers: {
            "Authorization": Cookies.get('Authorization'),
            'Content-Type': 'application/json'
        }
    })
        .catch(function (error) {
            console.log(error);
        })
}

export function deleteWish(id) {
    return axios({
        method: 'delete',
        url: `${process.env.REACT_APP_SERVER_HOST}/wish/`,
        data: {
            id: id
        },
        headers: {
            "Authorization": Cookies.get('Authorization'),
            'Content-Type': 'application/json'
        }
        })
        .catch(function (error) {
            console.log(error);
        })
}

export function getNotification() {
    return axios({
        method: 'get',
        url: `${process.env.REACT_APP_SERVER_HOST}/wish/notification`,
        headers: {
            "Authorization": Cookies.get('Authorization'),
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function acceptShare(id) {
    return axios({
        method: 'patch',
        url: `${process.env.REACT_APP_SERVER_HOST}/wish/share`,
        data: {
            sender_id: id,
            accepted: 1
        },
        headers: {
            "Authorization": Cookies.get('Authorization'),
            'Content-Type': 'application/json'
        }
        })
        .then(function (response) {
            console.log(response); // сюда прокинуть закрытие блока
        })
        .catch(function (error) {console.log(error)})
}

export function getUserList() {
    return axios({
        method: 'get',
        url: `${process.env.REACT_APP_SERVER_HOST}/wish/users`,
        headers: {
            "Authorization": Cookies.get('Authorization'),
            'Content-Type': 'application/json'
        }
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function shareWish(id) {
    return axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER_HOST}/wish/share`,
        data: {
            recipient_id: id
        },
        headers: {
            "Authorization": Cookies.get('Authorization'),
            'Content-Type': 'application/json'
        }
        })
        .then(function () {
             // close block 
        })
        .catch(function (error) {console.log(error)})
}

export function registration(data) {
    return axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER_HOST}/user/register/`, 
        data: {
        username: data.username,
        password: data.password,
        email: data.email
      },
      headers: {
        "Authorization": Cookies.get('Authorization'),
        'Content-Type': 'application/json'
        }
    })
    .then(function (response) { 
        Cookies.set("Authorization", response.data.token);
        Cookies.set("id", response.data.id); 
        window.location.assign(`${process.env.REACT_APP_CLIENT_HOST}/home`); 
     })
    .catch(function (error) { console.log(error.response.data); });
}

export function login (data) {
    return axios.post(`${process.env.REACT_APP_SERVER_HOST}/user/login/`, {
        email: data.email,
        password: data.password
      })
      .then(function (response) { 
          Cookies.set("Authorization", response.data.token);
          Cookies.set("id", response.data.id); 
          window.location.assign(`${process.env.REACT_APP_CLENT_HOST}/home`); 
        })
      .catch(function (error) { 
          return error.response.data;
        });
}

export function cancelShare (id) {
    return axios({
        method: 'delete',
        url: `${process.env.REACT_APP_SERVER_HOST}/wish/notification`,
        data: {
            id: id
        },
        headers: {
            "Authorization": Cookies.get('Authorization'),
            'Content-Type': 'application/json'
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}