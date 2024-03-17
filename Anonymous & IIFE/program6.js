//Return median of the two sorted arrays of the same size using Anonymous

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [7, 8, 7, 12, 9];

const median = function(arr1, arr2){
    
        let merged = arr1.concat(arr2);
        merged.sort((a,b)=>(a-b));
        let mid = Math.floor(merged.length/2);

    
        if (merged.length%2===0){
            
            return (merged[mid-1]+merged[mid])/2;
        }
        else{
            
            return merged[mid];
        }
        
};
        const medianValue = median(arr1, arr2);
        console.log(medianValue);

//Return median of the two sorted arrays of the same size using IIFE

        (function(arr1, arr2){
    
            let merged = arr1.concat(arr2);
            merged.sort((a,b)=>(a-b));
            let mid = Math.floor(merged.length/2);
            let medianValue;
        
            if (merged.length%2===0){

                medianValue = (merged[mid-1]+merged[mid])/2;
            }
            else{
                
                medianValue = merged[mid];
            }
            console.log(medianValue);    
    })
     (arr1, arr2);       
            
    