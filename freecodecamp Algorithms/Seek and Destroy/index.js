/* Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. */


function destroyer(arr){
	const args = [...arguments];
	//OUTPUT: [[1,2,3,1,2,3][2,3]
	args.slice(1);

	return arr.filter(el => !args.includes(el));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
