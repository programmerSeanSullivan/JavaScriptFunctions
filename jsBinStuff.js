class Ball{
  constructor(sizecm, color, radiuscm)
  {
    this._size = sizecm;
    this._color = color;
    this._radius = radiuscm;
    
  }
  get ballcolor(){

    return this._color;
  }
  myballcolor(){
    return this._color;
  }
}

let beachball = new Ball(3.5, "Blue",50);
console.log(beachball);

console.log(beachball.ballcolor());
console.log(beachball);


//factorial Function

var factorial = (number) => {
  if(number < 0)
    number = Math.abs(number);
  if(number === 0)
    return 1;
  var factorialValue = 1;
  for(var i = 1; i <= number; i++)
    {
      factorialValue *= i;
    }
  return factorialValue;
}
//factorial Reccursion
var factorialReccursion = (initalValue) => {
   if(initalValue < 0)
    initalValue = Math.abs(initalValue);
  switch (initalValue){
    case 0:
      return 1;
    case 1:
      return 1;
    default:
      return initalValue * factorialReccursion(initalValue -1);
  }
  
}
console.log(factorial(4));
console.log(factorialReccursion(4));

//Javascript Version of Ceasar Cypher
var ogMessage = "Hello World";
var shiftValue = 3;
var key = (shift) => {return shift %26;}
var wrapAround = (shift, value,index) => {
  var holder =value.charCodeAt(index);
    if(holder === 32)
    {
        return String.fromCharCode(32);
    } 
    holder += shift;
     if(holder > 90 && holder <97)
    {
      holder += 7;
    }
    else if( holder > 122)
    {
        holder = (holder +65)%90;
    }
    else if( holder <65)
    {
          holder = (holder +97)%122;
    }
  return String.fromCharCode(holder);
}
console.log("Original Message That will Be Encoded: "+ogMessage);
var isOnlyChars = (word) =>{
  //var regex =  ;
  if(/[a-zA-Z ]*$/.test(word))
    {
      return true;
    }else
      {
        console.log("Your message was incompatible, please only use chars.");
        return false;
      }
}
 var letterChecker = (encodedLetterPassed) =>
 {
      
 }
var ceasarEncypher = (messageToEncode, codeKey) =>{
  if(isOnlyChars(messageToEncode))
    {
      for(var i = 0; i <= messageToEncode.length; i++)
        {
         messageToEncode = messageToEncode.replace(messageToEncode[i], wrapAround(codeKey,messageToEncode,i));
         
        }
    }
   return messageToEncode;
}
 
  
console.log("Encoded message by key of " +key(shiftValue)+" and message is: "+ ceasarEncypher(ogMessage, key(shiftValue) ) );



/*
`My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list - which means he is the heaviest.

I'm the one who makes the list so I told him: "Don't worry! I'll modify the order of the list". I decided to attribute a "weight" to the numbers. The weight of a number from now on will be the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by the new "weights" of these numbers (ascending)?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

*/

var newValue = (userWeight) => {
   var stringedUserWeight = userWeight.toString();
   var arryOfSplitString = stringedUserWeight.split( new RegExp("/\d/"));
   var userModedWeight ;
   for(var w in arryOfSplitString)
   {
     userModedWeight = userModedWeight + parseInt(arryOfSplitString[w]);
   }
  return userModedWeight;
}

function userWeightStuff(userWeight)
{
  if(userWeight< 0)
    {
      Math.abs(userWeight);
    }
  this.weightedNumber = newValue(userWeight);
  this.originalWeight = userWeight;
}
var listMaker = (arryOfUserWeights, howManyUsers) => {
  var newListOfUserWeights =[];
  for(var i = 0; i<howManyUsers; i++)
    {
      newListOfUserWeights.push(new userWeightStuff(arryOfUserWeights[i] ) );
    }
  
  var temp=0;
  for(var x = 0; x< howManyUsers; x++)
   {
      for(var t = 0; i< howManyUsers; t++)
      {
        if(newListOfUserWeights[x].weightedNumber <= newListOfUserWeights[t].weightedNumber)
          {
            temp = newListOfUserWeights[x];
            newListOfUserWeights[x] = newListOfUserWeights[t];
            newListOfUserWeights[t]  = temp;
          }

      }
   }
  return newListOfUserWeights;
  
}
var arrayOfWeights = [56,65,74,100,99,68,86,180,90];
var list =  listMaker(arrayOfWeights, arrayOfWeights.length);
for(var k = 0; k <  list.length; k++)
  {
    console.log(list[k].originalWeight);
  }


/*
	Creates a function that will take an array of 2 numbers & return the sum of those two numbers and all the numbers betweeen them
*/

