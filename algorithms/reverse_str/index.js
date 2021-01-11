 /* function reverseStr (str){
	str = str.split(''); 
	str = str.reverse();
	str = str.join('');
	console.log(str);

	// return str.split('').reverse().join('');
}

reverseStr('hello');

*/

function reverseStr(str){
	//Create and empty string that will host the new created string
	var newString = " ";

	//Create starting point of the loop will be (str.length -1) which corresponds to the last character of the string 'o'
	for (var i= str.length - 1; i>=0; i--){
		newString +=str[i]; //or newString = newString + str[i];
	}
	console.log(newString);
}
reverseStr("hello");
