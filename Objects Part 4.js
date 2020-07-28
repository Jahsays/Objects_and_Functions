// a.
function add(Number1, Number2){
  return Number1 + Number2
}
add()

function subtract(Number1, Number2){
  return Number1 - Number2
}
subtract()

function multiply(Number1, Number2){
  return Number1 * Number2
}
multiply()

function divide(Number1, Number2){
  return Number1 / Number2
}
divide()

// b.
name = 'Chiaka'
function sayHello(string){
  if(string === name)
return 'Hello Boss'
else{
  return 'Hello ' + string
}
}
sayHello('Chiaka')

// c.

function average(array){
  var total =0;
for(var i = 0; i < array.length; i++){
  total += array[i];
}
return total/array.length;
}
average([4,5,6,7,7,])

// d.
function createStudent(firstName, lastName){
  return{ firstName : firstName,
         lastName : lastName
  }
}
createStudent("chiaka", "Williams")

// e.
var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie];


// f.
function findStudentByFirstName(name){
    var lowerCasedName = name.toLowerCase();
    for(var i = 0; i < students.length; i++){
        if(students[i].firstName.toLowerCase() === lowerCasedName){
            return true;
        }
    }
    return false;
}
findStudentByFirstName('Elie')

// g
function extractEveryThird(array){
    var newArray = [];
    for(var i = 2; i < array.length; i += 3){
        newArray.push(array[i]);
    }
    return newArray;
}
extractEveryThird([2,3,4,5,6])

// h.
function countEvensAndOdds(arry){
    var count = {
        oddCount: 0,
        evenCount: 0
    }
    for(var i = 0; i < arry.length; i++){
        if(arry[i] % 2 === 0){
            count.evenCount++;
        } else {
            count.oddCount++;
        }
    }
    return count;
}
countEvensAndOdds([1,2,3,4,5,5,6,7])

// i.
// 'Hello from global' will be printed since the variable is declared globally.