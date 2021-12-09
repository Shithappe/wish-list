const Form = document.getElementById('form');

viewList();

function viewList(){
    let allEl = [];
    if (localStorage.getItem('allEl')) allEl = JSON.parse(localStorage.getItem('allEl'));

    for (i = 0; i < allEl.length; i++) {
        let div = document.createElement('div');
        div.className = "item";
        div.setAttribute('id', i);

        if (allEl[i].done){
            div.classList.add("done");
        }

        // h3 name
        let name = document.createElement('span');
        name.innerHTML = allEl[i].name;
        div.appendChild(name);

        //btn done
        // if (!allEl[i].done){
            let doneBtn = document.createElement('button');
            doneBtn.onclick = setDone;
            // doneBtn.innerText = 'Done';
            doneBtn.setAttribute('class', 'doneBth');
            div.appendChild(doneBtn);
        // }

        let br = document.createElement('br');
        div.appendChild(br);
        
        //link
        let link = document.createElement('input');
        link.value = allEl[i].link;
        link.setAttribute('disabled', 'disabled');
        link.setAttribute('id', 'copyLink');
        div.appendChild(link);
        
        //copt btn
        let copyBtn = document.createElement('button');
        copyBtn.onclick = getParentElemId;
        copyBtn.innerText = 'copy';
        div.appendChild(copyBtn);
        
        let price = document.createElement('p');
        price.innerText = allEl[i].price;
        div.appendChild(price);
        
        document.body.append(div);
    }  
}

function getParentElemId() {
    let parentEl = this.parentNode;
    console.log(parentEl.id);
    allEl = JSON.parse(localStorage.getItem('allEl'));

    navigator.clipboard.writeText(allEl[parentEl.id].link);
}

function setDone(){
    let parentEl = this.parentNode;
    console.log(parentEl.id);
    allEl = JSON.parse(localStorage.getItem('allEl'));
    allEl[parentEl.id].done = !allEl[parentEl.id].done;
    localStorage.setItem('allEl', JSON.stringify(allEl));
    if (allEl[parentEl.id].done) parentEl.classList.add("done");
    else parentEl.classList.remove("done");
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