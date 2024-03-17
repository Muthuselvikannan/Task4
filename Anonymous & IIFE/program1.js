// Print odd numbers in an array using Anonymous

let arr = [1, 2, 3, 4, 5];

let odd = function(arr){

    for(let i=0; i<arr.length; i++){

    if(arr[i]%2 != 0){

    console.log(arr[i]);

}
    }
};
odd(arr);

// Print odd numbers in an array using IIFE

(function(arr){
    for(let i=0; i<arr.length; i++){

        if(arr[i]%2 != 0){
    
        console.log(arr[i]);
   
}
    }
})
(arr);