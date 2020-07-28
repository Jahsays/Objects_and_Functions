// Part 1
// Question 1
var myObject = {
  firstName: 'Chiaka',
  lastName: 'Williams',
  occupation: 'dev'
}

//  Question 2
myObject["firstName"]

myObject["lastName"]

myObject["occupation"]

myObject.firstName

myObject.lastName

myObject.occupation

// Question 3
myObject.hobby = 'sleeping'

delete myObject.occupation

// Question 4
// when using dot notation the property indentifier does not need to be a string, it is also used to evaluate an expression when the name of the key is known and it is not a variable or expression. With bracket notaion the property identifier must be a string, also it is used to evaluate some expression to get the name of the key. 

// Question 5
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for(var value in namesAndHobbies){
  console.log(namesAndHobbies[value] + ' => ' + value)
  }

// Question 6
namesAndHobbies.Chiaka = "movies"

// Question 7
if("Chiaka" in namesAndHobbies){
  console.log(Object.keys(namesAndHobbies) [4] + ':' + ' ' + namesAndHobbies.Chiaka)
  }
  
