
let arr = [1,2,3,4,5];
let target = 6;
console.log(arr);
console.log(deleteE(arr , target));


function deleteE(arr,target){
    let i = 0;
    let n = arr.length;
    for ( ;i<n;i++){
        if(arr[i] == target) break;

    }

    if(i == n) return n;
    
    for( let j = i; j< n-1; j++){
        arr[j] = arr[j+1];
    }

    return arr;
}