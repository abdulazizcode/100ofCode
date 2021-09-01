const arr1 = ['a','b','c','x'];
const arr2 = ['j','h','e','a'];
//should return true


const compareFindMath = (arr1,arr2) =>{
  let isFound = false;
  
  for(let i =0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
      if(arr1[i] === arr2[j]){
        isFound = true
        return isFound
      }
      
    }
  }
  return isFound
}

console.log(compareFindMath(arr1,arr2));
