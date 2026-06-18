var a=18;
var b=8;
var gcd;
 while (a!==b){
    if (a>b){
        a -=b;
    
    }
    else{
        b -=a;
    }
 }
 gcd=a;
 console.log('GCD:',gcd);