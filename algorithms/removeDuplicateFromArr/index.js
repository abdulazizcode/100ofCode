//Set is stroing unique values thats why duplicate numbers will be deleted!

const numbers = [10, 11, 12, 12, 15];
console.log(Array.from(new Set(numbers)));


//const filtered__array = [...new Set(numbers)];
//console.log(filtered__array);



let chars = ['A', 'B', 'A', 'C', 'B'];

const uniqueChars = [...new Set(chars)];
console.log(uniqueChars);

const unique = chars.filter((el,index) =>{
  return chars.indexOf(el) === index
})
console.log(unique);

let uniqueChar = [];
chars.forEach((c) => {
    if (!uniqueChar.includes(c)) {
        uniqueChar.push(c);
    }
});

console.log(uniqueChars);

