//localStorage not deletes when page closes and sessionStorage deletes when page closes

function storage(){
    localStorage.setItem('bgcolor','yellow');
    localStorage.setItem('font','helvet');
    localStorage.setItem('image','cats');
    localStorage.setItem('image','dogs');
    //return localStorage.length;
    //localStorage.removeItem('bgcolo');
    //localStorage.clear();
   //console.log( localStorage.getItem('bgcolor'));
   //console.log(localStorage.key(0))
   return localStorage.length;
   
}

let len=storage();
console.log(len);


//cookies
//Cookies are data, stored in small text files, on your computer.
//When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
//Cookies were invented to solve the problem "how to remember information about the user":
//When a user visits a web page, his/her name can be stored in a cookie.
//Next time the user visits the page, the cookie "remembers" his/her name.
//Cookies are saved in name-value pairs


//assignment
function local() {
  if (localStorage.getItem("counter") === null) {
    localStorage.setItem("counter", "0");
  }
  var value = parseInt(localStorage.getItem("counter"));
  var newValue = value + 2;
  localStorage.setItem("counter", newValue);
  document.querySelector('#loc').innerHTML = newValue;

  if (sessionStorage.getItem("counter") === null) {
    sessionStorage.setItem("counter", "0");
  }
  var values = parseInt(sessionStorage.getItem("counter"));
  var newValue = values + 1;
  sessionStorage.setItem("counter", newValue);
  document.querySelector('#ses').innerHTML = newValue;
}

function clickReset() {
  localStorage.setItem("counter", "0");
  document.querySelector('#loc').innerHTML = '0';
  sessionStorage.setItem("counter", "0");
  document.querySelector('#ses').innerHTML = '0';
  //localStorage.clear();
}
