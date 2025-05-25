const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60,2, 11];
console.log(arrayNumbers);

console.log(`<---------1. Total elements---------->`);
console.log("Total elements:", arrayNumbers.length);

console.log(`<--------2. First and Last element------>`);
console.log("First element:", arrayNumbers[0]);
console.log("Last element:",arrayNumbers[arrayNumbers.length-1] );

console.log(`<--------3. Third last element------>`);
console.log("Third last element:",arrayNumbers[arrayNumbers.length-3]);

console.log(`<--------4. Even numbers------->`);
for (const num of arrayNumbers){
    if (num % 2 === 0)
        console.log(num);
}
console.log(`<--------5. Odd numbers------->`);
for (const num of arrayNumbers){
    if (num % 2 !== 0)
        console.log(num);
}
console.log(`<--------6. Even  positioned elements and sum------>`);
let evenPossSum = 0;
for (let i=0; i< arrayNumbers.length;i +=2){
    console.log(arrayNumbers[i]);
    evenPossSum += arrayNumbers[i];
}
console.log(" Sum:", evenPossSum);

console.log(`<--------7. Odd positioned elements and sum-------->`);
let oddPossSum = 0;
for (let i=1; i< arrayNumbers.length;i +=2){
    console.log(arrayNumbers[i]);
    oddPossSum += arrayNumbers[i];
}
console.log(" Sum:", oddPossSum);

console.log(`<--------8. Sum of all elements------->`);
let totalSum = 0;
for (const num of arrayNumbers){
    totalSum += num;
}
console.log(" Sum of all elements:", totalSum);

console.log(`<--------9. Numbers that are multiples of 5-------->`);
for( const num of arrayNumbers){
    if (num % 5 === 0)
        console.log(num);
}
console.log(`<--------10. Is number 115 available---------->`);
console.log(arrayNumbers.includes(115));

console.log(`<--------11. Is number 23 available--------->`);
console.log(arrayNumbers.includes(23));

console.log(`<---------12. Insert 55,66 at index 3---------->`);
arrayNumbers.splice(3,0,55,66);
console.log("Array after inserting 55,66 at index 3:",arrayNumbers);


console.log(`<---------13. Delete 3 elements starting from index 4--------> `);
arrayNumbers.splice(4,3);
console.log("Array after deleting 3 elements from index 4:", arrayNumbers);




















