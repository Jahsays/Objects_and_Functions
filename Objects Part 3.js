
// Question 1
    function myName(){
      var myName = 'Chiaka Williams';
      console.log(myName);
    }

    myName()

// Question 2
var favouriteFoods = ['Pizza', 'ice cream']
function randomFood(){
  var randomIndex = Math.floor(Math.random()* favouriteFoods.length);
  console.log(favouriteFoods[randomIndex]);
}

randomFood()

// Question 3
var numbers = [1,2,3,4,5,6,7,8,9,10]
function displayOddNumbers(){
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
      console.log(numbers[i]);
    }
  }
}

displayOddNumbers()

// Question 4
var numbers = [1,2,3,4,5,6,7,8,9,10]
function displayEvenNumbers(){
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      console.log(numbers[i]);
    }
  }
}

displayEvenNumbers()

// Question 5
var numbers = [1,2,3,4,5,6,7,8,9,10]
function returnFirstOddNumber(){
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
      return(numbers[i]);
    }
  }
}

// returnFirstOddNumber()

//  Question 6
var numbers = [1,2,3,4,5,6,7,8,9,10]
function returnFirstEvenNumber(){
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      return(numbers[i]);
    }
  }
}

// returnFirstEvenNumber()

//  Question 7
 var numbers = [1,2,3,4,5,6,7,8,9,10]
 function returnFirstHalf(){
   return numbers.slice(0,numbers.length/2)
   
 }
 returnFirstHalf()

// Question 8
var numbers = [1,2,3,4,5,6,7,8,9,10]
 function returnSecondHalf(){
   return numbers.slice(5,numbers.length)
   
 }
 returnSecondHalf()

