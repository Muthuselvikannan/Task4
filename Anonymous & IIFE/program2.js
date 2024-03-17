//Convert all the strings to titlecaps array using Anonymous

let arr = "happy world means happy life";

let res = function(arr){

        arr = arr.toLowerCase().split(' ');
        for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
        } 
        console.log(arr.join(' '));
    };

     res(arr);

//Convert all the strings to titlecaps array using IIFE     

(function(arr){
    
        arr = arr.toLowerCase().split(' ');
        for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
        } 
        console.log(arr.join(' '));
    }
) (arr);
