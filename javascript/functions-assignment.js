// function is passed as a paramater.
function fullName(start,end){
    const name = start() + " " + end;
    return name;
}
function start(){
  return 'jagadeesh';
}
 
let endname='palla';
let fName=fullName(start,endname);
console.log(fName);



//arrow function
const getInitials = (firstName, lastName) => firstName[0] + lastName[0];//firstName.charAt(0) + lastName.charAt(0);
console.log(getInitials("Roger", "Waters"));

