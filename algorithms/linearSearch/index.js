function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            console.log([i]);
        }
    }
}
const myArr = [3,2,5,3,2,6,8];

console.log(linearSearch(myArr,3));

