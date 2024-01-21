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
const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w)
};

// quarter of
const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  }
  if (month >= 4 && month <= 6) {
    return 2;
  }
  if (month >= 7 && month <= 9) {
    return 3;
  }
  if (month >= 10 && month <= 12) {
    return 4;
  }
}
//Take an array and remove every second element. 

function removeEveryOther(arr) {
  const results = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0)
      results.push(arr[i])
  }
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

function solution(a, b) {
  if (a.length > b.length) {
    return b + a + b
  }
  else { return a + b + a }

}

//given age Make a function that receive age, and return what they drink.
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy"
  }
  else if (old < 18) {
    return "drink coke"
  }
  else if (old < 21) {
    return "drink beer"
  }
  else if (old >= 21) {
    return "drink whisky"
  }
};

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.


function sayHello(name, city, state) {
  let fullName = name.join(' ')


  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!"
  }
  else return "Hello, " + name + "!";
}

// better formatting best practice
function greet(name) {
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}
//Input: Array of elements["h","o","l","a"]
//Output: String with comma delimited elements of the array in th same order.
function printArray(arr) {
  let array = arr.join(",")
  return array
}
// didnt need (",") inside join method its implied that commas are added with join method 

function isBetterThanAverage(yourScore, peersScores) {

  const totalScores = peersScores.reduce((sum, score) => sum + score, 0);


  const average = (totalScores + yourScore) / (peersScores.length + 1);


  return yourScore > average;
}



// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!If the tail is right return true, else return false. The arguments will always be non empty strings, and normal letters.
function correctTail(body, tail) {

  var sub = body.substr(body.length - tail.length);


  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}


// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  if (num > 0) {
    return -num
  }
  else return num
}

// concise with ternary example 
function makeNegative(num) {
  return (num > 0) ? -num : num;
}