const prompt = require('prompt-sync')();

function checkPalindrome(a) {
    
    while ( a > 0 ) {
        rem = a % 10;
        rev = rev * 10 + rem;
        a = Math.floor(a / 10);
    }
    
    if ( rev == b ) {
        return 0;
    }
    else {
        return 1;
    }
}

let a = parseInt(prompt('Enter the first number: '));
let b = parseInt(prompt('Enter the second number: '));
let rem = 0;
let rev = 0;

if (checkPalindrome(a) == 0) {
    console.log(a+ " & " +b + " are palindrome");  
}
else {
    console.log(a+ " & " +b + " are not palindrome");
}