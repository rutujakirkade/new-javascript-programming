
console.log(`-----------------with no arguments and no return value------------------`);
let message = () => {
    console.log("Good Morning, Today is Friday");
};
message();

console.log(`----------------Three arguments , no return values and do multiplication-----------`);
let multiplyThreeNumbers = (a,b,c = 1) => {
    let result = a*b*c;
    console.log(`Multiplication result is: ${result}`);    
};
multiplyThreeNumbers(5,5,2);
multiplyThreeNumbers(10,4);

console.log(`---------------Five arguments , return value and do addition-----------------`);
let addFiveValues = (a,b,c,d,e) => {
    return a+b+c+d+e;
};
let sum1 = addFiveValues(100,100,200,349,756);
console.log(`Addition of number is: ${sum1}`);

let sum2 = addFiveValues("I am",  "learning",  "ES6",  "features",  "in depth");
console.log(`string is: ${sum2}`);