function sumAll(numList){
var y = 0;
var x = (numList[0] > numList[1])? numList[1]:numList[0];
var spot = numList.indexOf(x);
numList.splice(spot,1);
for(var i=x; i <= numList[0]; i++){
	y+=t;
}
return y;

}


/*
This was an assement that I had done for Daurghtey Businesss Solution only had 1:30 mins to complete, last one is the start of attempt on the bonus questions
*/

//----------------------------------------------
// Name: Sean Patrick Sullivan
//----------------------------------------------

//----------------------------------------------
// Exercise: Property Path Evaluation
//---------------------------------------------

function propertyValueAt(obj, arrayRep){
  var boolHolder;

  //checks to see if the parameters are corrrect
    if(typeof obj == 'object' && Array.isArray(arrayRep))
      {
        // if array given has more than one entry loop to check if it is contained in object
        if(arrayRep.length >1){
          // goes through every object property
          for(var i = 0; i < obj.length; i ++){
            //itterates through all of the array that holds the property representations
         for(var j = 0; j < arrayRep.length; j++)
              {
                //see if the property is in object
               boolHolder =  obj.hasOwnProperty(arrayRep[j]);
                // if the property is an object call the function again giving the parameter of the object, and a shortened array
                if(typeof obj.arrayRep[j] == 'object')
                  {
                    propertyValueAt(obj[arrayRep[j-1]], arrayRep[j]);
                   
                  }
              }
          }
          //if the list of properties is only of size one just check if obj has property represented by first index
        }else{
          boolHolder = obj.hasOwnProperty(arrayRep[0]);
        }
        //if the length is one for the array of properties && the property is held by the object return the property
        if(arrayRep.length === 1 && boolHolder === true)
          {
          return obj[arrayRep];
          }
        
        
      }else
        {
          //for all other cases return undefined
          return undefined;
        }
}


//----------------------------------------------
// Name: Sean Patrick Sullivan
//----------------------------------------------

//----------------------------------------------
// Exercise: Sum Nested Arrays
//---------------------------------------------

function sumNestedArrays(nestedArry)
{
  //checks the parameter to see if it is actually an array passed
  if(!Array.isArray(nestedArry))
    {return 0;}
  //Imediteally flatten the array into one array
  var flattenedArry =[].concat.apply([], nestedArry);
  //If the array has more than one level of arrays nested in it check to see if each index is an array
  for(var j = 0; j < flattenedArry.length; j++)
    {
      //if the index is an array flatten the array again into the flattenedArray variable
      if(Array.isArray(flattenedArry[j]))
        {
          flattenedArry =[].concat.apply([], flattenedArry);
        }
    }
  var sum = 0;
  //itterate through the array to sum up all the values
  for(var i =0; i < flattenedArry.length; i++)
    {
    
      sum += flattenedArry[i];
    }
  return sum;

}
//----------------------------------------------
// Name: Sean Patrick Sullivan
//----------------------------------------------

//----------------------------------------------
// Exercise: Word Count
//---------------------------------------------
function wordCount(sentence){
  if(typeof sentence === 'string'){
  //trim away white space and store new string in temp variable
  var tempSentence = sentence.trim();
  //if the length of temp variable is zero then there were only whitespaces
  if(tempSentence.length === 0)
    {return 0;}else{
      //if the length was greater than zero there should be words then so split by the space character so each word is in an index in arraay
      //return the length of the array
      //This may give incorrect answers if there are multiple whitespaces between words
  var allWords = sentence.split(' ');
  return allWords.length;
    }
  }else
    {
      return 0;
    }
}

//----------------------------------------------
// Name: Sean Patrick Sullivan
//----------------------------------------------

//----------------------------------------------
// Exercise: Anagram Tester
//---------------------------------------------
function areTheseAnagrams(strOne, strTwo)
{
  //checks to make sure arguments are strings
  if(typeof strOne !=='string' && strTwo !=='string')
    {
      return false;
    }
  //split all the chars into an array
  var arryStringOne = strOne.split('');
  //boolean checker
  var isAnagram = true;
  //loop through the split array
  for(var i = 0; i <arryStringOne.length; i++)
    {
      //if the second string contains that char set bool to true else false
      isAnagram = strTwo.includes(arryStringOne[i]);
      //if its false no need to check further just return false
      if(isAnagram ===false)
        {
          return isAnagram;
        }
    }

  return isAnagram;
}

//----------------------------------------------
// Name: Sean Patrick Sullivan
//----------------------------------------------

