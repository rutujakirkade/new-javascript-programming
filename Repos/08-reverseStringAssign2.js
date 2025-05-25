
console.log(`********Function reverseString()with one arg*******`);

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str.charAt(i); 
        if (char !== " ") {
            reversed = reversed + char;
        }
    }
     return reversed;
}
let string1 = "Hard work always pays back";
let string2 = "Soon I will be Angular IT Champ";

console.log("Reversed string1 :", reverseString(string1));
console.log("Reversed string2 :", reverseString(string2));





