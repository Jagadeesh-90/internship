//variables....let ,const,var
//console.log(number);
//let number=3;
//const number=4;
//var number=5;
let num1=1;//block acces
const num2=2;// block access
var num3=5;//global acces
console.log(num1);
console.log(num2);
console.log(num3);


 // control statements
 let name = "kittens";
 if (name === "puppies") {
   name += " woof";
 } else if (name === "kittens") {
   name += " meow";
 } else {
   name += "!";
 }
 console.log(name);


 //Array
const arr=[1,2,3,4];
arr[50]=50;
console.log(arr.length);
console.log(arr);
console.log(typeof(arr[0]));

//copying items//spread operator
items=[1,2,3];
const itemsCopy = [...items];
console.log(itemsCopy);
 

//object to array
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz',length:3 };
const arrs = Array.from(arrLike);
console.log(arrs);

//access of array elements
const array= [1, 2, 3, 4];
const [first, second] = array;
console.log(first,second);

//splice method used for instertion and deletion of elements in array at any position
array.splice(2,0,8);
console.log(array);

//reverse and sort methods

console.log(array.reverse());
 console.log(array.sort());
//spread operator
function concatenateAll(...args) {
    return args.join('');
  }
  console.log(concatenateAll([1,2,3,4,5]));



  //functions
  function foo(extra, condition) {
    if (condition) {
      console.log(extra);
      var extra = 2;
      console.log(extra);
    }
  }
  foo(1, true);



//funcction code for array
  function avg(args) {
    let sum = 0;
    for(const item of args )
    {
        sum+=item;
    }
    return sum / args.length;
  }
  array2=[2,3,4,5];
  console.log(avg(array2)); 

  //object functions  with default parameter
  function area({ width, height,depth=2 }) {
    return width * height * depth;
  }
  console.log(area({ width: 2, height: 3 }));


//decration/constructor/expression type functions;
var v = 5;
function myFunc() {
  const v = 9;

  function decl() {
    console.log(v);
  }
  const expr = function () {
    console.log(v);
  };
  const cons = new Function('console.log(v);');

  decl();
  expr();
  cons();
}
myFunc();


 //arrow function
 let array3 = [1, 2, 3, 4]
 console.log(array3.map((val) => val * 2)); 
 
 console.log(array3.filter((val) => val % 2 == 0) );// [2, 4]
 console.log(array3.reduce((acc, val) => acc + val, 0) );// 10
 
 let greet =() => console.log("hello");
 greet()
 
 let greets = (x,y) => console.log(x+y);
 greets(3,5);
 
 let age=19;
 let welcome=(age<18)?console.log("Baby"):console.log("Adult");

//Call , Applay, Bind mwthods
// this is used to reference of current object

//object declaration
 const myName ={
    firstname:'Palla',
    lastname:'Jagadeesh',
 }
  //function
  const printFullName=function(homeTown){
    console.log(this.firstname + " " +this.lastname+" from "+homeTown);
  }
  //call
  printFullName.call(myName , 'vizag');

  //another object
  const friendName = {
    firstname:'Vinay',
    lastname:'Kumar',
  }
  
  printFullName.call(friendName , 'Delhi');

  //apply is used to pass values as  list 
printFullName.apply(friendName,['Delhi'])

//bind method used to save copy of one function  in aother function
const printName =printFullName.bind(friendName,'Delhi');
printName();

//this refers to the object that is currently calling the function
//function inside an object...fuction as value
const person1={
  age:21,
  homeTown:function(){
    console.log("homeTown",this.age);
    console.log("homeTown",this);
    function workLocation(){
      console.log("workLocation",this.age);
      console.log("workLocation",this);
    }
    workLocation();//not giving object name so it calls from windows
  }
}
person1.homeTown();


//this in inline function....this doesnot effects
const person2={
  age:32,
  homeTown:function(){
    console.log("homeTown",this.age);
    console.log("homeTown",this);
    const workLocation=()=>{
      console.log("workLocation",this.age);
      console.log("workLocation",this);
    }
    workLocation();
  }
}
person2.homeTown();

//this 
class Jedi {
    jump() {
      this.jumping = true;
      return this;
    }
  
    setHeight(height) {
      this.height = height;
      return this;
    }
  } 
  const luke = new Jedi();

 
//diff b/w normal and arrow function
function fun(){
    return 'hello';
  }
r=fun();
console.log(r);

var car =(x,y) =>{return x+y};
console.log(car(2,3));

//autoBoundMethod for using arrow function in class
console.log(luke.jump() .setHeight(20));

class C {
  a = 1;
  autoBoundMethod= () => {
    console.log(this.a);
  }
}

const c = new C();
c.autoBoundMethod();


//objects
const obj = {
    name: "Carrot",
    for: "Max",
    details: {
      color: "orange",
      size: 12,
    },
  };
  obj.name="jagadeesh";
  obj.details.color="green";
console.log(obj.name); 
console.log(obj.details.color); 


//classes
class Person {
    constructor(name) {
      this.names = name;
    }
    sayHello() {
        //return "hello i'm" + this.names;
       return `Hello, I'm ${this.names}!`;
    }
  }
  const o = new Person("Jagadeesh");
  console.log(o.sayHello());

  //closures are combination of function and lexical environment
  //instace of outer function;
  function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2));
  console.log(add10(2));
  
  function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
function urFunction() {
    document.getElementById("change").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GWS_b1zDjvP7o31O-qXoxET319O14VJlQw&usqp=CAU";
}