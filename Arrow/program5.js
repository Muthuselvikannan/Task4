//Return all the palindromes in an array using Arrow

let arr = ["car", "tat", "pink", "madam", "noon"];


const isPalindrome = (arr) => {
    let a = [];

    for(i = 0; i<arr.length; i++){

        let input = arr[i].toLowerCase();
        let palindrome = input.split("").reverse().join("");

        if(input === palindrome){

            console.log(palindrome);
        }
    }
};
isPalindrome(arr);