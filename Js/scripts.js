//Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }


  }
  return count;
}
// Get the Middle Character 7kyu

function getMiddle(str) {
  const middleIndex = Math.floor(str.length / 2);

  if (str.length % 2 === 1) {
    // For odd-length strings, return a single middle character
    return str[middleIndex];
  } else {
    // For even-length strings, return two middle characters
    return str[middleIndex - 1] + str[middleIndex];
  }
}

//refactor
function getMiddle(str) {
  let middle = Math.floor(str.length / 2);

  if (str.length % 2 === 1) {
    return str[middle];
  }
  else if (str.length % 2 === 0) {
    return str[middle - 1] + str[middle];
  }
}

//unscrabmled eggs

function unscrambleEggs(word) {
  return word.replace(/egg/g, "")

}

//FIND ERROR it was simple syntax prob
function main(verb, noun) {
  return verb + noun;
}

//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
function divisibleBy(numbers, divisor) {
  return numbers.filter(numbers => numbers % divisor === 0);

}
//uses filter() method on array to filter out numbers divisble by divisor with no remaninder 


// finds area if sides are equal or perimiter if not
const areaOrPerimeter = function(l , w) {
  return l == w ? l*w : 2*(l + w)
};

// quarter of
const quarterOf = (month) => {
  if (month <= 3){
    return 1;
  }
    if (month >= 4 && month <=6){
    return 2;
  }
    if (month >= 7 && month <=9){
    return 3;
  }
      if (month >= 10 && month <=12){
    return 4;
  }
}
//Take an array and remove every second element. 

function removeEveryOther(arr){
  const results = []
  for (let i= 0;i < arr.length; i++){
  if (i % 2 === 0)
  results.push(arr[i])}
  return results
  }

// build a staircase For example n = 3 result in:
//"I\n I\n  I"

  function drawStairs(n) {
    if (n === 1) {
      return 'I';
    }
  
    let staircase = "";
  
    for (let i = 0; i < n; i++) {
      let line = " ".repeat(i) + "I".repeat(n - i);
      staircase += line + '\n';
    }
  
    return staircase;
  }
  

 // Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

  function solution(a, b){
    if (a.length > b.length){
  return b + a  +b }
    else {return a+b+a}
  
  }
  

  function peopleWithAgeDrink(old) {
    if (old < 14){
    return "drink toddy"}
      else if (old < 18){
    return "drink coke"}
      else if(old < 21){
    return "drink beer"}
      else if (old >= 21){
    return "drink whisky"}
    };