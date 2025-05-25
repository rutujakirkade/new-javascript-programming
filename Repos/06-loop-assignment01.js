
console.log(`String:, " I am very good IT Developer" `);

console.log(`*******count the total number of small and capital vowels*******`);
function countVowels(str){
   let count = 0;
   let vowels = "aeiouAEIOU";
   for (let i= 0; i< str.length; i++){


      if (vowels.includes(str[i])){
         count++;
      }
   }
   console.log("Total vowels:", count);
}
countVowels("I am very good IT Developer");

console.log(`*****sum of the cubes from 1 to 5******`);
function sumOfCubes (){
   let sum = 0;
   for (let i = 1; i<=5; i++){
      sum +=i*i*i;
   }
   console.log("Sum of cubes from 1 to 5:",sum);
}
sumOfCubes();

console.log(`*******Odd Position Characters*******`);






