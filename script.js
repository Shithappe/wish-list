const Form = document.getElementById('form');

function AddElement(){

    Form.classList.remove("formHidde");
    Form.classList.add("formShow");
}

function cancelForm(){
    Form.classList.remove("formShow");
    Form.classList.add("formHidde");
}

function saveEl(){
    let name = document.getElementById('tab-1').value;
    console.log(name);
}