//----------------------------------------------
// Exercise: Analyze prices
//---------------------------------------------
function analyzePrices(arryOfPrices){
  
  //suggestions object for index to buy
  var suggestion ={
     buyIndex : null,
    sellIndex :null
  };
  //if array is empty return suggestions
  if(arryOfPrices.length === 0 || (!Array.isArray(arryOfPrices)))
    return suggestion;
  //find the max value
  var max = Math.max(arryOfPrices);
  //find the min value
  var min = Math.min(arryOfPrices);
  //store index of the max
  var indexOfMax = arryOfPrices.indexOf(max);
  //store index of the min
  var indexOfMin = arryOfPrices.indexOf(min);
  //are the indexes equal to each other if so then max and min are same return nulls
  if(indexOfMax === indexOfMin)
    {
      return suggestion;
    }
  //if the index of max is greater than index of min set the suggestions of buy and sell and return suggestions
  if( indexOfMax> indexOfMin)
    {
      suggestion.buyIndex = indexOfMax;
      suggestion.sellIndex = indexOfMin;
      return suggestion;
    }else{
      //if the max comes before the min then splice out the index of max and call function again
      arryOfPrices.splice(indexOfMax, 1);
      analyzePrices(arryOfPrices);
    }
}

//----------------------------------------------
// Name: Sean Patrick Sullivan
//----------------------------------------------

//----------------------------------------------
// Exercise: Fizz Buzz
//---------------------------------------------
function fizzBuzz(n)
{
   //declare empty string
   var string ='';
  //see if the parameter is a number
  if(typeof n ==='number')
  {

    //is the value less than or equal to zero
    if(n <=0)
      return string;
    else
    {
      //print the number
      console.log(n);
      //if it is divisble by 3 concat fizz
      if(n%3===0)
      {
        string += 'fizz';
      }
      //if it is divisible by 5 concat buzz
      if(n%5===0)
      {
         string += 'buzz';
      }
    }
      //return the string
      return string;
  }
  else{
    //return empty string if not a number
    return string;
  }
}
//----------------------------------------------
// Name: Sean Patrick Sullivan
//----------------------------------------------

//----------------------------------------------
// Exercise: Object Oriented Programming -- Car
//---------------------------------------------
//creates a constructor function for a car
//a car has a speed
// the speed can be retrieved
// the speed can be set if greater than 0
function Car(){
  //speed property
  this.speed = 0;
  //retrieves the speed
  this.getSpeed =()=>
  {
    return this.speed;
  }
  //sets the  speed
  this.setSpeed =(_speed)=>
  {
    if(_speed >= 0)
      {
        this.speed = _speed;
      }
  }
  //stops the car
  this.stop =()=>
  {
    this.speed= 0;
  }
}

//----------------------------------------------
// Name: Sean Patrick Sullivan
//----------------------------------------------

//----------------------------------------------
// Exercise: Calculate Bowling Score
//---------------------------------------------
calculateBowlingScore(scoreString)
{
    var strikeSymbol = 'X';
    var spareSymbol = '/';
    var gutterSymbol = '-';
    var minPinsHit = 1;
    var maxPinsHit = 9;
    var score = 0;
  if(typeof scoreString === 'string')
    {
      var arryOfScores = scoreString.split('');
      //if there are more scores than allowed frames return -1
      if(arryOfScores.length > 12)
        {
          return -1;
        }
      for(var i = 0; i < arryOfScores.length; i++)
      {
        switch(arryOfScores[i])
          {
            case strikeSymbol:
              if(i <=10){
              score = 10;
                for(var j = 0; j < 2; j++){
                if(arryOfScores[j].charCodeAt(0) === 88)
                  {
                    score =+ arryOfScores[j].charCodeAt(0) - 78;
                  }else if(arryOfScores[j].charCodeAt(0) ===47)
                    {
                      score =+arryOfScores[j].charCodeAt(0) -37;
                    }else if(arryOfScores[j].charCodeAt(0) === 45)
                      {
                        score += 0;
                      }
                }
              }else if(i ===11)
                {
                   score = 10;
                    for(var k = 0; j < 1; j++){
                if(arryOfScores[k].charCodeAt(0) === 88)
                  {
                    score =+ arryOfScores[k].charCodeAt(0) - 78;
                  }else if(arryOfScores[k].charCodeAt(0) ===47)
                    {
                      score =+arryOfScores[k].charCodeAt(0) -37;
                    }else if(arryOfScores[k].charCodeAt(0) === 45)
                      {
                        score += 0;
                      }
                }
                }
              else{
                score += 10;
              }
              break;
            case spareSymbol:
              break;
            case gutterSymbol:
              break;
            default:
              break;
          }
      }
    }
  
}


