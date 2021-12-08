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
                        '<div>' + allEl[i].link + '</div>' + '<br>' + allEl[i].price;
        // div.addEventListener('click', setdata, false);
        div.setAttribute('id', i);
        let copyBtn = document.createElement('button');
        copyBtn.onclick = getParentElemId;
        copyBtn.innerText = 'copy';
        div.appendChild(copyBtn);
        document.body.append(div);
    }  
}

function getParentElemId() {
    // console.log(this);
    let parentEl = this.parentNode;
    console.log(parentEl.id);
    document.execCommand("copy");//no..

}
function setdata() {
    console.log(this.id);
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
    
    let div = document.createElement('div');
        div.className = "item";
        div.innerHTML = '<h3>' + newEl.name + '</h3>' + 
                        '<div>' + newEl.link + '<button>copy</button>' + '</div>' + '<br>' + newEl.price;
        document.body.append(div);

    cancelForm();
}