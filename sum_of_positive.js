const array = [1,-2,3,4,-5];

function addPositiveNums(array){
    let sum = 0;
    for(let i=0; i<array.length-1; i++ ){
        if(array[i] > 0){
            sum = sum + array[i];
        }
    }
    return sum;
}

console.log(addPositiveNums(array));