const Form = document.getElementById('form');

function AddElement(){
    Form.classList.remove("formHidde");
    Form.classList.add("formShow");
}

function cancelForm(){
    Form.classList.remove("formShow");
    Form.classList.add("formHidde");

    console.log(localStorage.getItem('allEl'));
}

function saveEl(){

    let newEl = {
        name: document.getElementById('name').value,
        link: document.getElementById('link').value,
        price: document.getElementById('price').value,
        done: false
    }

    let allEl = [];
    if (localStorage.getItem('allEl')) allEl = JSON.parse(localStorage.getItem('allEl'));

    allEl.push(newEl);


    localStorage.setItem('allEl', JSON.stringify(allEl));
    // console.log(localStorage.getItem('allEl'));
    cancelForm();
}