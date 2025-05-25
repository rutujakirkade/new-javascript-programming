
var greet = "Good Morning";
console.log(`======= Find the length of the string =========`);
var greetLength = greet.length;

console.log(`${greet} - String length is : ${greetLength}`);

console.log(`========== chatAt() ===============`);
var chatAtIndex0 = greet.charAt(0);
console.log(`Char available at index 0 is: ${chatAtIndex0}`);

var charAtIndex7 = greet.charAt(7);
console.log(`Char available at index 7 is: ${charAtIndex7}`);

var charAtIndex50 = greet.charAt(50);
console.log(`Char available at index 50 is: ${charAtIndex50}`);

var str = "Hello buddy how are you doing";
var charAtLastIndex = str.charAt(str.length-1);
console.log(`Char available at last index is: ${charAtLastIndex}`);

console.log(`========== concat() ===============`);
var firstName = "Stew";
var lastName = " Jobs";
var result = firstName + lastName;
console.log(`Concat strings using + operator ${result} `);

var result = firstName.concat(lastName).concat(" I am unique");
console.log(`Concat strings using concat():  ${result} `);

console.log(`========== indexOf() ===============`);
var greet = "Good Morning";
var indexOfO = greet.indexOf("o");
console.log(`Index of char o : ${indexOfO} `);
var indexOfZ = greet.indexOf("z");
console.log(`Index of char z : ${indexOfZ} `);

var indexOfMorning = greet.indexOf("Morning");
console.log(`Index of sub string "Morning" : ${indexOfMorning} `);

console.log(`========== trim() ===============`);
var day = "  Today is Friday   ";
console.log(`Before trim: ${day.length}`);
var trimResult = day.trim();
console.log(`After trim: ${trimResult.length}`);
var totalRemovedSpaces = day.length - trimResult.length;
console.log(`Total Spaces removed after trim() is: ${totalRemovedSpaces}`);

console.log(`========== toString() ===============`);
var age = 22;
console.log(`Age: ${age}, and it's type : ${typeof age}`);
var ageStr = age.toString();
console.log(`Age: ${ageStr}, and it's type : ${typeof ageStr}`);

console.log(`========== includes() ===============`);
var vowels = "aeiou";
var isOAvailable = vowels.includes("ei");
console.log(isOAvailable);

console.log(`========== slice() ===============`);
var greet = "Good Morning my buddy How are you!";
var sliceFive = greet.slice(5);
console.log(sliceFive);
var sliceTwo = greet.slice(2, 10);
console.log(sliceTwo);

console.log(`========== split() ===============`);
var greet = "Good Morning my buddy How are you!";
var words = greet.split(" ");
console.log(words);
var str = "My Life My Rule";
var strWords = str.split(" ");
console.log(strWords);
console.log(strWords.length);