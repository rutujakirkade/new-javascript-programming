
console.log(`******First and Last element on console******`);
const fruits = ["Banana","Orange","Apple","Mango","Watermelon"];
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length-1]);

console.log(`******Add 'Papaya' before 'Banana'*****`);
fruits.unshift("Papaya");
console.log("After adding Papaya before Banana:",fruits);

console.log(`*****remove 'Mango' from array******`);
const remove1 = fruits.splice(4,1);
console.log("Remove Mango from array:", fruits);

console.log(`*****Add 'Pineapple' at the end`);
fruits.push("Pineapple");
console.log("After adding Pineapple:", fruits);

console.log(`****Insert 'Dragon fruit' before Watermelon***** `);
fruits.splice(fruits.length-2,0, "Dragon Fruit");
console.log("After inserting Dragon Fruit:", fruits);

console.log(`******Replace 'Orange' with 'Kiwi*****'`);
fruits[2]="Kiwi";
console.log("replace:", fruits);

console.log(`*****Log elements from index 1 to 4******`);
const slicedFruits = fruits.slice(0,4);
console.log("Elements from index 1 to 4:", slicedFruits);

console.log(`******select and log last 3 elemnts*******`);
const last3Fruits = fruits.slice(fruits.length -3);
console.log("Last 3 elements:", last3Fruits);


















 
