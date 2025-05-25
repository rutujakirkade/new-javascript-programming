
console.log("========String Hands-on Assignment========");

var name;
console.log("Given String is :", "  Hey you are doing good, keep it up    ");

var greet ="  Hey you are doing good, keep it up    ";
console.log(`=======Find the length of the string====`);
var greetLength = greet.length;

console.log(`${greet} - string length is : ${greetLength}`);

console.log("=====before and after Trim ====");

var name1 = "  Hey you are doing good, keep it up    ";
console.log(`Before trim: ${name1.length}`);
var trimResult = name1.trim();
console.log(`After trim: ${trimResult.length}`);

console.log("=======total spaces removed====");

var totalRemovedSpaces = name1.length - trimResult.length;
console.log(`Total Spaces removed () is: ${totalRemovedSpaces}`);

console.log("========first and last character====");

var str ="  Hey you are doing good, keep it up    ";
console.log(`Given string:, str`);
var strAfterTrim = str.trim();
strAfterTrim.charAt(0);
console.log(`first character: ${strAfterTrim.charAt(0)} and last character: ${strAfterTrim.charAt(strAfterTrim.length-1)}`);

console.log("=========count of total words======");
console.log(`Number of words in the String ${strAfterTrim.length}`);

console.log("============Index of good word in the string==============");
console.log(`index of good word from the string`,strAfterTrim.indexOf("good"));
console.log("===========Printing the substring starting from index 22=======");
console.log(` substring starting index from 22 ${strAfterTrim.substring(22)}`);
console.log("========Ending word of the string========");
var word = "up";
var isUpAvailable = word.endsWith("up");
console.log(isUpAvailable);

console.log("========Starting word of the string======");
var word ="Hey";
var isHeyAvailable = word.startsWith("Hey");
console.log(isHeyAvailable);













