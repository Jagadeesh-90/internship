//callback function... the function which is passed as argument 
function first(test){
    
    console.log("This is first function");
    test();
}
function second(){
    console.log("This is second function");
}
first(second);


//setTimeout is also a callback function
console.log('jagadeesh')
setTimeout(() => {
    let a=4;
    let b=5;
    add(a,b);
},1000);
console.log('Jyothi shanker');
console.log('Satish');
 let add =(x,y)=>console.log(x+y);


 // promise has 2 parameters one for resolve and reject
 // .then for resolve abd access promises 
 //.catch for reject
 //promise.then(f1),catch(f2);
 //promise.then(f1,f2);
 function step(value,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(value+10);
        }
        else{
            reject('something went wrong');
        }
    });
 }

 step(10,false)
        .then((result) => console.log(result))
        .catch((result)=> console.log(result));

//promise
function loadScript(src) {
   // return new Promise(function(resolve, reject) {
    return new Promise((resolve, reject)=>{
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () =>resolve(script);
      script.onerror = () =>reject(new Error(`Script load error for ${src}`));
  
      document.body.append(script);
    });
  }

  let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(
script => alert(`${script.src} is loaded!`),
  //error => alert(`Error: ${error.message}`)
);
promise.catch(
    //script => alert(`${script.src} is loaded!`),
      error => alert(`Error: ${error.message}`)
    ); 
promise.then(script => alert('Another handler...'));
  


//promise chaining
//new Promise(function(resolve, reject) {
new Promise( (resolve,reject)=>{
    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then ((result)=> { // (**)
  
    alert(result); // 1
    return result * 2;
  
  }).then((result)=> { // (***)
  
    alert(result); // 2
    return result * 2;
  
  }).then((result)=> {
  
    alert(result); // 4
    return result * 2;
  
  });


  //promiseAll returns all
  //promise.race returns starting one
  //promise.any if all are rejected it gives aggrigate msg no one is resolved
  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)), //resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),//resolve(3), 3000))
  ]).then(alert).catch(alert);


  //async/await
  //async is placed before any function 
  //await is used to wait some time and gives exect value

 function calc(num1,num2){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num1+num2),1000);
    });
 }
 const adds=async function() {
    var res1= await calc(5,5);
    var res2=await calc(res1,10);
    return await calc(res2,6);
    console.log(res2);
    //return res2;
 }
 adds()//.then(res => {console.log(res)});


 //Assignment
 function getData(uId) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("Fetched the data!");
    resolve('skc@gmail.com');
    }, 4000);
});
}
async function fetchData(){
    var email = await getData("skc");
    console.log('start');
    console.log("Email id of the user id is: " + email);
    console.log("end");
}
fetchData();