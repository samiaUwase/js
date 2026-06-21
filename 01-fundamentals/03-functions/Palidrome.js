function checkPalindrome(str) {
    let cleaned=str.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
    let reversed=cleaned.split('').reverse().join('');
    if(cleaned===reversed){
        console.log(str + ' is a palindrome');
    } else {
        console.log(str + ' is not a palindrome');
    }  
    return cleaned===reversed; 
}
console.log(checkPalindrome('mada-m'));
console.log(checkPalindrome('hello'));
console.log(checkPalindrome('A man, a plan, a canal: Panama'));
console.log(checkPalindrome('Nurses run'));