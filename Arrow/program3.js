//Sum of all numbers in an array using Arrow

let arr = [1, 2, 3 ,4 ,5];

let res = 0;

let add = (arr) => {

    for(let i = 0; i < arr.length; i++){

      res += arr[i];
      
    }
    console.log(res);
}

add(arr);