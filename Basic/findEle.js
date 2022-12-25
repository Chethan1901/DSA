//Find the given element in an array and return it's index if present else -1;

function findEle(arr,target){

    for( let i=0; i<arr.length; i++){
        if(arr[i] == target){
            console.log(i)
        }else{
            console.log(`-1`)
        }
    }
    
}
findEle([1,8,3,8,5],8)