const List = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
function addItem(){
  const itemValue = input.value;
  input.value='';
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const delButton = document.createElement('button');
  listItem.appendChild(span);
  listItem.appendChild(delButton);
  span.textContent=itemValue;
  delButton.textContent='Delete';
  List.appendChild(listItem);
  delButton.addEventListener('click',()=>{
  List.removeChild(listItem);
    })
  }

  