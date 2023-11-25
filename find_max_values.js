const array = [2,8,5,1,9];

function findMaxValue(arr){
    let max = array[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxValue(array));