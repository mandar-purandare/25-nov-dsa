const array = [1,2,2,3,4,4,5];

function removeDuplicates(arr){
    const newArray = [];
    for(let i=0; i<arr.length; i++){
        if(!checkUnique(arr[i], newArray)){
            newArray.push(arr[i]);
        };
    }
    return newArray;
}

function checkUnique(element, newArray){
    for(let j=0; j<newArray.length; j++){
        if(newArray[j] == element){
            return true;
        }
    }
    return false;
}

console.log(removeDuplicates(array));