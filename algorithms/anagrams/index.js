const validateAnagram =(str1, str2) =>{
  //Check if both string length are same 
  if(str1.length !== str2.length){
    return false
  }
  //Initializa empty object
  let lookup ={};
  
  //loop through first string 
  for(let i = 0; i<str1.length; i++){
    //after each iteration save fist char in letter
    let letter = str1[i];
    lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
  }
  //loop throught second string
  for(let i = 0; i<str2.length; i++){
    //after each iteration save fist char in letter
    let letter = str2[i];
    //check if the character is not exsist
    if(!lookup[letter]){
      return false
    }else{
      //remove each character
      lookup[letter] -=1;
    }
  }
  return true
}

console.log(validateAnagram('Aziz','zizA'));
