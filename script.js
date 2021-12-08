const Form = document.getElementById('form');

viewList();

function viewList(){
    let allEl = [];
    if (localStorage.getItem('allEl')) allEl = JSON.parse(localStorage.getItem('allEl'));
    console.log(allEl);


    for (i = 0; i < allEl.length; i++) {
        let div = document.createElement('div');
        div.className = "item";
        div.innerHTML = '<h3>' + allEl[i].name + '</h3>' + 
                        '<div>' + allEl[i].link + '<button>copy</button>' + '</div>' + '<br>' + allEl[i].price;
        
        document.body.append(div);
    }  
}

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