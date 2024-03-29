
const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  // While Start Index Is Less Than Or Equal To End Index
  while(startIndex <= endIndex) {
    // Define Middle Index (This Will Change When Comparing )
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    // Compare Middle Index With Target For Match
    if(array[middleIndex] === target) {
      return console.log('Target was found at index ' + middleIndex);
    }

    // Search Right Side Of Array
    if(target > array[middleIndex]) {
      console.log('Searching the right side of Array');
      // Assign Start Index And Increase The Index By 1 To Narrow Search
      startIndex = middleIndex + 1;
    }

    // Search Left Side Of Array
    if(target < array[middleIndex]) {
      // Assign End Index And Increase The Index By 1 To Narrow Search
      console.log('Searching the left side of array');
      endIndex = middleIndex - 1;
    }

    // Not Found In This Iteration
    else {
      console.log('Not Found this loop. Looping again.');
    }
  }

  // If Target Is Not Found
  console.log('Target value not found in array');
};

console.log(binarySearch([2,5,6,54,89,3,6],6));


/////////////////////////////////////////////////////// SORTING ARRAY ////////////////////////////////////
const arr = [21,25,65,99,2,5,6,85];

function swap(arr,index1,index2){
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
function bubleSort(arr){
	for(let i = 0; i<arr.length;i++){
		for(let j =0; j<=i; j++){
			if(arr[i] < arr[j]){
				swap(arr, i, j)
			}
		}
	}
	console.log(arr);
}

bubleSort(arr);
