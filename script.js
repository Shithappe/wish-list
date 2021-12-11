const Form = document.getElementById('form');
// Form.addEventListener(SubmitEvent, saveEl)

viewList();

function viewList(){
    let allEl = (localStorage.getItem('allEl')) ? JSON.parse(localStorage.getItem('allEl')) : [];

    for (i = 0; i < allEl.length; i++) {
        viewEl(allEl[i]);
    }  
}

function getParentElemId() { //переписать, добавить атрибут со ссылкой
    let parentEl = this.parentNode;
    // console.log(parentEl.id);
    allEl = JSON.parse(localStorage.getItem('allEl'));

    navigator.clipboard.writeText(allEl[parentEl.id].link);
}

function setDone(){
    let parentEl = this.parentNode;
    console.log(parentEl.id);
    allEl = JSON.parse(localStorage.getItem('allEl'));
    allEl[parentEl.id].done = !allEl[parentEl.id].done;
    localStorage.setItem('allEl', JSON.stringify(allEl));
    parentEl.classList.toggle('done');
}

function AddElement(){
    Form.classList.remove("formHidde");
    Form.classList.add("formShow");    
}

function cancelForm(){
    Form.classList.remove("formShow");
    Form.classList.add("formHidde");

    document.getElementById('name').value = "";
    document.getElementById('link').value = "";
    document.getElementById('price').value = "";
}

function saveEl(){
    // event.preventDefault();

    let newEl = {
        name: document.getElementById('name').value,
        link: document.getElementById('link').value,
        price: document.getElementById('price').value,
        done: false
    }

    let allEl = (localStorage.getItem('allEl')) ? JSON.parse(localStorage.getItem('allEl')) : [];

    allEl.push(newEl);

    localStorage.setItem('allEl', JSON.stringify(allEl));

    viewEl(newEl);

    cancelForm();
}

function viewEl(el){
    let div = document.createElement('div');
        div.className = "item";
        div.setAttribute('id', i);

        if (el.done){
            div.classList.add("done");
        }

        // h3 name
        let name = document.createElement('span');
        name.innerHTML = el.name;
        div.appendChild(name);

        //btn done
        let doneBtn = document.createElement('button');
        doneBtn.onclick = setDone;
        doneBtn.setAttribute('class', 'doneBth');
        div.appendChild(doneBtn);

        let br = document.createElement('br');
        div.appendChild(br);
        
        //link
        let link = document.createElement('input');
        link.value = el.link;
        link.setAttribute('disabled', 'disabled');
        link.setAttribute('id', 'copyLink');
        div.appendChild(link);
        
        //copt btn
        let copyBtn = document.createElement('button');
        copyBtn.onclick = getParentElemId;
        copyBtn.innerText = 'copy';
        div.appendChild(copyBtn);
        
        let price = document.createElement('p');
        price.innerText = el.price;
        div.appendChild(price);
        
        document.body.append(div);
}