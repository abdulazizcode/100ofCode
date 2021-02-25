function  range(start,end,step){
    if(step == null) step = 1;
    let newArr = [];

      if(step > 0){
	 for(let i = start; i<=end; i+= step){
            newArr.push(i);
       }
      }else{
	  for(let i = start; i>=end; i++)
              newArr.push(i);
      }
      return newArr;
}

console.log(range(1,10,2)); //custom step
console.log(range(1,10)); //default step

