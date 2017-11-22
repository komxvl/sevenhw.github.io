let counter = 1;
let counterItem = 1;
const addInput =() => {
    let divName = document.getElementById('input-fields');
    let newdiv = document.createElement('div');
    counterItem++;
    newdiv.innerHTML = "<label>"+"Email:"+ counterItem +"</label><div class='input-group form-group'>"+"<input class='form-control' name='user-email' placeholder='test' />"+
        "<span onclick='delInput(this)' class='input-group-addon  minus basic-addon" +counter+" '>"+
        "<i class='glyphicon glyphicon-minus-sign'></i>"+
        "</span>"+
        "</div>";
    divName.appendChild(newdiv);
    counter++;
};

let btnAddInput = document.getElementById('basic-addon2');
btnAddInput.addEventListener('click',addInput);

const getInputsValues = () => {
    outputBlock.value= " ";
    let arrayInputsList = document.getElementsByName("user-email");

    /* Шаг 3 */
    let optionList = document.getElementsByName("input-num");
    let checkedOption;
    for(let i = 0 ; i < optionList.length; i++) {
        if (optionList[i].checked)
            checkedOption = optionList[i].value;
    }
    console.log(checkedOption);
    let inputsValue = '';
    for(let j = 0; j < arrayInputsList.length; j++) {
        if(arrayInputsList[j].value == ''){
            arrayInputsList[j].className += ' error';
            alert("Не все input заполнены");
            outputBlock.value = ' ';
        }
        else{
            arrayInputsList[j].classList.remove("error");
            console.log("arrayInputsList[j].value",arrayInputsList[j].value);
            if (checkedOption == 'odd') {
                if(j % 2 == 0)
                    inputsValue += arrayInputsList[j].value + " --&&-- ";
            }
            else if (checkedOption == 'even') {
                if(j % 2 != 0)
                    inputsValue +=  arrayInputsList[j].value + " --&&-- ";
            }
            else {
                inputsValue += arrayInputsList[j].value + " --&&-- ";
            }
            console.log("inputsValue",inputsValue);
            outputBlock.value =inputsValue;
        }
    }
};

let btnGetInputsValue = document.getElementById('send');
btnGetInputsValue.addEventListener('click',getInputsValues);

const delInput =(elem) =>{
    console.log(elem);
    counterItem--;
    elem.parentNode.parentNode.style.display = 'none';
    console.log(counterItem);
};

let outputBlock = document.getElementById('output');
outputBlock.value= " ";


let addItemsBtn = document.getElementById('add-items');
let listItems = document.getElementById('my-ul');
addItemsBtn.addEventListener('click',function () {
    let itemName = document.getElementById('name-item');
    if(itemName.value == ''){
        alert("Введите данные");
    }
    else{
        let li = document.createElement("li");
        console.log(listItems);
        listItems.appendChild(li);
        li.innerHTML = itemName.value;
        itemName.value = ''
    }

});

let selectedLi;
listItems.onclick =  (e) => {
    let target = e.target;
    if (target.tagName != 'LI') return;
    highlight(target);
};


const highlight = (node) => {
    console.log("this",node);
    selectedLi = node;
    selectedLi.classList.toggle("red")
};

