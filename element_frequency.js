const array = [1,2,3,1,2,4,1];

function elementFrequency(arr){
    const cleanArray = removeDuplicates(arr);
    let countObj = {};

    for(let k=0; k<cleanArray.length; k++){
        countObj[cleanArray[k]] = 'mandar';
    }
    // return countObj;
}

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

console.log(elementFrequency(array));