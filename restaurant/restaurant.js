//menuItems
const menuList=new Map()
let item1={id:'menu1',name:'Biryani', course:'biryani',cost:250};
let item2={id:'menu2',name:'Veg Biryani', course:'biryani',cost:150};
let item3={id:'menu3',name:'Prawns Biryani', course:'biryani',cost:250};
let item4={id:'menu4',name:'Panner kaju Biryani', course:'biryani',cost:200};
let item5={id:'menu5',name:'Thums up', course:'drinks',cost:50};
let item6={id:'menu6',name:'Coca Cola', course:'drinks',cost:40};
let item7={id:'menu7',name:'Chicken-65', course:'starters',cost:150};
let item8={id:'menu8',name:'Dragon Chicken', course:'starters',cost:200};
let item9={id:'menu9',name:'Pizza', course:'fast food',cost:100};
let item10={id:'menu10',name:'Burger', course:'fast food',cost:100};

menuList.set('menu1',item1);
menuList.set('menu2',item2);
menuList.set('menu3',item3);
menuList.set('menu4',item4);
menuList.set('menu5',item5);
menuList.set('menu6',item6);
menuList.set('menu7',item7);
menuList.set('menu8',item8);
menuList.set('menu9',item9);
menuList.set('menu10',item10);


function createItem( id,name, cost ) {
    let item = document.createElement("div");
    item.classList.add("item0");
    item.setAttribute('id',id);
    item.setAttribute('draggable','true');
    item.addEventListener('dragstart',drags)
    let itemName = document.createElement("h2");
    itemName.classList.add("itemName1");
    itemName.innerHTML = name;
    let price = document.createElement("h3");
    price.classList.add("itemCost");
    price.innerHTML = `Rs.${cost}`;
    item.appendChild(itemName);
    item.appendChild(price);
    return item;
    function drags(e){
       e.dataTransfer.clearData();
        e.dataTransfer.setData("text",id);
    }
   
}  
function creatAllItmes(menuListObj) {
    const foodMain = document.getElementById("menuItems");
    for (let menu of menuListObj) {
         let newItem = createItem(menu[1].id,menu[1].name,menu[1].cost);
        foodMain.appendChild(newItem);
    }
}

creatAllItmes(menuList);




