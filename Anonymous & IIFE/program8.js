// Rotate an array by k times using Anonymous

let arr = [1, 2, 3, 4, 5];
let k = 2;


const rotate = function(arr, k) {

  for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
  }

  return arr;
}
let rotated = rotate(arr, k);
console.log(...rotated);

// Rotate an array by k times using IIFE

(function(arr, k) {

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
  
    return arr;
  })
console.log(...rotated);

(arr,k);
