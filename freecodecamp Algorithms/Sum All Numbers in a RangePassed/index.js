/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/


function sumAll(arr){
	// Find min and max numbers in array
	//const max = Math.max(...arr);
	//const min = Math.min(...arr);

	//Destructuring
	const [max, min] = [Math.max(...arr), Math.min(...arr)];


	// variable to hold our sum
	let sum = 0;

	// loop and add all numbers from lowest to highest value
	for(let i = min; i <=max; i++){
         	sum += i;
	}
	return sum;


	/*  Math Solution: 
	 *  
	 *
	 *  const count = max - min + 1;
	 *
	 *  return ((min + max) * count) / 2;
	 *
	 *
	 *  */
}

console.log(sumAll([1,4]));