//tables
const tableList=new Map()
let tab1={id:'tab1',tabName:'Table1',amount:0,total:0,itemPrices:new Map(),itemCount:new Map()};
let tab2={id:'tab2',tabName:'Table2',amount:0,total:0,itemPrices:new Map(),itemCount:new Map()};
let tab3={id:'tab3',tabName:'Table3',amount:0,total:0,itemPrices:new Map(),itemCount:new Map()};
let tab4={id:'tab4',tabName:'Table4',amount:0,total:0,itemPrices:new Map(),itemCount:new Map()};
tableList.set('tab1',tab1);
tableList.set('tab2',tab2);
tableList.set('tab3',tab3);
tableList.set('tab4',tab4);
function createTables(id, tabname, amount,total,itemPrices,itemCount){
    let table= document.createElement("div");
    
    table.classList.add("tab0");
    table.setAttribute('id',id);
    table.addEventListener('click',openPopUp);
    table.addEventListener('drop',drops);
    table.addEventListener('dragover',dragsover);
    let title = document.createElement("h2");
    title.classList.add("tabName1");
    title.innerHTML = tabname;
    let billAmount = document.createElement("span");
    billAmount.classList.add("total");
    billAmount.innerHTML = `Rs.${amount} `;
    let totalItems =document.createElement('span');
    totalItems.classList.add("noOfItems");
    totalItems.innerHTML =`Total Items: ${total}`;
    table.appendChild(title);
    table.appendChild(billAmount);
    table.appendChild(totalItems);
   

    function drops(e){
       e.preventDefault();
        const itemId=e.dataTransfer.getData('text');
        for(let menu of menuList.values()){
            if(menu.id==itemId){
            tableList.get(id).total=tableList.get(id).total +  1;
             tableList.get(id).amount=tableList.get(id).amount +  menu.cost;
              itemPrices.set(menu.name,menu.cost);
              //console.log(itemPrices);
              if(itemCount.get(menu.name)==undefined){
                itemCount.set(menu.name,1);
              }
              else{itemCount.set(menu.name,itemCount.get(menu.name)+1)
              }
             // console.log(itemCount)
            //   table[1].total=table[1].total + 
            amount+=itemPrices.get(menu.name);
            billAmount.innerHTML = `Rs.${amount} `;
              let cout=0;
            for(let [key,value] of itemCount){
              cout+=value;  
            }
            total=cout;
            //   total=itemCount.get(menu.name);
              totalItems.innerHTML =`Total Items: ${total}`;
            //   for(let cout of itemCount)
           
       
            }
        }
    }
    function dragsover(e){
        e.preventDefault();
    }



//popUp function
    function openPopUp(e){

     
     let popup= document.getElementById("popup");
     popup.innerHTML=" "
     popup.classList.add("open-popup");
    //  console.log(table);
     table.classList.add("change-color");
     console.log(table);
     let headdiv=document.createElement('div');
     headdiv.classList.add('headdiv');
     let orderTable= document.createElement('h2');
     orderTable.setAttribute('id','order-head');
     let span=document.createElement('span');
     orderTable.textContent=tabname;
     span.textContent="-Order Details";
    
     orderTable.appendChild(span);
     headdiv.appendChild(orderTable);
     //close
     let del=document.createElement('button');
     del.classList.add('del-popup')
     del.addEventListener('click',closePopUp);
    // del.textContent='Ok';
    headdiv.appendChild(del);
     popup.appendChild(headdiv);

     function closePopUp(){
        // console.log("hello");
        table.classList.remove("change-color");
        popup.classList.remove("open-popup");
     }

     let heads=document.createElement('div');
     heads.classList.add('heads');
     let sNo= document.createElement('h3');
     let item= document.createElement('h3');
     let price= document.createElement('h3');
    //  price.classList.add('price');
     sNo.textContent="S.No";
     item.textContent="Item";
     price.textContent="Price";
     price.setAttribute("heading-price",id);

     heads.appendChild(sNo);
     heads.appendChild(item);
     heads.appendChild(price);
     popup.appendChild(heads);

     let snos=1;
    for(let [key,value] of itemPrices){
      
      let orders=document.createElement('div');
      orders.classList.add("orders");
      orders.setAttribute('id','ordersdiv')
// console.log(orders);
      let itemNumber=document.createElement('h3');
      itemNumber.setAttribute("table-number",id);
      itemNumber.textContent=snos;
      let itemName=document.createElement('h3');
      itemName.setAttribute("item-name",id);
      itemName.textContent=key;
      let itemPrice=document.createElement('h3');
     itemPrice.setAttribute("item-price",id);
     itemPrice.setAttribute('id','item-price');
      itemPrice.textContent=value;

      orders.appendChild(itemNumber);
      orders.appendChild(itemName);
      orders.appendChild(itemPrice);

        snos+=1;
      let servings=document.createElement('div');
      servings.classList.add("noof-serving");

      let noOfServings=document.createElement('p');
      noOfServings.textContent="Number of servings";
      let inputCount= document.createElement('input');
      inputCount.setAttribute('id','count');
      inputCount.setAttribute('type','number');
      inputCount.setAttribute('step','1');
      inputCount.setAttribute('value',itemCount.get(key));
      inputCount.setAttribute('name',key);
      inputCount.addEventListener('input',onchange);
      servings.appendChild(noOfServings);
      servings.appendChild(inputCount);
      orders.appendChild(servings);

      let delItem=document.createElement('button');
      delItem.classList.add("delete-cost")
      delItem.addEventListener('click',deleteServings);
      orders.appendChild(delItem);
      popup.appendChild(orders);
     

      
      let delList=new Map()
      function deleteServings(){
           tableList.get(id).amount-= itemCount.get(key)*itemPrices.get(key)
           amount-= itemCount.get(key)*itemPrices.get(key)
            tableList.get(id).total-=itemCount.get(key);
            itemPrices.delete(key);
            itemCount.delete(key);
            orders.style.display='none';
            billAmount.textContent=`Rs.${tableList.get(id).amount}`;
            totalItems.textContent=`Total Items: ${tableList.get(id).total}`;
            totalBill.textContent=`Rs.${tableList.get(id).amount}`;
            
           



        }



    function onchange(e){
        let noOfServings=e.target.value;
       tableList.get(id).amount += itemPrices.get(key)* (noOfServings-itemCount.get(key));
        console.log(tableList.get(id).amount);
        tableList.get(id).total+=(noOfServings-itemCount.get(key));
        console.log( tableList.get(id).total)
        itemCount.set(key,noOfServings);
        totalBill.textContent=`Rs.${tableList.get(id).amount}`;
        amount=tableList.get(id).amount;
        
      }
     
      
      
    }


    let bills=document.createElement('div');
    bills.classList.add('bills');
    let totalBill=document.createElement('h2');
    totalBill.classList.add('totalBill');
    totalBill.textContent=`Rs.${amount}`;
    let generateBill=document.createElement('button');
    generateBill.classList.add('generateBill');
    generateBill.textContent="Generate Bill";
    generateBill.addEventListener('click',alertBill);
    bills.appendChild(totalBill);
    bills.appendChild(generateBill);
    popup.appendChild(bills);

    
    //generate bill
    function alertBill(){
      
       alert(`Total Bill Amount Rs.${amount}`)
       popup.classList.remove("open-popup");
       tableList.get(id).amount=0;
      //  console.log(tableList.get(id).amount)
       amount=0;
       totalBill.textContent=`Rs.${amount}`;
      //  console.log(totalBill.textContent)
       billAmount.textContent=`Rs.${amount}`;
       totalItems.textContent=`Total Items:${0}`;
      // 
      itemPrices.clear();
      table.classList.remove("change-color");
      
      // console.log(list.firstChild);
      // while(list.firstChild)
      // {
      //   list.removeChild(list.lastChild);
      // }
      
       
       
    }
     }
       
    return table;
} 


