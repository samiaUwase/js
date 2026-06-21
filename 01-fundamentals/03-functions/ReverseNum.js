
function reverseNum(num){
    num = num.toString().split('').reverse().join('');
    return num;
}
console.log(reverseNum(12345));