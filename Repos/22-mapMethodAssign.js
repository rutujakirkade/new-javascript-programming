
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`---------------------------------------------------------------------------------------`);
const add10Array = arrayNumbers.map(num => num + 10);
console.log("Array after adding 10 to each element:", add10Array);
console.log(`------------------------------------------------------------------------------------------------`);
const cubeArray = arrayNumbers.map(num => num*num*num);
console.log("Cube of each element:", cubeArray);
console.log(`----------------------------------------------------------------------------------------------`);
const indexAddedArray = arrayNumbers.map((num,index) => num + index);
console.log("Array after adding index to each element:", indexAddedArray);





