Getting a random value from a JavaScript array

const names = ['Aziz', 'Aziza', 'Malik', 'Manon'];

const randomElement = names[Math.floor(Math.random() * names.length)];

console.log(randomElement);
