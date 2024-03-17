// Remove duplicates from an array using Anonymous

let arr = [1, 2, 3, 4, 5, 2, 5, 7];

const removeDup = function(arr){
    
    let uniqueArray = [];
    
    for(i =0; i<arr.length; i++){
        
        if(!uniqueArray.includes(arr[i])){
            
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
}
    
    let uniqueArray = removeDup(arr);
    console.log(...uniqueArray);

// Remove duplicates from an array using IIFE

    (function(arr){

        let unique;
    
        let uniqueArray = [];
        
        for(i =0; i<arr.length; i++){
            
            if(!uniqueArray.includes(arr[i])){
                
                uniqueArray.push(arr[i]);
            }
        }
        
        unique = uniqueArray;
    })
        
    console.log(...uniqueArray);

   (arr);