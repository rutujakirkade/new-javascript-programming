
const arrayNumbers  = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log("Array elements with their index:");
arrayNumbers.forEach((num,index) => {
     console.log(`Index ${index}: ${num}`);
     
});
console.log(`----------------------------------------------------------------------`);
console.log("Positive numbers:");
arrayNumbers.forEach(num => {
    if (num > 0 ){
        console.log(num);
    }
});
console.log(`-------------------------------------------------------------------------`);
let negativeNumbers = [];
arrayNumbers.forEach(num => {
    if (num < 0){
        negativeNumbers.push(num);
    }
});
console.log("Negative numbers array:", negativeNumbers);

console.log(`---------------------------------------------------------------------------`);
console.log(`Even numbers:`);
arrayNumbers.forEach(num => {
    if (num % 2 === 0){
        console.log(num);
        
    }
});

console.log(`-----------------------------------------------------------------------------`);
let sum = 0;
arrayNumbers.forEach(num => {
    sum += num;
});
console.log(" Sum of all elements:", sum);

console.log(`--------------------------------------------------------------------------------`);
console.log(" Values at even index:");
arrayNumbers.forEach((num, index) => {
    if (index % 2 === 0){
        console.log(`Index ${index}: ${num}`);
        
    }
});














