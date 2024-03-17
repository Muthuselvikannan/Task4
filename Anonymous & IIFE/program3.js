//Sum of all numbers in an array using Anonymous

let arr = [1, 2, 3 ,4 ,5];

let res = 0;

let add = function(arr){

    for(let i = 0; i < arr.length; i++){

      res += arr[i];
      
    }
    console.log(res);
}

add(arr);

//Sum of all numbers in an array using IIFE

(function(arr){

    for(let i = 0; i < arr.length; i++){

      res += arr[i];
      
    }
    console.log(res);
})
(arr);


