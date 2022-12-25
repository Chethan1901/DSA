
// Reverse an array without inbuilt method


function reverseA(arr){
    
    let n = arr.length-1;
    var ind = 0;
    var arr2 = []


    for(let  i=n; i>=0; i--){
        arr2[ind++] == arr[i]
    }
    console.log(arr2);

}

reverseA([8,1,7,4,3])