//remove popup
let remove=document.querySelector('.popup');
function closePopUp(){
    remove.classList.add('close-popup');
}
function creatAllTables(tabListObjs) {
    const tableMain = document.getElementById("tableList");
    for (let table of tabListObjs) {
         let newTable = createTables(table[1].id,table[1].tabName,table[1].amount,table[1].total,table[1].itemPrices,table[1].itemCount);
        tableMain.appendChild(newTable);
        
    }
}


creatAllTables(tableList);



//search in tableList
function searchTable(e){
    for(let table of tableList){
        let id=document.getElementById(table[1].id);
        id.removeAttribute('style');
    }
    for(let table of tableList)
    {  
        let tabNames=table[1].tabName;
        let regex= new RegExp(e.target.value,'i');
        if(!regex.test(tabNames)){
            let id=document.getElementById(table[1].id);
            id.style.display='none';
        }
    }
}
document.querySelector('.tabSearch').addEventListener('input',searchTable);




//search in menuList
function searchItem(e){
    for(let menu of menuList ){
      let id=document.getElementById(menu[1].id)
      id.removeAttribute("style")
    }
    for(let menu of menuList ){
      let menuItem=menu[1].name;
      let menuCourse=menu[1].course;
      let regex= new RegExp(e.target.value,"i")
      if((!regex.test(menuItem)) &&(!regex.test(menuCourse))){
        let id=document.getElementById(menu[1].id)
        id.style.display="none"
      }
    }
  
  }
  document.querySelector('.menuSearch').addEventListener("input",searchItem);