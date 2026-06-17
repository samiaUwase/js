
let a = -5;
let b = -2;
let c = -6;
let d = 0;
let e = -1;

if (a > b && a > c && a > d && a > e) {
    alert("the largest number is " + a);
} 
else if (b > a && b > c && b > d && b > e) {
    alert("the largest number is " + b);
}
else if (c > a && c > b && c > d && c > e) {
    alert("the largest number is " + c);
}
else if (d > a && d > b && d > c && d > e) {
    alert("the largest number is " + d);
}
else if (e > a && e > b && e > c && e > d) {
    alert("the largest number is " + e);
}
else{
    ("the are all equal");
}