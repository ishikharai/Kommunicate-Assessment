// 3 .  Write a javascript function that prints the reverse of a number.
// Example: if the number is 149, then output should be 941.


let num  = 149;

console.log(reverseNumber(num));

function reverseNumber(num){
    let a = 0;

    while(num !== 0){
        a = (a * 10) + (num % 10);
        num = (num/ 10 | 0);
    }
    return a;
}