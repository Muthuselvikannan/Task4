//Return all the prime numbers in an array using Arrow

let arr = [1, 2, 3, 4, 5];


let prime = (arr) => {
    let a = [];

    for(let i =1; i < arr.length; i++){

       let isPrime = true; 
       
       if (arr[i]<=1){

        isPrime = false;
       }else{
    

    for(let j = 2; j < arr[i]; j++){

        if(arr[i]%j === 0){

            isPrime = false;   
            break;
        }
    }
}   

if (isPrime){
    
    a.push(arr[i]);
}
}
console.log(...a);

};

prime(arr);